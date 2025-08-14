'use client';

import { FaShieldAlt, FaLock, FaEye, FaTrash, FaDownload, FaUserCheck } from 'react-icons/fa';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">MC1R Data Foundation</p>
          <p className="text-sm text-gray-500">Last updated: July 2025</p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <FaShieldAlt className="mr-3 text-brand-500" />
            1. Introduction
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              The MC1R Data Foundation ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, participate in our research studies, or interact with our services.
            </p>
            <p>
              This policy is designed to comply with the General Data Protection Regulation (GDPR) and other applicable data protection laws. By using our services, you consent to the data practices described in this policy.
            </p>
          </div>
        </div>

        {/* Information We Collect */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <FaEye className="mr-3 text-brand-500" />
            2. Information We Collect
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Personal Information</h3>
              <p className="text-gray-700 mb-3">We may collect the following types of personal information:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Name and contact information (email address, mailing address)</li>
                <li>Demographic information (age, location, skin type)</li>
                <li>Research participation data (survey responses, product reviews)</li>
                <li>Technical information (IP address, browser type, device information)</li>
                <li>Communication preferences and consent records</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Research Data</h3>
              <p className="text-gray-700 mb-3">For participants in our research studies, we collect:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Self-reported health and skincare information</li>
                <li>Product usage and preference data</li>
                <li>Survey responses and feedback</li>
                <li>Optional images (with explicit consent)</li>
                <li>De-identified research data for analysis</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.3 Automatically Collected Information</h3>
              <p className="text-gray-700 mb-3">When you visit our website, we automatically collect:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Log data (pages visited, time spent, links clicked)</li>
                <li>Device information (operating system, browser version)</li>
                <li>Location data (country/region level only)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How We Use Your Information */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
          <div className="space-y-4">
            <div className="bg-brand-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Research and Development</h3>
              <p className="text-sm text-gray-700">To conduct research studies, analyze data, and develop improved products and services for the redhead and MC1R-expressive community.</p>
            </div>
            <div className="bg-brand-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Communication</h3>
              <p className="text-sm text-gray-700">To send you updates about our research, new studies, and relevant information about sun protection and skincare.</p>
            </div>
            <div className="bg-brand-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Website Improvement</h3>
              <p className="text-sm text-gray-700">To analyze website usage, improve user experience, and optimize our services.</p>
            </div>
            <div className="bg-brand-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Legal Compliance</h3>
              <p className="text-sm text-gray-700">To comply with legal obligations, protect our rights, and ensure the security of our services.</p>
            </div>
          </div>
        </div>

        {/* Data Sharing and Disclosure */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Sharing and Disclosure</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Research Partners:</strong> De-identified data may be shared with academic researchers and product developers for research purposes</li>
              <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our website and conducting research</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
              <li><strong>Consent:</strong> With your explicit consent for specific purposes</li>
            </ul>
          </div>
        </div>

        {/* Your Rights Under GDPR */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <FaUserCheck className="mr-3 text-brand-500" />
            5. Your Rights Under GDPR
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-brand-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Right to Access</h3>
              <p className="text-sm text-gray-700">Request a copy of your personal data and information about how we process it.</p>
            </div>
            <div className="bg-brand-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Right to Rectification</h3>
              <p className="text-sm text-gray-700">Request correction of inaccurate or incomplete personal data.</p>
            </div>
            <div className="bg-brand-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Right to Erasure</h3>
              <p className="text-sm text-gray-700">Request deletion of your personal data in certain circumstances.</p>
            </div>
            <div className="bg-brand-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Right to Portability</h3>
              <p className="text-sm text-gray-700">Receive your data in a structured, machine-readable format.</p>
            </div>
            <div className="bg-brand-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Right to Object</h3>
              <p className="text-sm text-gray-700">Object to processing of your data for specific purposes.</p>
            </div>
            <div className="bg-brand-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Right to Withdraw Consent</h3>
              <p className="text-sm text-gray-700">Withdraw consent for data processing at any time.</p>
            </div>
          </div>
        </div>

        {/* Data Security */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <FaLock className="mr-3 text-brand-500" />
            6. Data Security
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication measures</li>
              <li>Staff training on data protection practices</li>
              <li>Incident response procedures</li>
            </ul>
          </div>
        </div>

        {/* Data Retention */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Specifically:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Research Data:</strong> Retained for the duration of the research project plus 10 years for scientific integrity</li>
              <li><strong>Contact Information:</strong> Retained until you withdraw consent or request deletion</li>
              <li><strong>Website Analytics:</strong> Retained for 2 years</li>
              <li><strong>Legal Records:</strong> Retained as required by applicable law</li>
            </ul>
          </div>
        </div>

        {/* Cookies and Tracking */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cookies and Tracking Technologies</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              We use cookies and similar technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-brand-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Essential Cookies</h3>
                <p className="text-sm text-gray-700">Required for website functionality and security.</p>
              </div>
              <div className="bg-brand-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Analytics Cookies</h3>
                <p className="text-sm text-gray-700">Help us understand how visitors use our website.</p>
              </div>
              <div className="bg-brand-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Preference Cookies</h3>
                <p className="text-sm text-gray-700">Remember your settings and preferences.</p>
              </div>
            </div>
          </div>
        </div>

        {/* International Transfers */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">9. International Data Transfers</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              Your personal information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Standard contractual clauses approved by the European Commission</li>
              <li>Adequacy decisions for certain countries</li>
              <li>Other appropriate safeguards as required by law</li>
            </ul>
          </div>
        </div>

        {/* Children's Privacy */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Children's Privacy</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              Our services are not intended for children under the age of 18. We do not knowingly collect personal information from children under 18. If you believe we have collected information from a child under 18, please contact us immediately.
            </p>
          </div>
        </div>

        {/* Changes to This Policy */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Policy</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-brand-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Email:</strong> privacy@gingerscience.org<br />
                <strong>Address:</strong> MC1R Data Foundation<br />
                <strong>Subject Line:</strong> Privacy Policy Inquiry
              </p>
            </div>
            <p className="text-gray-700">
              You also have the right to lodge a complaint with your local data protection authority if you believe we have not addressed your concerns adequately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage; 