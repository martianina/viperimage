'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaShieldAlt, FaCheckCircle, FaFileAlt, FaBoxes, FaTimes, FaGlobe, FaStar, FaComments } from 'react-icons/fa';
import ConsentModal from '@/components/consent/ConsentModal';

export default function ReviewPage() {
  const [showConsentModal, setShowConsentModal] = useState(false);
  const [showCountryModal, setShowCountryModal] = useState(false);
  const [hasConsented, setHasConsented] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    colorSample: '',
    usageDetails: [] as string[],
    effectiveness: '',
    tolerance: [] as string[],
    lookAndFeel: [] as string[],
    smell: '',
    finalRating: '',
    wouldRecommend: '',
    wouldBuy: '',
    additionalComments: '',
    stickerBefore: null as File | null,
    stickerAfter: null as File | null,
    fadeTime: '',
    lastedUntilFade: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }));
    }
  };

  const handleConsentAccept = () => {
    setHasConsented(true);
    setShowConsentModal(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.details || result.error || 'Failed to submit review');
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Review submission error:', error);
      setIsSubmitting(false);
      alert('Failed to submit review. Please try again.');
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

  const isFormValid = formData.email &&
                     formData.colorSample &&
                     formData.usageDetails.length > 0 &&
                     formData.effectiveness &&
                     formData.tolerance.length > 0 &&
                     formData.lookAndFeel.length > 0 &&
                     formData.smell &&
                     formData.finalRating &&
                     formData.wouldRecommend &&
                     formData.wouldBuy;

  if (isSubmitted) {
    return (
      <div className="p-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h1 className="text-2xl font-bold text-navy-700 mb-4">
              Product Review Submitted!
            </h1>
            <p className="text-gray-600 mb-6">
              Thank you for your detailed product review. Your feedback helps us understand how these 
              sunscreen formulations work for people with MC1R variants.
            </p>
            <div className="bg-brand-50 border border-brand-200 rounded-lg p-4">
              <h3 className="font-semibold text-brand-700 mb-2">What's Next?</h3>
              <ul className="text-sm text-brand-600 space-y-1 text-left">
                <li>• Your review will be analyzed with other participant feedback</li>
                <li>• You'll receive a summary of findings in 2-3 weeks</li>
                <li>• Continue testing the remaining products in your kit</li>
                <li>• Check your email for additional study updates</li>
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
          Product Review & Feedback
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Share your experience with the sunscreen products to help advance research for MC1R variants
        </p>
        
        {/* Product Review Information */}
        <div className="bg-brand-50 border border-brand-200 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-navy-700 mb-4 flex items-center">
            <FaComments className="w-6 h-6 mr-2 text-brand-500" />
            Product Review Process
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-navy-700 mb-2">Review Requirements:</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Test each product for at least 2-3 days</li>
                <li>• Use in your normal morning routine</li>
                <li>• Note any reactions or preferences</li>
                <li>• Consider texture, finish, and wearability</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-navy-700 mb-2">What We're Studying:</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Texture and application experience</li>
                <li>• Finish and cosmetic acceptability</li>
                <li>• Irritation and sensitivity patterns</li>
                <li>• Climate and usage context</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            <strong>Note:</strong> Your honest feedback helps researchers understand how different sunscreen 
            formulations work for people with MC1R variants and fair skin.
          </p>
        </div>
      </div>



      {/* Product Review Form */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <div className="max-w-4xl">
          <h2 className="text-2xl font-semibold text-navy-700 mb-6">
            Product Review Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Address */}
            <div>
              <h3 className="text-xl font-semibold text-navy-700 mb-4 flex items-center">
                <FaUser className="w-5 h-5 mr-2 text-brand-500" />
                Contact Information
              </h3>

              <div>
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

            {/* Product Information */}
            <div>
              <h3 className="text-xl font-semibold text-navy-700 mb-4 flex items-center">
                <FaBoxes className="w-5 h-5 mr-2 text-brand-500" />
                Product Information
              </h3>

              <div>
                <label htmlFor="colorSample" className="block text-sm font-medium text-gray-700 mb-2">
                  Which color sample jar are you reviewing? *
                </label>
                <div className="space-y-2">
                  {['black', 'white', 'pink', 'clear', 'purple', 'blue'].map((color) => (
                    <div key={color} className="flex items-center">
                      <input
                        type="radio"
                        id={`color-${color}`}
                        name="colorSample"
                        value={color}
                        checked={formData.colorSample === color}
                        onChange={handleInputChange}
                        required
                        className="w-4 h-4 text-brand-500 border-gray-300 focus:ring-brand-500"
                      />
                      <label htmlFor={`color-${color}`} className="ml-2 text-sm text-gray-700 capitalize">
                        {color}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Experience */}
            <div>
              <h3 className="text-xl font-semibold text-navy-700 mb-4 flex items-center">
                <FaComments className="w-5 h-5 mr-2 text-brand-500" />
                Product Experience
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How and when did you use the product? *
                  </label>
                  <div className="space-y-2">
                    {[
                      'Daily sun exposure (e.g. errands, walks)',
                      'High sun intensity (beach, hiking, midday)',
                      'Indoor or low UV environment',
                      'Layered with makeup or other skincare',
                      'Used on face only',
                      'Used on face and body'
                    ].map((option) => (
                      <div key={option} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`usage-${option.replace(/\s+/g, '-').toLowerCase()}`}
                          name="usageDetails"
                          value={option}
                          checked={formData.usageDetails.includes(option)}
                          onChange={(e) => {
                            const { value, checked } = e.target;
                            setFormData(prev => ({
                              ...prev,
                              usageDetails: checked 
                                ? [...(prev.usageDetails as string[] || []), value]
                                : (prev.usageDetails as string[] || []).filter(item => item !== value)
                            }));
                          }}
                          className="w-4 h-4 text-brand-500 border-gray-300 rounded focus:ring-brand-500"
                        />
                        <label htmlFor={`usage-${option.replace(/\s+/g, '-').toLowerCase()}`} className="ml-2 text-sm text-gray-700">
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How well did the product work for you? *
                  </label>
                  <div className="space-y-2">
                    {[
                      'I burned quickly',
                      'I burned slightly, but slower than usual',
                      'No burn, mild redness only',
                      'No burn, no redness',
                      'Visible protection (e.g. stayed white, blocked UV well)'
                    ].map((option) => (
                      <div key={option} className="flex items-center">
                        <input
                          type="radio"
                          id={`effectiveness-${option.replace(/\s+/g, '-').toLowerCase()}`}
                          name="effectiveness"
                          value={option}
                          checked={formData.effectiveness === option}
                          onChange={handleInputChange}
                          required
                          className="w-4 h-4 text-brand-500 border-gray-300 focus:ring-brand-500"
                        />
                        <label htmlFor={`effectiveness-${option.replace(/\s+/g, '-').toLowerCase()}`} className="ml-2 text-sm text-gray-700">
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How did you tolerate the product? *
                  </label>
                  <div className="space-y-2">
                    {[
                      'No reaction at all',
                      'Mild tingling, stinging, or warmth of skin',
                      'Stinging of eyes',
                      'Itchiness or minor rash',
                      'Breakout or clogged pores',
                      'Redness or irritation after removal'
                    ].map((option) => (
                      <div key={option} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`tolerance-${option.replace(/\s+/g, '-').toLowerCase()}`}
                          name="tolerance"
                          value={option}
                          checked={formData.tolerance.includes(option)}
                          onChange={(e) => {
                            const { value, checked } = e.target;
                            setFormData(prev => ({
                              ...prev,
                              tolerance: checked 
                                ? [...prev.tolerance, value]
                                : prev.tolerance.filter(item => item !== value)
                            }));
                          }}
                          className="w-4 h-4 text-brand-500 border-gray-300 rounded focus:ring-brand-500"
                        />
                        <label htmlFor={`tolerance-${option.replace(/\s+/g, '-').toLowerCase()}`} className="ml-2 text-sm text-gray-700">
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How did the product look and feel? *
                  </label>
                  <div className="space-y-2">
                    {[
                      'Lightweight',
                      'Heavy or greasy',
                      'Matte finish',
                      'Dewy or shiny',
                      'Absorbed quickly',
                      'Left residue or cast'
                    ].map((option) => (
                      <div key={option} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`lookAndFeel-${option.replace(/\s+/g, '-').toLowerCase()}`}
                          name="lookAndFeel"
                          value={option}
                          checked={formData.lookAndFeel.includes(option)}
                          onChange={(e) => {
                            const { value, checked } = e.target;
                            setFormData(prev => ({
                              ...prev,
                              lookAndFeel: checked 
                                ? [...prev.lookAndFeel, value]
                                : prev.lookAndFeel.filter(item => item !== value)
                            }));
                          }}
                          className="w-4 h-4 text-brand-500 border-gray-300 rounded focus:ring-brand-500"
                        />
                        <label htmlFor={`lookAndFeel-${option.replace(/\s+/g, '-').toLowerCase()}`} className="ml-2 text-sm text-gray-700">
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How did the product smell? *
                  </label>
                  <div className="space-y-2">
                    {[
                      'Pleasant scent',
                      'No scent',
                      'Mild chemical scent',
                      'Strong or unpleasant scent'
                    ].map((option) => (
                      <div key={option} className="flex items-center">
                        <input
                          type="radio"
                          id={`smell-${option.replace(/\s+/g, '-').toLowerCase()}`}
                          name="smell"
                          value={option}
                          checked={formData.smell === option}
                          onChange={handleInputChange}
                          required
                          className="w-4 h-4 text-brand-500 border-gray-300 focus:ring-brand-500"
                        />
                        <label htmlFor={`smell-${option.replace(/\s+/g, '-').toLowerCase()}`} className="ml-2 text-sm text-gray-700">
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="finalRating" className="block text-sm font-medium text-gray-700 mb-2">
                    Final product rating *
                  </label>
                  <select
                    id="finalRating"
                    name="finalRating"
                    value={formData.finalRating}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  >
                    <option value="">Select rating</option>
                    <option value="5">5 - Excellent</option>
                    <option value="4">4 - Very Good</option>
                    <option value="3">3 - Good</option>
                    <option value="2">2 - Fair</option>
                    <option value="1">1 - Poor</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="wouldRecommend" className="block text-sm font-medium text-gray-700 mb-2">
                    Would you recommend this product? *
                  </label>
                  <select
                    id="wouldRecommend"
                    name="wouldRecommend"
                    value={formData.wouldRecommend}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  >
                    <option value="">Select option</option>
                    <option value="Definitely yes">Definitely yes</option>
                    <option value="Probably yes">Probably yes</option>
                    <option value="Maybe">Maybe</option>
                    <option value="Probably not">Probably not</option>
                    <option value="Definitely not">Definitely not</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="wouldBuy" className="block text-sm font-medium text-gray-700 mb-2">
                    Without regard to price, would you buy this product if it were available to you? *
                  </label>
                  <select
                    id="wouldBuy"
                    name="wouldBuy"
                    value={formData.wouldBuy}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  >
                    <option value="">Select option</option>
                    <option value="Definitely yes">Definitely yes</option>
                    <option value="Probably yes">Probably yes</option>
                    <option value="Maybe">Maybe</option>
                    <option value="Probably not">Probably not</option>
                    <option value="Definitely not">Definitely not</option>
                  </select>
                </div>
              </div>
            </div>

                                    {/* UV Sticker Testing */}
                        <div>
                          <h3 className="text-xl font-semibold text-navy-700 mb-4 flex items-center">
                            <FaStar className="w-5 h-5 mr-2 text-brand-500" />
                            UV Sticker Testing (optional)
                          </h3>

              <div className="space-y-6">
                <div>
                  <label htmlFor="stickerBefore" className="block text-sm font-medium text-gray-700 mb-2">
                    Sticker Before Photo
                  </label>
                  <input
                    type="file"
                    id="stickerBefore"
                    name="stickerBefore"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-50 file:text-brand-700 hover:file:bg-brand-100"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Upload a photo of the UV sticker before applying sunscreen
                  </p>
                </div>

                <div>
                  <label htmlFor="stickerAfter" className="block text-sm font-medium text-gray-700 mb-2">
                    Sticker After Photo
                  </label>
                  <input
                    type="file"
                    id="stickerAfter"
                    name="stickerAfter"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-50 file:text-brand-700 hover:file:bg-brand-100"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Upload a photo of the UV sticker after sun exposure
                  </p>
                </div>



                <div>
                  <label htmlFor="fadeTime" className="block text-sm font-medium text-gray-700 mb-2">
                    How long did it take for the purple dot to fade to clear?
                  </label>
                  <select
                    id="fadeTime"
                    name="fadeTime"
                    value={formData.fadeTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  >
                    <option value="">Select option</option>
                    <option value="Less than 1 hour">Less than 1 hour</option>
                    <option value="1-2 hours">1-2 hours</option>
                    <option value="2-4 hours">2-4 hours</option>
                    <option value="4-6 hours">4-6 hours</option>
                    <option value="More than 6 hours">More than 6 hours</option>
                    <option value="Did not fade">Did not fade</option>
                    <option value="Did not use">Did not use</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="lastedUntilFade" className="block text-sm font-medium text-gray-700 mb-2">
                    Do you think this sample of sunscreen lasted until the UV sticker faded to clear?
                  </label>
                  <select
                    id="lastedUntilFade"
                    name="lastedUntilFade"
                    value={formData.lastedUntilFade}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  >
                    <option value="">Select option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="Not sure">Not sure</option>
                    <option value="Did not use sticker">Did not use sticker</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Additional Comments */}
            <div>
              <h3 className="text-xl font-semibold text-navy-700 mb-4 flex items-center">
                <FaComments className="w-5 h-5 mr-2 text-brand-500" />
                Additional Comments
              </h3>

              <div>
                <label htmlFor="additionalComments" className="block text-sm font-medium text-gray-700 mb-2">
                  Any additional comments
                </label>
                <textarea
                  id="additionalComments"
                  name="additionalComments"
                  value={formData.additionalComments}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Any additional thoughts, suggestions, or feedback about this product..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                />
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
                {isSubmitting ? 'Submitting...' : 'Submit Review'}
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