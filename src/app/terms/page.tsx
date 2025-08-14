'use client';

import { FaGavel, FaFileContract, FaExclamationTriangle, FaShieldAlt, FaUsers, FaGlobe } from 'react-icons/fa';

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-600">MC1R Data Foundation</p>
          <p className="text-sm text-gray-500">Last updated: July 2025</p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <FaFileContract className="mr-3 text-brand-500" />
            1. Agreement to Terms
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              These Terms of Service ("Terms") govern your use of the MC1R Data Foundation website and services. By accessing or using our website, participating in our research studies, or using any of our services, you agree to be bound by these Terms.
            </p>
            <p>
              If you do not agree to these Terms, please do not use our services. We reserve the right to modify these Terms at any time, and such modifications will be effective immediately upon posting.
            </p>
          </div>
        </div>

        {/* Definitions */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Definitions</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-brand-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">"Service"</h3>
                <p className="text-sm text-gray-700">Refers to our website, research studies, and all related services provided by MC1R Data Foundation.</p>
              </div>
              <div className="bg-brand-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">"User"</h3>
                <p className="text-sm text-gray-700">Refers to any individual who accesses or uses our Service, including research participants.</p>
              </div>
              <div className="bg-brand-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">"Content"</h3>
                <p className="text-sm text-gray-700">Refers to all information, data, text, graphics, and materials available on our Service.</p>
              </div>
              <div className="bg-brand-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">"Research Data"</h3>
                <p className="text-sm text-gray-700">Refers to information collected through our research studies and surveys.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Use of Service */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Use of Service</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Permitted Uses</h3>
              <p className="text-gray-700 mb-3">You may use our Service for the following purposes:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Accessing information about our research studies</li>
                <li>Participating in research studies (if eligible)</li>
                <li>Reading educational content about sun protection and MC1R genetics</li>
                <li>Contacting us with questions or feedback</li>
                <li>Accessing research results and publications</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Prohibited Uses</h3>
              <p className="text-gray-700 mb-3">You agree not to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Use the Service for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the Service</li>
                <li>Submit false or misleading information</li>
                <li>Use automated tools to access the Service</li>
                <li>Attempt to reverse engineer our systems</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Research Participation */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <FaUsers className="mr-3 text-brand-500" />
            4. Research Participation
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Eligibility</h3>
              <p className="text-gray-700 mb-3">To participate in our research studies, you must:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Be at least 18 years of age</li>
                <li>Meet the specific eligibility criteria for each study</li>
                <li>Provide informed consent</li>
                <li>Reside in eligible geographic locations</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 Consent and Withdrawal</h3>
              <p className="text-gray-700 mb-3">By participating in research:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>You provide informed consent for data collection and use</li>
                <li>You may withdraw from participation at any time</li>
                <li>Withdrawal does not affect data already collected and analyzed</li>
                <li>You may request deletion of your personal data</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.3 Data Accuracy</h3>
              <p className="text-gray-700">
                You are responsible for providing accurate and truthful information in research surveys and forms. Providing false information may result in exclusion from research participation and potential legal consequences.
              </p>
            </div>
          </div>
        </div>

        {/* Intellectual Property */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 Our Rights</h3>
              <p className="text-gray-700 mb-3">The Service and its content are owned by MC1R Data Foundation and are protected by intellectual property laws. This includes:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Website design and layout</li>
                <li>Research protocols and methodologies</li>
                <li>Educational content and publications</li>
                <li>Logos, trademarks, and branding</li>
                <li>Software and technical systems</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 Research Data</h3>
              <p className="text-gray-700 mb-3">Research data collected through our studies:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Remains the property of MC1R Data Foundation</li>
                <li>May be used for research and publication purposes</li>
                <li>Will be de-identified when shared publicly</li>
                <li>May be shared with research partners under appropriate agreements</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">5.3 Your Contributions</h3>
              <p className="text-gray-700">
                By submitting content to our Service (such as survey responses, feedback, or images), you grant us a non-exclusive, royalty-free license to use, modify, and distribute such content for research and educational purposes.
              </p>
            </div>
          </div>
        </div>

        {/* Privacy and Data Protection */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <FaShieldAlt className="mr-3 text-brand-500" />
            6. Privacy and Data Protection
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              Your privacy is important to us. Our collection, use, and protection of your personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
            </p>
            <div className="bg-brand-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Key Privacy Commitments:</strong><br />
                • We do not sell your personal information<br />
                • We use appropriate security measures to protect your data<br />
                • You have rights to access, correct, and delete your data<br />
                • We comply with applicable data protection laws
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimers and Limitations */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <FaExclamationTriangle className="mr-3 text-brand-500" />
            7. Disclaimers and Limitations
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">7.1 Medical Disclaimer</h3>
              <p className="text-gray-700">
                The information provided through our Service is for educational and research purposes only. It is not intended as medical advice, diagnosis, or treatment. Always consult with qualified healthcare professionals for medical concerns.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">7.2 Research Disclaimer</h3>
              <p className="text-gray-700">
                Research results and findings are preliminary and may change as more data is collected. We do not guarantee the accuracy, completeness, or reliability of research outcomes.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">7.3 Service Availability</h3>
              <p className="text-gray-700">
                We strive to maintain service availability but do not guarantee uninterrupted access. We may modify, suspend, or discontinue the Service at any time without notice.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">7.4 Limitation of Liability</h3>
              <p className="text-gray-700">
                To the maximum extent permitted by law, MC1R Data Foundation shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service.
              </p>
            </div>
          </div>
        </div>

        {/* Indemnification */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Indemnification</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              You agree to indemnify and hold harmless MC1R Data Foundation, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Your use of the Service</li>
              <li>Your violation of these Terms</li>
              <li>Your participation in research studies</li>
              <li>Any content you submit to the Service</li>
            </ul>
          </div>
        </div>

        {/* Governing Law */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <FaGavel className="mr-3 text-brand-500" />
            9. Governing Law and Dispute Resolution
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              These Terms are governed by the laws of the jurisdiction where MC1R Data Foundation is established. Any disputes arising from these Terms or your use of the Service shall be resolved through:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Good faith negotiation between parties</li>
              <li>Mediation if negotiation fails</li>
              <li>Binding arbitration as a last resort</li>
              <li>Court proceedings only if arbitration is not available</li>
            </ul>
          </div>
        </div>

        {/* International Users */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <FaGlobe className="mr-3 text-brand-500" />
            10. International Users
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              Our Service may be accessed from countries around the world. By using our Service, you acknowledge that:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>You are responsible for compliance with local laws</li>
              <li>Data may be transferred internationally</li>
              <li>Service availability may vary by location</li>
              <li>Research participation may be limited by geographic restrictions</li>
            </ul>
          </div>
        </div>

        {/* Severability */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Severability</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              If any provision of these Terms is found to be unenforceable or invalid, the remaining provisions will continue to be valid and enforceable. The unenforceable provision will be modified to the minimum extent necessary to make it enforceable.
            </p>
          </div>
        </div>

        {/* Changes to Terms */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of the Service after changes constitutes acceptance of the modified Terms.
            </p>
            <p className="text-gray-700">
              We will notify users of material changes through email or website announcements when possible.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-brand-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Email:</strong> legal@gingerscience.org<br />
                <strong>Address:</strong> MC1R Data Foundation<br />
                <strong>Subject Line:</strong> Terms of Service Inquiry
              </p>
            </div>
            <p className="text-gray-700">
              We will respond to your inquiry within a reasonable timeframe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage; 