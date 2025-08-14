import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    const {
      email,
      colorSample,
      usageDetails,
      effectiveness,
      tolerance,
      lookAndFeel,
      smell,
      finalRating,
      wouldRecommend,
      wouldBuy,
      additionalComments,
      stickerBefore,
      stickerAfter,
      fadeTime,
      lastedUntilFade
    } = body;

    // Validate required fields
    const requiredFields = [
      'email', 'colorSample', 'usageDetails', 'effectiveness',
      'tolerance', 'lookAndFeel', 'smell', 'finalRating',
      'wouldRecommend', 'wouldBuy'
    ];

    const missingFields = requiredFields.filter(field => !body[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json({
        error: 'Missing required fields',
        missing: missingFields
      }, { status: 400 });
    }

    // Validate arrays have content
    if (!Array.isArray(usageDetails) || usageDetails.length === 0) {
      return NextResponse.json({
        error: 'Usage details must be selected',
        details: 'Please select at least one usage option'
      }, { status: 400 });
    }

    if (!Array.isArray(tolerance) || tolerance.length === 0) {
      return NextResponse.json({
        error: 'Tolerance must be selected',
        details: 'Please select at least one tolerance option'
      }, { status: 400 });
    }

    if (!Array.isArray(lookAndFeel) || lookAndFeel.length === 0) {
      return NextResponse.json({
        error: 'Look and feel must be selected',
        details: 'Please select at least one look and feel option'
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
      email,
      colorSample,
      usageDetails.join('; '), // Join array with semicolons
      effectiveness,
      tolerance.join('; '), // Join array with semicolons
      lookAndFeel.join('; '), // Join array with semicolons
      smell,
      finalRating,
      wouldRecommend,
      wouldBuy,
      additionalComments || '',
      stickerBefore ? 'File uploaded' : '', // Just indicate if file was uploaded
      stickerAfter ? 'File uploaded' : '', // Just indicate if file was uploaded
      fadeTime || '',
      lastedUntilFade || '',
      new Date().toISOString() // Submission Date
    ];

    // Append data to Google Sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_REVIEW_SHEET_ID,
      range: 'product-review-headers!A:Q', // Use the correct sheet name
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [rowData]
      }
    });

    return NextResponse.json({
      success: true,
      message: 'Product review submitted successfully',
      rowCount: response.data.updates?.updatedRows || 1
    });

  } catch (error) {
    console.error('Product review submission error:', error);
    return NextResponse.json({
      error: 'Failed to submit product review',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
} 