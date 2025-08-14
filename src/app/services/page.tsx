import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { ModelYearSidebar } from '../../components/ModelYearSidebar'

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        {/* Services Section - Now at the top */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Services Content */}
              <div className="lg:col-span-2">
                <div className="text-center mb-16">
                  <h1 className="text-5xl font-bold text-gray-800 mb-4">
                    Professional <span className="text-accent-400">Services</span>
                  </h1>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Expert Viper services to help you buy, sell, and maintain your dream car. 
                    Our team of specialists provides comprehensive support throughout your Viper journey.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center mt-8">
                    <a 
                      href="#vehicle-reports" 
                      className="bg-accent-400 text-gray-900 font-bold py-3 px-6 rounded-xl hover:bg-accent-500 transition-all duration-200"
                    >
                      Get Started
                    </a>
                    <a 
                      href="#contact" 
                      className="border-2 border-accent-400 text-accent-400 font-bold py-3 px-6 rounded-xl hover:bg-accent-400 hover:text-gray-900 transition-all duration-200"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Vehicle Reports */}
                  <div id="vehicle-reports" className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-accent-400 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">Vehicle Reports</h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Comprehensive VIN history reports providing detailed information about a vehicle's past, 
                      including ownership history, accident reports, maintenance records, and market value analysis.
                    </p>
                    <ul className="text-gray-600 mb-6 space-y-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-accent-400 rounded-full mr-3"></span>
                        Complete ownership history
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-accent-400 rounded-full mr-3"></span>
                        Accident and damage reports
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-accent-400 rounded-full mr-3"></span>
                        Service and maintenance records
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-accent-400 rounded-full mr-3"></span>
                        Market value assessment
                      </li>
                    </ul>
                    <div className="text-center">
                      <a 
                        href="#contact" 
                        className="inline-block bg-accent-400 text-gray-900 font-bold py-3 px-6 rounded-xl hover:bg-accent-500 transition-colors"
                      >
                        Get Report
                      </a>
                    </div>
                  </div>

                  {/* Inspections */}
                  <div id="inspections" className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-accent-400 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">Inspections</h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Professional pre-purchase evaluations conducted by certified Viper specialists who know 
                      exactly what to look for in these high-performance vehicles.
                    </p>
                    <ul className="text-gray-600 mb-6 space-y-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-accent-400 rounded-full mr-3"></span>
                        Comprehensive mechanical inspection
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-accent-400 rounded-full mr-3"></span>
                        Body and paint condition assessment
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-accent-400 rounded-full mr-3"></span>
                        Test drive and performance evaluation
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-accent-400 rounded-full mr-3"></span>
                        Detailed written report with photos
                      </li>
                    </ul>
                    <div className="text-center">
                      <a 
                        href="#contact" 
                        className="inline-block bg-accent-400 text-gray-900 font-bold py-3 px-6 rounded-xl hover:bg-accent-500 transition-colors"
                      >
                        Schedule Inspection
                      </a>
                    </div>
                  </div>

                  {/* Concierge */}
                  <div id="concierge" className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-accent-400 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">Concierge</h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Full-service buying assistance from start to finish. Our experts handle everything 
                      from vehicle sourcing to final delivery, ensuring a smooth and successful purchase.
                    </p>
                    <ul className="text-gray-600 mb-6 space-y-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-accent-400 rounded-full mr-3"></span>
                        Vehicle sourcing and selection
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-accent-400 rounded-full mr-3"></span>
                        Negotiation and purchase assistance
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-accent-400 rounded-full mr-3"></span>
                        Transportation and delivery
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-accent-400 rounded-full mr-3"></span>
                        Post-purchase support
                      </li>
                    </ul>
                    <div className="text-center">
                      <a 
                        href="#contact" 
                        className="inline-block bg-accent-400 text-gray-900 font-bold py-3 px-6 rounded-xl hover:bg-accent-500 transition-colors"
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar stays in place */}
              <div className="lg:col-span-1">
                <div className="sticky top-8">
                  <div className="bg-gray-900 rounded-2xl p-6">
                    <ModelYearSidebar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="py-20 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our team of Viper specialists to discuss your needs and get a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:services@viperguy.com" 
                className="bg-accent-400 text-gray-900 font-bold py-3 px-8 rounded-xl hover:bg-accent-500 transition-all duration-200"
              >
                Email Us
              </a>
              <a 
                href="tel:+1-555-VIPER-1" 
                className="border-2 border-white text-white font-bold py-3 px-8 rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-200"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
