import React from 'react'
import { FilterPanel } from '../components/FilterPanel'
import { ListingCard } from '../components/ListingCard'
import { supabase, mockListings } from '../utils/supabaseClient'

export default async function HomePage() {
  let listings = []
  let error = null
  
  try {
    const { data, error: supabaseError } = await supabase
      .from('listings')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(24)
    
    if (supabaseError) {
      console.warn('Supabase error, using mock data:', supabaseError)
      listings = mockListings
    } else {
      listings = data || mockListings
    }
  } catch (err) {
    console.warn('Failed to fetch from Supabase, using mock data:', err)
    listings = mockListings
  }

  return (
    <main className="min-h-screen bg-primary-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-8 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            VIPER<span className="text-accent-400">GUY</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            The ultimate resource for Dodge Viper enthusiasts. Browse listings, explore model years, 
            and access professional services for your Viper journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/listings/current" 
              className="bg-accent-400 text-primary-900 font-bold py-4 px-8 rounded-xl hover:bg-accent-500 transition-all duration-200 hover:shadow-lg text-lg shadow-lg"
            >
              Browse Listings
            </a>
            <a 
              href="/services" 
              className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-primary-900 transition-all duration-200 text-lg"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Viper Gallery</h2>
            <p className="text-xl text-gray-800 max-w-2xl mx-auto leading-relaxed">
              Explore the evolution of the Dodge Viper through stunning imagery from every generation
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Sample gallery images - you can expand this */}
            <div className="group relative overflow-hidden rounded-xl hover:shadow-lg transition-all duration-300">
              <img 
                src="/images/1996/1996.jpg" 
                alt="1996 Viper GTS" 
                className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white">
                  <h3 className="font-bold text-sm">1996 GTS</h3>
                  <p className="text-xs text-primary-200">Gen II Icon</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl hover:shadow-lg transition-all duration-300">
              <img 
                src="/images/2008/2008.jpg" 
                alt="2008 Viper SRT-10" 
                className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white">
                  <h3 className="font-bold text-sm">2008 SRT-10</h3>
                  <p className="text-xs text-primary-200">Gen IV Power</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl hover:shadow-lg transition-all duration-300">
              <img 
                src="/images/2015/2015.jpg" 
                alt="2015 Viper SRT" 
                className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white">
                  <h3 className="font-bold text-sm">2015 SRT</h3>
                  <p className="text-xs text-primary-200">Gen V Refinement</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl hover:shadow-lg transition-all duration-300">
              <img 
                src="/images/2017/2017.jpg" 
                alt="2017 Viper ACR" 
                className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white">
                  <h3 className="font-bold text-sm">2017 ACR</h3>
                  <p className="text-xs text-primary-200">Final Edition</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/model-year/1996" 
              className="inline-flex items-center text-gray-800 hover:text-gray-900 font-semibold transition-colors text-lg"
            >
              Explore All Model Years
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Listings Section */}
      <div className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Featured Listings</h2>
            <p className="text-xl text-primary-900 max-w-2xl mx-auto leading-relaxed">
              Discover the latest Viper listings from trusted sources across the market
            </p>
          </div>

          <FilterPanel />
          
          <div className="mt-12 mb-8">
            <p className="text-primary-800 text-center">
              {error ? (
                <span className="text-warning-500">Failed to load listings.</span>
              ) : listings && listings.length > 0 ? (
                <>Showing <span className="font-semibold text-primary-900">{listings.length}</span> featured listings</>
              ) : (
                <span className="text-primary-900">No listings found.</span>
              )}
            </p>
          </div>

          {listings && listings.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {listings.map((listing: any) => (
                <ListingCard key={listing.id} {...listing} />
              ))}
            </div>
          )}

          <div className="text-center mt-16">
            <a 
              href="/listings/current" 
              className="bg-accent-400 text-primary-900 font-bold py-3 px-8 rounded-xl hover:bg-accent-500 transition-all duration-200 hover:shadow-lg shadow-lg"
            >
              View All Listings
            </a>
          </div>
        </div>
      </div>

      {/* Services Preview */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Professional Services</h2>
            <p className="text-xl text-gray-800 max-w-2xl mx-auto">
              Expert Viper services to help you buy, sell, and maintain your dream car
            </p>
          </div>
          
          {/* Services Cards - Simple Horizontal Layout */}
          <div className="flex flex-col lg:flex-row gap-8 justify-center">
            <div className="flex-1 max-w-sm text-center p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Vehicle Reports</h3>
              <p className="text-gray-800 mb-4">Comprehensive VIN history and market analysis</p>
              <a href="/services" className="text-gray-800 hover:text-gray-900 font-semibold">
                Learn More →
              </a>
            </div>
            
            <div className="flex-1 max-w-sm text-center p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Inspections</h3>
              <p className="text-gray-800 mb-4">Professional pre-purchase evaluations</p>
              <a href="/services" className="text-gray-800 hover:text-gray-900 font-semibold">
                Learn More →
              </a>
            </div>
            
            <div className="flex-1 max-w-sm text-center p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Concierge</h3>
              <p className="text-gray-800 mb-4">Full-service buying assistance</p>
              <a href="/services" className="text-gray-800 hover:text-gray-900 font-semibold">
                Learn More →
              </a>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="/services" 
              className="bg-primary-900 text-white font-bold py-3 px-8 rounded-xl hover:bg-primary-800 transition-colors"
            >
              View All Services
            </a>
          </div>
        </div>
      </div>
    </main>
  )
} 