'use client';

import React from 'react';
import { FaUserPlus, FaClipboardList, FaChartBar, FaFlask, FaShieldAlt, FaBoxes, FaDatabase, FaFileAlt } from 'react-icons/fa';
import { IoDocuments } from 'react-icons/io5';
import Link from 'next/link';

const AdminDefaultPage = () => {
  const quickActions = [
    {
      name: 'Study Enrollment',
      path: '/enrollment',
      icon: <FaUserPlus className="h-6 w-6" />,
      description: 'Join our research study and contribute to sunscreen safety data.',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      name: 'Product Review',
      path: '/review',
      icon: <FaClipboardList className="h-6 w-6" />,
      description: 'Review and rate sunscreen products based on your experience.',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      name: 'User Survey',
      path: '/survey',
      icon: <FaChartBar className="h-6 w-6" />,
      description: 'Share your sunscreen usage patterns and preferences.',
      color: 'bg-purple-500 hover:bg-purple-600'
    },
    {
      name: 'Research',
      path: '/research',
      icon: <FaFlask className="h-6 w-6" />,
      description: 'Explore research findings and scientific publications.',
      color: 'bg-orange-500 hover:bg-orange-600'
    },
    {
      name: 'Protocol',
      path: '/protocol',
      icon: <IoDocuments className="h-6 w-6" />,
      description: 'View study protocols and methodology.',
      color: 'bg-red-500 hover:bg-red-600'
    },
    {
      name: 'Whitepaper',
      path: '/whitepaper',
      icon: <FaFileAlt className="h-6 w-6" />,
      description: 'Read our comprehensive research whitepaper.',
      color: 'bg-indigo-500 hover:bg-indigo-600'
    }
  ];

  return (
    <div className="mt-3">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Ginger Science Dashboard
        </h1>
        <p className="text-lg text-gray-600">
          Welcome to the Ginger Science research platform. Access study tools, research data, and scientific resources.
        </p>
      </div>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quickActions.map((action, index) => (
          <Link
            key={index}
            href={action.path}
            className="block group"
          >
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-all duration-200 group-hover:border-gray-300">
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg text-white ${action.color} transition-colors duration-200`}>
                  {action.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">
                  {action.name}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {action.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Additional Resources */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-lg bg-gray-500 text-white">
                <FaShieldAlt className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 ml-4">
                Regulatory
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Legal updates and regulatory information for redhead-specific sun protection.
            </p>
            <Link
              href="/regulatory"
              className="inline-flex items-center text-brand-500 hover:text-brand-600 font-medium"
            >
              Learn More →
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-lg bg-gray-500 text-white">
                <FaDatabase className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 ml-4">
                MC1R Data Foundation
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Information about the MC1R gene and redhead-specific health research.
            </p>
            <Link
              href="/mc1r"
              className="inline-flex items-center text-brand-500 hover:text-brand-600 font-medium"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDefaultPage;
