import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      consentProtocol,
      consentReidentification,
      streetAddress,
      city,
      state,
      country,
      postalCode,
      hasConsented
    } = body;

    // Validate required fields
    const requiredFields = [
      'firstName', 'lastName', 'email', 'consentProtocol',
      'streetAddress', 'city', 'state', 'country', 'postalCode'
    ];

    const missingFields = requiredFields.filter(field => !body[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json({
        error: 'Missing required fields',
        missing: missingFields
      }, { status: 400 });
    }

    // Validate consent
    if (!hasConsented) {
      return NextResponse.json({
        error: 'Consent not provided',
        details: 'User must review and accept the informed consent'
      }, { status: 400 });
    }

    // Validate US residency
    const usCountries = ['united states', 'usa', 'us'];
    if (!usCountries.includes(country.toLowerCase())) {
      return NextResponse.json({
        error: 'Study limited to US residents',
        details: 'This study is currently limited to participants in the United States'
      }, { status: 400 });
    }

    // Create auth client
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n').replace(/"/g, '').trim(),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Prepare data for Google Sheets
    const rowData = [
      new Date().toISOString(), // Timestamp
      firstName,
      lastName,
      email,
      consentProtocol ? 'TRUE' : 'FALSE',
      consentReidentification ? 'TRUE' : 'FALSE',
      streetAddress,
      city,
      state,
      country,
      postalCode,
      hasConsented ? 'TRUE' : 'FALSE',
      new Date().toISOString() // Submission Date
    ];

    // Append data to Google Sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_SHEET_ID,
      range: 'Sheet1!A:M', // Adjust range based on your headers
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [rowData]
      }
    });

    return NextResponse.json({
      success: true,
      message: 'Enrollment submitted successfully',
      rowCount: response.data.updates?.updatedRows || 1
    });

  } catch (error) {
    console.error('Enrollment submission error:', error);
    return NextResponse.json({
      error: 'Failed to submit enrollment',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
} 