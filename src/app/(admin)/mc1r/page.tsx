'use client';

import { FaDna, FaUsers, FaShieldAlt, FaFlask, FaGlobe, FaHeart } from 'react-icons/fa';

const MC1RDataFoundation = () => {
  return (
    <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
      {/* Main About Section - Full Width */}
      <div className="col-span-full bg-white border border-brand-200 rounded-lg p-8 mb-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center">
            <FaDna className="mr-3 text-brand-500" />
            🔬 About the MC1R Data Foundation
          </h1>
        </div>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p className="text-lg leading-relaxed">
            The MC1R Data Foundation is a nonprofit organization dedicated to advancing redhead-specific health research through ethical data collection, community-driven science, and open protocols. We focus on individuals with variations in the MC1R gene, which are linked to unique physiological traits — from altered pain perception to increased UV sensitivity.
          </p>
          
          <p className="text-lg leading-relaxed">
            Our mission is to generate real-world evidence on how redheads respond to products, treatments, and environments — data that's often missing from traditional clinical trials. We operate as a neutral data steward, giving participants control over how their information is used while powering innovation in wellness, dermatology, and personalized medicine.
          </p>
          
          <p className="text-lg leading-relaxed">
            Through decentralized tools, transparent consent models, and community enrollment, the MC1R Data Foundation is building the first research infrastructure designed specifically for redheads — and owned by them.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="col-span-full lg:col-span-2 bg-gradient-to-r from-brand-50 to-brand-100 border border-brand-200 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
          <FaHeart className="mr-3 text-brand-500" />
          Our Mission
        </h2>
        <div className="space-y-4">
          <div className="bg-white bg-opacity-70 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Generate Real-World Evidence</h3>
            <p className="text-sm text-gray-700">
              Collect data on how redheads respond to products, treatments, and environments that's missing from traditional clinical trials.
            </p>
          </div>
          <div className="bg-white bg-opacity-70 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Neutral Data Stewardship</h3>
            <p className="text-sm text-gray-700">
              Operate as a neutral steward, giving participants control over how their information is used while powering innovation.
            </p>
          </div>
          <div className="bg-white bg-opacity-70 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Community-Driven Science</h3>
            <p className="text-sm text-gray-700">
              Build research infrastructure designed specifically for redheads and owned by them through decentralized tools and transparent consent.
            </p>
          </div>
        </div>
      </div>

      {/* Focus Areas */}
      <div className="col-span-full lg:col-span-1 bg-white border border-brand-200 rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <FaFlask className="mr-3 text-brand-500" />
          Focus Areas
        </h2>
        <div className="space-y-3">
          <div className="bg-brand-50 p-3 rounded-lg">
            <h3 className="font-semibold text-gray-900 text-sm">MC1R Gene Variations</h3>
            <p className="text-xs text-gray-600">Unique physiological traits and responses</p>
          </div>
          <div className="bg-brand-50 p-3 rounded-lg">
            <h3 className="font-semibold text-gray-900 text-sm">Pain Perception</h3>
            <p className="text-xs text-gray-600">Altered sensitivity and response patterns</p>
          </div>
          <div className="bg-brand-50 p-3 rounded-lg">
            <h3 className="font-semibold text-gray-900 text-sm">UV Sensitivity</h3>
            <p className="text-xs text-gray-600">Increased sun sensitivity and protection needs</p>
          </div>
          <div className="bg-brand-50 p-3 rounded-lg">
            <h3 className="font-semibold text-gray-900 text-sm">Personalized Medicine</h3>
            <p className="text-xs text-gray-600">Tailored treatments and wellness approaches</p>
          </div>
        </div>
      </div>

      {/* Research Approach */}
      <div className="col-span-full lg:col-span-2 bg-white border border-brand-200 rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <FaGlobe className="mr-3 text-brand-500" />
          Research Approach
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Ethical Data Collection</h3>
            <p className="text-sm text-gray-700">
              We prioritize participant privacy and control, using transparent consent models and giving individuals full control over their data usage.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Community-Driven Science</h3>
            <p className="text-sm text-gray-700">
              Research priorities and protocols are developed in collaboration with the redhead community, ensuring relevance and meaningful outcomes.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Open Protocols</h3>
            <p className="text-sm text-gray-700">
              All research methodologies and findings are shared openly, promoting transparency and enabling broader scientific collaboration.
            </p>
          </div>
        </div>
      </div>

      {/* Key Initiatives */}
      <div className="col-span-full lg:col-span-1 bg-white border border-brand-200 rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <FaUsers className="mr-3 text-brand-500" />
          Key Initiatives
        </h2>
        <div className="space-y-3">
          <div className="bg-brand-50 p-3 rounded-lg">
            <h3 className="font-semibold text-gray-900 text-sm">UV Filter Study</h3>
            <p className="text-xs text-gray-600">Testing sunscreen effectiveness for redheads</p>
          </div>
          <div className="bg-brand-50 p-3 rounded-lg">
            <h3 className="font-semibold text-gray-900 text-sm">Data Infrastructure</h3>
            <p className="text-xs text-gray-600">Building community-owned research platform</p>
          </div>
          <div className="bg-brand-50 p-3 rounded-lg">
            <h3 className="font-semibold text-gray-900 text-sm">Educational Resources</h3>
            <p className="text-xs text-gray-600">Sharing knowledge about MC1R genetics</p>
          </div>
          <div className="bg-brand-50 p-3 rounded-lg">
            <h3 className="font-semibold text-gray-900 text-sm">Collaborative Research</h3>
            <p className="text-xs text-gray-600">Partnering with academic and industry researchers</p>
          </div>
        </div>
      </div>

      {/* Impact Areas */}
      <div className="col-span-full lg:col-span-2 bg-white border border-brand-200 rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <FaShieldAlt className="mr-3 text-brand-500" />
          Impact Areas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-brand-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Wellness</h3>
            <p className="text-sm text-gray-700">
              Develop personalized wellness approaches that account for MC1R-specific physiological differences.
            </p>
          </div>
          <div className="bg-brand-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Dermatology</h3>
            <p className="text-sm text-gray-700">
              Improve sun protection products and treatments specifically designed for redhead skin characteristics.
            </p>
          </div>
          <div className="bg-brand-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Personalized Medicine</h3>
            <p className="text-sm text-gray-700">
              Enable more effective treatments by understanding how MC1R variants affect drug metabolism and response.
            </p>
          </div>
          <div className="bg-brand-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Research Innovation</h3>
            <p className="text-sm text-gray-700">
              Create new research methodologies that prioritize community involvement and data sovereignty.
            </p>
          </div>
        </div>
      </div>

      {/* Get Involved */}
      <div className="col-span-full lg:col-span-1 bg-gradient-to-r from-brand-500 to-brand-600 text-white rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Get Involved</h2>
        <div className="space-y-3">
          <div className="bg-white bg-opacity-20 p-3 rounded-lg">
            <h3 className="font-semibold mb-2">Participate in Research</h3>
            <p className="text-sm">Join our studies and contribute to redhead-specific health research.</p>
          </div>
          <div className="bg-white bg-opacity-20 p-3 rounded-lg">
            <h3 className="font-semibold mb-2">Stay Informed</h3>
            <p className="text-sm">Follow our research updates and educational content about MC1R genetics.</p>
          </div>
          <div className="bg-white bg-opacity-20 p-3 rounded-lg">
            <h3 className="font-semibold mb-2">Support Our Mission</h3>
            <p className="text-sm">Help us build the first research infrastructure designed for and owned by redheads.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MC1RDataFoundation; 