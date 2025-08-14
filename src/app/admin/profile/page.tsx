'use client';

import { useState } from 'react';
import { FaUser, FaFlask, FaClipboardList, FaChartBar, FaShieldAlt, FaCog, FaEdit, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Card from '@/components/card';

const ParticipantProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showAccountSettings, setShowAccountSettings] = useState(false);

  // Mock data - replace with real data from your backend
  const participantData = {
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    enrollmentDate: '2024-01-15',
    studyPhase: 'Product Review',
    surveysCompleted: 3,
    totalSurveys: 5,
    productReviews: 2,
    skinType: 'Type III (Medium)',
    location: 'California, USA',
    ageRange: '25-34',
    consentStatus: 'Active',
    communicationPref: 'Weekly',
    pointsEarned: 150
  };

  const progressPercentage = (participantData.surveysCompleted / participantData.totalSurveys) * 100;

  return (
    <div className="flex w-full flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-end">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="flex items-center px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors"
        >
          <FaEdit className="w-4 h-4 mr-2" />
          {isEditing ? 'Save Changes' : 'Edit Profile'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Study Status Card */}
        <div className="lg:col-span-2">
          <Card extra="w-full h-full p-6">
            <div className="flex items-center mb-6">
              <FaFlask className="w-6 h-6 text-orange-600 mr-3" />
              <h2 className="text-xl font-semibold text-gray-900">Study Participation</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Current Status</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Study Phase:</span>
                    <span className="font-medium text-orange-600">{participantData.studyPhase}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Enrollment Date:</span>
                    <span className="font-medium">{participantData.enrollmentDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Consent Status:</span>
                    <span className="font-medium text-green-600">{participantData.consentStatus}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Points Earned:</span>
                    <span className="font-medium text-orange-600">{participantData.pointsEarned}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Progress</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Surveys Completed</span>
                      <span className="font-medium">{participantData.surveysCompleted}/{participantData.totalSurveys}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-orange-600 h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${progressPercentage}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Product Reviews:</span>
                    <span className="font-medium">{participantData.productReviews}</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Research Profile Card */}
        <div>
          <Card extra="w-full h-full p-6">
            <div className="flex items-center mb-6">
              <FaUser className="w-6 h-6 text-orange-600 mr-3" />
              <h2 className="text-xl font-semibold text-gray-900">Research Profile</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Skin Type</label>
                <div className="text-gray-900 font-medium">{participantData.skinType}</div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Age Range</label>
                <div className="text-gray-900">{participantData.ageRange}</div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <div className="text-gray-900">{participantData.location}</div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Communication</label>
                <div className="text-gray-900">{participantData.communicationPref}</div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Account Settings */}
      <Card extra="w-full p-6">
        <div 
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setShowAccountSettings(!showAccountSettings)}
        >
          <div className="flex items-center">
            <FaCog className="w-6 h-6 text-orange-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900">Account Settings</h2>
          </div>
          {showAccountSettings ? (
            <FaChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <FaChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </div>
        
        {showAccountSettings && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Personal Information</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    defaultValue={participantData.name}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:bg-gray-50"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    defaultValue={participantData.email}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:bg-gray-50"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Privacy & Communication</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Communication Frequency</label>
                  <select
                    disabled={!isEditing}
                    defaultValue={participantData.communicationPref}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:bg-gray-50"
                  >
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Never">Never</option>
                  </select>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="dataSharing"
                    defaultChecked
                    disabled={!isEditing}
                    className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                  />
                  <label htmlFor="dataSharing" className="ml-2 text-sm text-gray-700">
                    Allow data sharing for research purposes
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}
      </Card>

      {/* Quick Actions */}
      <Card extra="w-full p-6">
        <div className="flex items-center mb-6">
          <FaClipboardList className="w-6 h-6 text-orange-600 mr-3" />
          <h2 className="text-xl font-semibold text-gray-900">Quick Actions</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center justify-center px-4 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors">
            <FaClipboardList className="w-5 h-5 mr-2" />
            Continue Survey
          </button>
          
          <button className="flex items-center justify-center px-4 py-3 bg-white hover:bg-gray-50 text-orange-600 border-2 border-orange-600 rounded-lg transition-colors">
            <FaChartBar className="w-5 h-5 mr-2" />
            View Progress
          </button>
          
          <button className="flex items-center justify-center px-4 py-3 bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-300 rounded-lg transition-colors">
            <FaShieldAlt className="w-5 h-5 mr-2" />
            Privacy Settings
          </button>
        </div>
      </Card>
    </div>
  );
};

export default ParticipantProfile;
