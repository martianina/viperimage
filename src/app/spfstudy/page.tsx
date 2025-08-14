'use client';

import { useState } from 'react';
import { FaUserPlus, FaClipboardList } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const SPFStudyLandingPage = () => {
  const [isEnrolling, setIsEnrolling] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 flex flex-col items-center justify-center p-4">
      {/* Favicon */}
      <div className="mb-12">
        <Image
          src="/favicon.png"
          alt="Ginger Science"
          width={120}
          height={120}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-6 w-full max-w-sm">
        <button
          onClick={() => setIsEnrolling(true)}
          className="flex items-center justify-center px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          <FaUserPlus className="w-5 h-5 mr-3" />
          Enroll in Study
        </button>
        <Link
          href="/review"
          className="flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-50 text-orange-600 border-2 border-orange-600 font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          <FaClipboardList className="w-5 h-5 mr-3" />
          Review Products
        </Link>
      </div>

      {/* Enrollment Modal */}
      {isEnrolling && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Enroll in Study</h3>
            <p className="text-gray-600 mb-6">
              To enroll in the SPF study, you'll need to create an account or sign in to your existing account.
            </p>
            <div className="flex flex-col gap-3">
              <Link
                href="/auth/sign-up"
                className="w-full px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors text-center"
              >
                Create New Account
              </Link>
              <Link
                href="/auth/sign-in"
                className="w-full px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-lg transition-colors text-center"
              >
                Sign In
              </Link>
              <button
                onClick={() => setIsEnrolling(false)}
                className="w-full px-6 py-3 text-gray-600 hover:text-gray-800 font-medium"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SPFStudyLandingPage;
