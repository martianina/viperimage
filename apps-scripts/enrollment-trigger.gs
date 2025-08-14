/* =======================  CONFIG  ======================= */
// Google Sheet column headers (updated for new structure)
const EMAIL_LABEL       = 'Email Address';
const FIRST_NAME_LABEL  = 'First Name';
const LAST_NAME_LABEL   = 'Last Name';
const STREET_LABEL      = 'Street Address';
const CITY_LABEL        = 'City';
const STATE_LABEL       = 'State/Province';
const COUNTRY_LABEL     = 'Country';
const POSTAL_LABEL      = 'Postal Code';
const CONSENT_PROTOCOL  = 'Consent Protocol';
const CONSENT_REID      = 'Consent Reidentification';

// MailerLite
const ML_API_TOKEN = 'YOUR_MAILERLITE_TOKEN_HERE';
const ML_GROUP_ID = 'YOUR_MAILERLITE_GROUP_ID_HERE';

// Google Drive folder for JSON files
const DRIVE_FOLDER_ID = '1vy7le5zEl0cWIzRQ8gM_LYgnZ2k14xWw';
/* ======================================================== */

function onFormSubmit(e) {
  try {
    Logger.log('Trigger fired! Event: ' + JSON.stringify(e));
    
    // Get the active sheet and find the latest row
    const sheet = SpreadsheetApp.getActiveSheet();
    const lastRow = sheet.getLastRow();
    
    Logger.log('Last row: ' + lastRow);
    
    // Only process if we have data beyond headers
    if (lastRow <= 1) {
      Logger.log('No data rows found');
      return;
    }
    
    // Get the latest row data
    const rowData = sheet.getRange(lastRow, 1, 1, sheet.getLastColumn()).getValues()[0];
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    
    Logger.log('Row data: ' + JSON.stringify(rowData));
    Logger.log('Headers: ' + JSON.stringify(headers));
    
    /* helper → get value from row data */
    const get = (label) => {
      const columnIndex = headers.indexOf(label);
      return columnIndex >= 0 ? rowData[columnIndex] : '';
    };

  /* ---------- 1. write de-identified JSON to Drive ---------- */
  const nftData = {
    timestamp: get('Timestamp'),
    consents_v1: get(CONSENT_PROTOCOL),
    reidentification_v1: get(CONSENT_REID),
    // De-identified metadata only - no PII
    enrollment_date: new Date().toISOString(),
    consent_provided: get(CONSENT_PROTOCOL) === 'TRUE',
    reidentification_opted_in: get(CONSENT_REID) === 'TRUE',
    // Geographic metadata (de-identified)
    region: get(COUNTRY_LABEL),
    // No email, names, or addresses in JSON
  };

  DriveApp.getFolderById(DRIVE_FOLDER_ID)
          .createFile(
            `enrollment-${new Date().toISOString().replace(/[:.]/g, '-')}.json`,
            JSON.stringify(nftData, null, 2),
            MimeType.PLAIN_TEXT
          );

  /* ---------- 2. sync subscriber to MailerLite ---------- */
  const email = get(EMAIL_LABEL);
  if (!email) {
    Logger.log('No email—MailerLite sync skipped');
    return;
  }

  const mlPayload = {
    email: email,
    fields: {
      name:        (`${get(FIRST_NAME_LABEL)} ${get(LAST_NAME_LABEL)}`).trim(),
      first_name:  get(FIRST_NAME_LABEL),
      last_name:   get(LAST_NAME_LABEL),
      street_address: get(STREET_LABEL),
      city: get(CITY_LABEL),
      state: get(STATE_LABEL),
      country: get(COUNTRY_LABEL),
      postal_code: get(POSTAL_LABEL)
    },
    groups: [ML_GROUP_ID]
  };

  // Debug logging
  Logger.log('MailerLite payload: ' + JSON.stringify(mlPayload));
  
  const response = UrlFetchApp.fetch(
                   'https://connect.mailerlite.com/api/subscribers',
                   {
                     method: 'post',
                     contentType: 'application/json',
                     headers: { Authorization: 'Bearer ' + ML_API_TOKEN },
                     payload: JSON.stringify(mlPayload),
                     muteHttpExceptions: true
                   }
                 );
                 
  const resCode = response.getResponseCode();
  const responseText = response.getContentText();
  
  Logger.log('MailerLite response code: ' + resCode);
  Logger.log('MailerLite response: ' + responseText);

  if (resCode !== 200 && resCode !== 201) Logger.log('MailerLite error ' + resCode);
  
  } catch (error) {
    Logger.log('Error in onFormSubmit: ' + error.toString());
    Logger.log('Error stack: ' + error.stack);
  }
}

// Simple test function to verify triggers work
function testTrigger(e) {
  Logger.log('TEST TRIGGER FIRED!');
  Logger.log('Event: ' + JSON.stringify(e));
  
  // Try to access the sheet directly
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    Logger.log('Sheet name: ' + sheet.getName());
    Logger.log('Last row: ' + sheet.getLastRow());
  } catch (error) {
    Logger.log('Error accessing sheet: ' + error.toString());
  }
}

 