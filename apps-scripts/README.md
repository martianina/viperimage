# Google Apps Scripts for SPF Study Project

This folder contains Google Apps Script files for automating the SPF Study forms and data processing.

## Files Overview

### 1. `enrollment-trigger.gs`
- **Purpose**: Handles enrollment form submissions
- **Sheet**: SPF Study Enrollments
- **Trigger**: `onFormSubmit`
- **Functions**:
  - `onFormSubmit(e)` - Main trigger function

### 2. `product-review-trigger.gs`
- **Purpose**: Handles product review form submissions
- **Sheet**: SPF Product Reviews
- **Trigger**: `onFormSubmit`
- **Functions**:
  - `onFormSubmit(e)` - Main trigger function

### 3. `survey-trigger.gs`
- **Purpose**: Handles survey form submissions (future)
- **Sheet**: SPF Surveys (to be created)
- **Trigger**: `onFormSubmit`
- **Functions**:
  - `onFormSubmit(e)` - Main trigger function

## Setup Instructions

1. **Copy the Apps Script code** from the appropriate `.gs` files
2. **Paste into Google Apps Script** editor
3. **Update configuration variables**:
   - `ML_API_TOKEN` - Your MailerLite API token
   - `ML_GROUP_ID` - Your MailerLite group ID
   - `DRIVE_FOLDER_ID` - Your Google Drive folder ID for JSON files
4. **Set up triggers in Google Apps Script editor**:
   - Go to "Triggers" in the left sidebar
   - Click "+ Add Trigger"
   - Choose function: `onFormSubmit`
   - Event source: "From spreadsheet"
   - Event type: "On form submit"
   - Select your Google Sheet
5. **Save and test** the automation

## Integration Notes

- **Form Submissions**: Both enrollment and product review forms now submit directly to Google Sheets via the Next.js API
- **Triggers**: Apps Scripts will fire when new rows are added to the sheets
- **Data Format**: The scripts expect the data in the same format as the CSV headers

## Next Steps

1. Retrieve your prototype Apps Script
2. Harmonize the logic with these placeholder files
3. Update sheet IDs and function names as needed
4. Test the complete automation flow 