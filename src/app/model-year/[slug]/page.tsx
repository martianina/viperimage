import React from 'react'
import { ModelYearSidebar } from '../../../components/ModelYearSidebar'
import { Navbar } from '../../../components/Navbar'
import { Footer } from '../../../components/Footer'

interface ModelYearPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ModelYearPage({ params }: ModelYearPageProps) {
  const { slug } = await params
  
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-primary-50">
        <div className="flex">
          {/* Sidebar */}
          <ModelYearSidebar />
          
          {/* Main Content */}
          <main className="flex-1 p-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-5xl font-bold text-yellow-400 mb-4">
                  {slug} Dodge Viper
                </h1>
                <p className="text-xl text-primary-900 max-w-2xl mx-auto">
                  Explore the {slug} Dodge Viper generation - specifications, history, and available listings.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Model Information</h2>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-800">Generation:</span>
                        <span className="font-semibold text-gray-900">
                          {slug === '1996' ? 'Gen II' : 
                           slug === '2003' ? 'Gen III' : 
                           slug === '2008' ? 'Gen IV' : 
                           slug === '2013' ? 'Gen V' : 'Gen I'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-800">Engine:</span>
                        <span className="font-semibold text-gray-900">V10</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-800">Horsepower:</span>
                        <span className="font-semibold text-gray-900">
                          {slug === '1996' ? '450 hp' : 
                           slug === '2003' ? '500 hp' : 
                           slug === '2008' ? '600 hp' : 
                           slug === '2013' ? '640 hp' : '400 hp'}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Available Listings</h2>
                    <p className="text-gray-800 mb-6">
                      Browse current {slug} Viper listings and find your perfect match.
                    </p>
                    <a 
                      href={`/listings/current?year=${slug}`}
                      className="inline-block bg-accent-400 text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-accent-500 transition-colors"
                    >
                      View {slug} Listings
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  )
}
