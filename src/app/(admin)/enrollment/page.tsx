'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaShieldAlt, FaCheckCircle, FaFileAlt, FaBoxes, FaTimes, FaGlobe } from 'react-icons/fa';
import ConsentModal from '@/components/consent/ConsentModal';

export default function EnrollmentPage() {
  const [showConsentModal, setShowConsentModal] = useState(false);
  const [showCountryModal, setShowCountryModal] = useState(false);
  const [hasConsented, setHasConsented] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    consentProtocol: false,
    consentReidentification: false,
    streetAddress: '',
    city: '',
    state: '',
    country: '',
    postalCode: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleConsentAccept = () => {
    setHasConsented(true);
    setShowConsentModal(false);
  };

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if participant is from the US
    if (formData.country.toLowerCase() !== 'united states' && 
        formData.country.toLowerCase() !== 'usa' && 
        formData.country.toLowerCase() !== 'us') {
      setShowCountryModal(true);
      return;
    }
    
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/enrollment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          hasConsented
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.details || result.error || 'Failed to submit enrollment');
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Enrollment submission error:', error);
      setIsSubmitting(false);
      alert('Failed to submit enrollment. Please try again.');
    }
  };

  const handleMailingListSignup = async () => {
    setIsSubmitting(true);
    
    // TODO: Add mailing list integration here
    // For now, simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setShowCountryModal(false);
    setIsSubmitted(true);
  };

  const isFormValid = formData.firstName && 
                     formData.lastName && 
                     formData.email && 
                     formData.consentProtocol &&
                     formData.streetAddress && 
                     formData.city && 
                     formData.state && 
                     formData.country && 
                     formData.postalCode &&
                     hasConsented;

  if (isSubmitted) {
    return (
      <div className="p-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h1 className="text-2xl font-bold text-navy-700 mb-4">
              Enrollment Successful!
            </h1>
            <p className="text-gray-600 mb-6">
              Thank you for joining the MC1R Ginger Science Study. We've received your enrollment 
              information and will be in touch soon with next steps.
            </p>
            <div className="bg-brand-50 border border-brand-200 rounded-lg p-4">
              <h3 className="font-semibold text-brand-700 mb-2">What's Next?</h3>
              <ul className="text-sm text-brand-600 space-y-1 text-left">
                <li>• You'll receive a welcome email within 24 hours</li>
                <li>• Product samples will be shipped within 1-2 weeks</li>
                <li>• First check-in survey will be sent in 2 weeks</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
                        <div className="mb-8">
                    <h1 className="text-3xl font-bold text-navy-700 mb-3">
                      Join the MC1R Ginger Science Study
                    </h1>
                    <p className="text-gray-600 text-lg mb-6">
                      Help advance sunscreen safety research and receive personalized product recommendations
                    </p>
                    
                    {/* Free Samples Information */}
                    <div className="bg-brand-50 border border-brand-200 rounded-lg p-6 mb-6">
                      <h3 className="text-xl font-semibold text-navy-700 mb-4 flex items-center">
                        <FaBoxes className="w-6 h-6 mr-2 text-brand-500" />
                        Free Product Samples Included
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-navy-700 mb-2">What You'll Receive:</h4>
                          <ul className="text-gray-700 space-y-2">
                            <li>• Six 4ml color-coded, brand-blinded sunscreen samples</li>
                            <li>• INCI ingredient lists for all six products</li>
                            <li>• Unique survey & review link</li>
                            <li>• Optional UV stickers for testing</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-navy-700 mb-2">Product Types:</h4>
                          <ul className="text-gray-700 space-y-2">
                            <li>• 2 Korean hybrid sunscreens (chemical-mineral blends)</li>
                            <li>• Japanese water-gel sunscreen</li>
                            <li>• Canadian broad-spectrum SPF with Mexoryl</li>
                            <li>• EU/US SPF 100 formulation</li>
                            <li>• Premium ultralight mineral sunscreen</li>
                          </ul>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-4">
                        <strong>Note:</strong> All products are SPF 50+ and represent the latest in global sunscreen technology, 
                        including many formulations not yet available in the US market.
                      </p>
                    </div>
                  </div>

                        {/* Consent Section */}
                  <div className="bg-white rounded-xl shadow-md p-8 mb-8">
                    <div className="max-w-4xl">
                      <div className="flex justify-end mb-6">
                        {hasConsented && (
                          <div className="flex items-center text-green-600">
                            <FaCheckCircle className="w-5 h-5 mr-2" />
                            <span className="font-medium">Informed Consent v.1</span>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <button
                          onClick={() => setShowConsentModal(true)}
                          className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                            hasConsented
                              ? 'bg-green-100 text-green-700 border border-green-300'
                              : 'bg-brand-500 hover:bg-brand-600 text-white shadow-lg hover:shadow-xl'
                          }`}
                        >
                          <FaFileAlt className="w-5 h-5 mr-2" />
                          {hasConsented ? 'Review Consent Again' : 'Review Informed Consent (Required)'}
                        </button>

                        <Link
                          href="/protocol"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 rounded-lg font-semibold bg-brand-100 hover:bg-brand-200 text-brand-700 transition-all duration-200"
                        >
                          <FaFileAlt className="w-5 h-5 mr-2" />
                          View Protocol
                        </Link>
                      </div>
                    </div>
                  </div>

                        {/* Enrollment Form */}
                  <div className="bg-white rounded-xl shadow-md p-8">
                    <div className="max-w-2xl">
                      <h2 className="text-2xl font-semibold text-navy-700 mb-6">
                        Order Free Samples
                      </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div>
              <h3 className="text-xl font-semibold text-navy-700 mb-4 flex items-center">
                <FaUser className="w-5 h-5 mr-2 text-brand-500" />
                Personal Information
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="mt-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Shipping Address */}
            <div>
              <h3 className="text-xl font-semibold text-navy-700 mb-4 flex items-center">
                <FaMapMarkerAlt className="w-5 h-5 mr-2 text-brand-500" />
                Shipping Address
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700 mb-2">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    id="streetAddress"
                    name="streetAddress"
                    value={formData.streetAddress}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    placeholder="123 Main Street"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Google Places Autocomplete will be integrated here
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                      State/Province *
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                      Country *
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-2">
                      Postal Code *
                    </label>
                    <input
                      type="text"
                      id="postalCode"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Consent */}
            <div>
              <h3 className="text-xl font-semibold text-navy-700 mb-4 flex items-center">
                <FaShieldAlt className="w-5 h-5 mr-2 text-brand-500" />
                Additional Agreements
              </h3>
              
              <div className="space-y-4">
                                            <div className="flex items-start space-x-3">
                              <input
                                type="checkbox"
                                id="consentProtocol"
                                name="consentProtocol"
                                checked={formData.consentProtocol}
                                onChange={handleInputChange}
                                required
                                className="mt-1 w-5 h-5 text-brand-500 border-gray-300 rounded focus:ring-brand-500"
                              />
                              <div>
                                <label htmlFor="consentProtocol" className="block font-medium text-navy-700 mb-1">
                                  I consent to participate in the Ginger Science SPF study *
                                </label>
                                <p className="text-sm text-gray-600">
                                  You must click on the Review Consent button above before agreeing to the study
                                </p>
                              </div>
                            </div>

                            <div className="flex items-start space-x-3">
                              <input
                                type="checkbox"
                                id="consentReidentification"
                                name="consentReidentification"
                                checked={formData.consentReidentification}
                                onChange={handleInputChange}
                                className="mt-1 w-5 h-5 text-brand-500 border-gray-300 rounded focus:ring-brand-500"
                              />
                              <div>
                                <label htmlFor="consentReidentification" className="block font-medium text-navy-700 mb-1">
                                  I agree that my data may be conditionally reidentified under such conditions I may approve in the future
                                </label>
                                <p className="text-sm text-gray-600">
                                  Note: there are no conditions of reidentification included in v.1 of the Ginger Science SPF Protocol.
                                </p>
                              </div>
                            </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className={`w-full py-4 px-6 rounded-lg text-lg font-semibold transition-all duration-200 ${
                  isFormValid && !isSubmitting
                    ? 'bg-brand-500 hover:bg-brand-600 text-white shadow-lg hover:shadow-xl'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Complete Enrollment'}
              </button>
              
              {!isFormValid && (
                <p className="text-sm text-gray-500 mt-3 text-center">
                  Please fill in all required fields and provide consent
                </p>
              )}
            </div>
          </form>
        </div>
      </div>

                        {/* Consent Modal */}
                  <ConsentModal
                    isOpen={showConsentModal}
                    onClose={() => setShowConsentModal(false)}
                    onAccept={handleConsentAccept}
                  />

                  {/* Country Validation Modal */}
                  {showCountryModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full">
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-200">
                          <h2 className="text-xl font-bold text-navy-700">Study Eligibility</h2>
                          <button
                            onClick={() => setShowCountryModal(false)}
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                          >
                            <FaTimes className="w-5 h-5" />
                          </button>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                              <FaGlobe className="w-8 h-8 text-brand-500" />
                            </div>
                            <h3 className="text-lg font-semibold text-navy-700 mb-3">
                              Study Currently Limited to US Residents
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                              We apologize, but this study is currently limited to participants in the United States. 
                              This is because we're testing sunscreen products that are not yet available in the US market.
                            </p>
                          </div>
                          
                          <p className="text-gray-700 mb-6">
                            Would you like to be notified when we expand our study to participants in your region?
                          </p>
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between p-6 border-t border-gray-200">
                          <button
                            onClick={() => setShowCountryModal(false)}
                            className="px-6 py-2 text-gray-600 hover:text-gray-800 font-medium"
                          >
                            No, thanks
                          </button>
                          <button
                            onClick={handleMailingListSignup}
                            disabled={isSubmitting}
                            className="px-6 py-2 bg-brand-500 hover:bg-brand-600 text-white font-medium rounded-lg transition-colors disabled:opacity-50"
                          >
                            {isSubmitting ? 'Signing up...' : 'Yes, notify me'}
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            } 