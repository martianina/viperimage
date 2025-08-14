import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { ModelYearSidebar } from '../../components/ModelYearSidebar'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h1 className="text-5xl font-bold mb-6">
                  About <span className="text-accent-400">The Viper Guy</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Your trusted partner in the Dodge Viper community since 2010.
                </p>
              </div>
              <div className="lg:col-span-1">
                <ModelYearSidebar />
              </div>
            </div>
          </div>
        </div>

        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* About Content */}
              <div className="lg:col-span-2">
                <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Our Story</h2>
                <div className="prose prose-lg text-gray-600 max-w-none">
                  <p className="mb-6">
                    The Viper Guy, LLC was founded with a simple mission: to connect Dodge Viper enthusiasts 
                    with their dream cars through trusted marketplace services and expert guidance.
                  </p>
                  <p className="mb-6">
                    We specialize in comprehensive vehicle reports, professional inspections, and full-service 
                    concierge assistance for Viper buyers and sellers nationwide.
                  </p>
                  <p className="mb-6">
                    Our team of certified specialists brings decades of combined experience in the Viper 
                    community, ensuring every transaction is smooth, transparent, and successful.
                  </p>
                </div>
              </div>

              {/* Sidebar stays in place */}
              <div className="lg:col-span-1">
                <div className="sticky top-8">
                  <ModelYearSidebar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
