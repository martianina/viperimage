/**
 * Google Apps Script for SPF Survey Form
 * 
 * This script handles triggers and automation for the survey Google Sheet.
 * 
 * Sheet: SPF Surveys (future)
 * Trigger: onFormSubmit (when new survey is added)
 * 
 * TODO: Add your existing Apps Script logic here
 * - Survey processing
 * - Data analysis
 * - Follow-up communications
 * - Research data aggregation
 */

function onSurveySubmit(e) {
  // This function will be triggered when a new survey is submitted
  // e.range contains the row that was added
  // e.values contains the values in the new row
  
  try {
    // Get the new row data
    const row = e.range.getRow();
    const values = e.values[0];
    
    // Log the submission
    console.log('New survey submitted:', values);
    
    // TODO: Add your existing logic here
    // - Process survey responses
    // - Send completion email
    // - Aggregate research data
    // - Trigger follow-up studies
    // - Update participant status
    
  } catch (error) {
    console.error('Error processing survey:', error);
  }
}

 