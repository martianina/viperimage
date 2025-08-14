'use client';
import React from 'react';
import { FaTimes, FaShieldAlt, FaFileAlt, FaUserCheck } from 'react-icons/fa';

interface ConsentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
}

export default function ConsentModal({ isOpen, onClose, onAccept }: ConsentModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-navy-700">Research Study Consent</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <FaTimes className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Header */}
          <div className="text-center border-b border-gray-200 pb-4">
            <h3 className="text-2xl font-bold text-navy-700 mb-2">
              Ginger Science SPF Research Registry
            </h3>
            <p className="text-lg font-semibold text-brand-600">
              Informed Consent v.1.0
            </p>
          </div>

          {/* Introduction */}
          <div>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Ginger Science SPF Research Registry collects information from participants regarding sun protection product use, experiences, and preferences to better understand and address the unique sun protection needs of individuals with red hair and the MC1R genetic variant.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Registries collect and store data about specific characteristics from individuals with shared traits or conditions. By participating, you contribute valuable insights that help researchers and product developers create safer, more effective sun protection products tailored specifically for redheads.
            </p>
            <p className="text-gray-700 leading-relaxed">
              People with the MC1R variant have unique sun protection needs due to increased sensitivity to UV radiation. Today's technologies enable us to harness this information, leading to better research outcomes and improved products.
            </p>
          </div>

          {/* How it Works */}
          <div>
            <h4 className="text-lg font-semibold text-navy-700 mb-3">
              How does the Ginger Science SPF Research Registry work?
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              De-identified information regarding your sun protection product use, preferences, experiences, and related health data will be securely stored and used for research and product development purposes. The registry aims to improve understanding of sun protection effectiveness specifically for people with the MC1R gene variant. Additionally, this registry addresses practical needs, such as improving product recommendations and personalized skincare advice.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Researchers and product developers will access the registry to gather accurate data on sun protection usage, efficacy, and preferences among redheads. Researchers seeking participants for relevant studies and product testing will also use the registry.
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold">
              There is no cost to participate in the registry.
            </p>
          </div>

          {/* Acknowledgment */}
          <div>
            <h4 className="text-lg font-semibold text-navy-700 mb-3">
              By signing this document, you acknowledge the following:
            </h4>
            <div className="space-y-3 text-gray-700">
              <p>• I understand my participation is voluntary, and I may withdraw at any time.</p>
              <p>• I understand that efforts will be made to protect my privacy. My personal information will be securely stored using anonymized codes. However, there remains a minimal risk my identity could become known.</p>
              <p>• I agree to be contacted periodically by the registry to update or verify my information.</p>
              <p>• I consent to sharing my de-identified data for research studies and product development efforts related to sun protection and skincare.</p>
              <p>• I understand my de-identified information may be shared with other reputable skincare and dermatological research databases.</p>
              <p>• I acknowledge I may not directly benefit from participating, and my data may be used broadly in research and product development.</p>
              <p>• I understand I may withdraw my consent at any time, although data already included in ongoing research or product development cannot be removed.</p>
            </div>
          </div>

          {/* Optional Reidentification */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-navy-700 mb-3">
              Optional: Conditional Reidentification for Follow-Up Research or Personalized Feedback
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              As part of the Ginger Science SPF Research Registry, your information is stored in a de-identified format. This means we remove personal details so that your identity is not linked to your responses in the research database.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              In some cases, researchers may want to follow up with participants to share findings, offer new research opportunities, or provide personalized insights. To make that possible, we ask for your optional consent to allow reidentification of your record under specific conditions.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              By opting in, you agree to the following:
            </p>
            <div className="space-y-2 text-gray-700 mb-4">
              <p>• I consent to my de-identified data being re-linked to my identity only by authorized registry staff under secure and limited circumstances.</p>
              <p>• I understand that this reidentification would be used solely to contact me for follow-up research, personalized feedback, or product testing invitations.</p>
              <p>• I understand I may revoke this consent at any time by notifying the registry.</p>
              <p>• I understand that my contact information will not be shared with third parties without my explicit, additional consent.</p>
            </div>
            <p className="text-gray-700 leading-relaxed">
              There are no penalties for declining this option, and your data will still be fully included in the registry and used for research in de-identified form.
            </p>
          </div>

          {/* Final Statement */}
          <div className="border-t border-gray-200 pt-4">
            <p className="text-gray-700 leading-relaxed mb-4">
              I have read and understand this form, have been provided sufficient background information, had adequate time to ask questions, all my questions were answered, and I have decided to participate in the Ginger Science SPF Research Registry. I will receive a copy of this consent form.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-brand-50 rounded-lg p-4">
            <h4 className="font-semibold text-navy-700 mb-2">Contact Information</h4>
            <p className="text-gray-700 text-sm">
              For any questions about the Ginger Science SPF Research Registry or this consent form, please contact:
            </p>
            <p className="text-gray-700 text-sm font-medium">
              Research Coordinator Ginger Science UV Survey: nina@gingerscience.org
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-6 py-2 text-gray-600 hover:text-gray-800 font-medium"
          >
            Cancel
          </button>
          <button
            onClick={onAccept}
            className="px-6 py-2 bg-brand-500 hover:bg-brand-600 text-white font-medium rounded-lg transition-colors"
          >
            I have reviewed the informed consent
          </button>
        </div>
      </div>
    </div>
  );
} 