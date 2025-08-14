import React from 'react';

export default function SurveyPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-navy-700 mb-2">
          Sunscreen User Survey
        </h1>
        <p className="text-gray-600">
          Share your sunscreen usage patterns and preferences
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="max-w-2xl">
          <h2 className="text-xl font-semibold mb-4">User Survey Form</h2>
          <p className="text-gray-600 mb-6">
            This is a placeholder for the user survey form. The survey will collect comprehensive data 
            about sunscreen usage habits, preferences, and behavioral patterns.
          </p>

          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-navy-700 mb-2">Survey Questions (Placeholder)</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Frequency of Sunscreen Usage</li>
                <li>• Preferred Application Times</li>
                <li>• Activities Requiring Sun Protection</li>
                <li>• Skin Sensitivity and Concerns</li>
                <li>• Brand Preferences and Loyalty</li>
                <li>• Price Sensitivity and Budget</li>
                <li>• Environmental and Ethical Considerations</li>
                <li>• Previous Sun Damage Experience</li>
              </ul>
            </div>

            <div className="bg-brand-50 border border-brand-200 rounded-lg p-4">
              <h3 className="font-medium text-brand-700 mb-2">Research Value</h3>
              <p className="text-sm text-brand-600">
                This survey will provide valuable insights into user behavior and preferences, 
                helping to inform product development and safety recommendations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 