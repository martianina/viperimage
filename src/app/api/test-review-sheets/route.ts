import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function GET() {
  try {
    // Check if environment variables are set
    const requiredEnvVars = [
      'GOOGLE_SHEETS_PRIVATE_KEY',
      'GOOGLE_SHEETS_CLIENT_EMAIL',
      'GOOGLE_SHEETS_REVIEW_SHEET_ID'
    ];

    const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
    
    if (missingVars.length > 0) {
      return NextResponse.json({
        error: 'Missing environment variables',
        missing: missingVars
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

    // Test reading the spreadsheet
    const response = await sheets.spreadsheets.get({
      spreadsheetId: process.env.GOOGLE_SHEETS_REVIEW_SHEET_ID,
    });

    return NextResponse.json({
      success: true,
      message: 'Product Review Google Sheets API connection successful',
      spreadsheetTitle: response.data.properties?.title,
      sheets: response.data.sheets?.map(sheet => sheet.properties?.title)
    });

  } catch (error) {
    console.error('Product Review Google Sheets API test error:', error);
    return NextResponse.json({
      error: 'Product Review Google Sheets API connection failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
} 