import { NextResponse } from 'next/server';

export async function GET() {
  const envVars = {
    GOOGLE_SHEETS_PRIVATE_KEY: process.env.GOOGLE_SHEETS_PRIVATE_KEY ? 'SET' : 'NOT SET',
    GOOGLE_SHEETS_CLIENT_EMAIL: process.env.GOOGLE_SHEETS_CLIENT_EMAIL ? 'SET' : 'NOT SET',
    GOOGLE_SHEETS_SHEET_ID: process.env.GOOGLE_SHEETS_SHEET_ID ? 'SET' : 'NOT SET',
    GOOGLE_SHEETS_REVIEW_SHEET_ID: process.env.GOOGLE_SHEETS_REVIEW_SHEET_ID ? 'SET' : 'NOT SET',
    GOOGLE_PLACES_API_KEY: process.env.GOOGLE_PLACES_API_KEY ? 'SET' : 'NOT SET',
    SUPABASE_URL: process.env.SUPABASE_URL ? 'SET' : 'NOT SET',
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY ? 'SET' : 'NOT SET',
  };

  return NextResponse.json({
    message: 'Environment variables status',
    variables: envVars,
    // Show first few characters of each value (for debugging)
    privateKeyPreview: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.substring(0, 20) + '...',
    clientEmailPreview: process.env.GOOGLE_SHEETS_CLIENT_EMAIL?.substring(0, 20) + '...',
    spreadsheetIdPreview: process.env.GOOGLE_SHEETS_SHEET_ID?.substring(0, 20) + '...',
    reviewSheetIdPreview: process.env.GOOGLE_SHEETS_REVIEW_SHEET_ID?.substring(0, 20) + '...',
  });
} 