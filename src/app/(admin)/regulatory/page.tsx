'use client';

import { FaExternalLinkAlt, FaFileAlt, FaUsers, FaShieldAlt, FaFlask, FaGlobe, FaBalanceScale } from 'react-icons/fa';
import Link from 'next/link';

const RegulatoryPage = () => {
  return (
    <div className="mt-3">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Legal Update: A Place in the Sun for Redheads
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          The regulatory landscape of sun protection and why redheads need their own consideration in sunscreen development, testing, and approval.
        </p>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* The Fiery Gap Section - Full Width */}
        <div className="lg:col-span-2 bg-gradient-to-r from-brand-50 to-brand-100 border border-brand-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Fiery Gap in Sun Protection</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              Sunburn remains the earliest and most frequent medical insult many red-haired people experience. Almost all of us have had a few blistering sunburns.
            </p>
            <p>
              Dermatologists have long suspected that every blistering sunburn leaves a permanent molecular scar. Prospective data now confirm it: adolescents who rack up five peel-level burns face an 80 percent jump in lifetime melanoma risk. Even a single blistering burn in childhood nearly doubles the odds.
            </p>
            <p>
              Redheads who express the MC1R variant accumulate ultraviolet damage far more rapidly than the general population, yet most commercial sunscreens are developed, tested, and marketed without a single redhead in the trial cohort.
            </p>
          </div>
        </div>

        {/* History Section */}
        <div className="bg-white border border-brand-200 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <FaFileAlt className="mr-3 text-brand-500" />
            A Short History of Sun Protection
          </h2>
          <div className="space-y-4">
            <div className="bg-brand-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Ancient Shields</h3>
              <p className="text-sm text-gray-600">
                Rice bran paste in Japan, zinc oxide in Egypt, and whale oil among Victorian bathers offered the first recorded attempts to scatter sunlight away from vulnerable skin.
              </p>
            </div>
            <div className="bg-brand-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">The Industrial Era</h3>
              <p className="text-sm text-gray-600">
                In 1928 Franz Greiter identified PABA as a molecule that could absorb UV-B radiation. By 1962 Coppertone adopted the "Sun Protection Factor" (SPF) scale.
              </p>
            </div>
            <div className="bg-brand-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">The Modern Bottleneck</h3>
              <p className="text-sm text-gray-600">
                Europe, Canada, Korea, and Japan have approved more than thirty distinct UV filters since 1990. The FDA has approved none since 1999.
              </p>
            </div>
          </div>
        </div>

        {/* How Sunscreens Work */}
        <div className="bg-white border border-brand-200 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <FaFlask className="mr-3 text-brand-500" />
            How Sunscreens Work
          </h2>
          <div className="space-y-3">
            <div className="bg-brand-50 p-3 rounded-lg">
              <h3 className="font-semibold text-gray-900 text-sm">Organic ("chemical")</h3>
              <p className="text-xs text-gray-600">Homosalate, Octocrylene - Absorb UV photons and release heat</p>
            </div>
            <div className="bg-brand-50 p-3 rounded-lg">
              <h3 className="font-semibold text-gray-900 text-sm">Inorganic ("mineral")</h3>
              <p className="text-xs text-gray-600">Zinc oxide, Titanium dioxide - Scatter and reflect UV rays</p>
            </div>
            <div className="bg-brand-50 p-3 rounded-lg">
              <h3 className="font-semibold text-gray-900 text-sm">Hybrid</h3>
              <p className="text-xs text-gray-600">Mineral plus chemical - Combine absorption and reflection</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            New generation filters such as Tinosorb S, Uvinul A Plus, and Mexoryl SX extend protection to 400 nm. None is yet available in American drugstores.
          </p>
        </div>

        {/* Regulatory Differences */}
        <div className="bg-white border border-brand-200 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <FaBalanceScale className="mr-3 text-brand-500" />
            Regulatory Approaches
          </h2>
          <div className="space-y-3">
            <div className="bg-brand-50 p-3 rounded-lg border-l-4 border-brand-500">
              <h3 className="font-semibold text-gray-900 text-sm">United States</h3>
              <p className="text-xs text-gray-600">
                Sunscreen is legally an over-the-counter drug; each new active molecule must meet pharmaceutical standards.
              </p>
            </div>
            <div className="bg-brand-50 p-3 rounded-lg border-l-4 border-brand-500">
              <h3 className="font-semibold text-gray-900 text-sm">Europe</h3>
              <p className="text-xs text-gray-600">
                Classifies most sunscreens as cosmetics; regulators review data more rapidly under a risk-based framework.
              </p>
            </div>
            <div className="bg-brand-50 p-3 rounded-lg border-l-4 border-brand-500">
              <h3 className="font-semibold text-gray-900 text-sm">Korea & Japan</h3>
              <p className="text-xs text-gray-600">
                Driven by beauty-market competition, approve filters faster while enforcing strict post-market surveillance.
              </p>
            </div>
          </div>
        </div>

        {/* Fitzpatrick Scale - Full Width */}
        <div className="lg:col-span-2 bg-white border border-brand-200 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">The Fitzpatrick Scale—Where Redheads Fall</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-4">
            <div className="bg-red-100 border border-red-300 p-3 rounded-lg text-center">
              <div className="font-bold text-red-700 text-lg">I</div>
              <div className="text-xs text-red-600">Very fair, translucent</div>
              <div className="text-xs text-red-600 mt-1">Always burns, never tans</div>
            </div>
            <div className="bg-orange-100 border border-orange-300 p-3 rounded-lg text-center">
              <div className="font-bold text-orange-700 text-lg">II</div>
              <div className="text-xs text-orange-600">Fair</div>
              <div className="text-xs text-orange-600 mt-1">Usually burns, tans minimally</div>
            </div>
            <div className="bg-yellow-100 border border-yellow-300 p-3 rounded-lg text-center">
              <div className="font-bold text-yellow-700 text-lg">III</div>
              <div className="text-xs text-yellow-600">Light-medium</div>
              <div className="text-xs text-yellow-600 mt-1">Sometimes mild burn, slowly tans</div>
            </div>
            <div className="bg-green-100 border border-green-300 p-3 rounded-lg text-center">
              <div className="font-bold text-green-700 text-lg">IV</div>
              <div className="text-xs text-green-600">Olive / light brown</div>
              <div className="text-xs text-green-600 mt-1">Rarely burns, tans easily</div>
            </div>
            <div className="bg-blue-100 border border-blue-300 p-3 rounded-lg text-center">
              <div className="font-bold text-blue-700 text-lg">V</div>
              <div className="text-xs text-blue-600">Brown</div>
              <div className="text-xs text-blue-600 mt-1">Very rarely burns, dark tan</div>
            </div>
            <div className="bg-purple-100 border border-purple-300 p-3 rounded-lg text-center">
              <div className="font-bold text-purple-700 text-lg">VI</div>
              <div className="text-xs text-purple-600">Dark brown / black</div>
              <div className="text-xs text-purple-600 mt-1">Almost never burns, deeply pigmented</div>
            </div>
          </div>
          <div className="bg-brand-50 border border-brand-200 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Why the Scale is Not Sufficient for Redheads</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700">
              <div>• Ignores Pheomelanin as distinct from Eumelanin</div>
              <div>• No gradation within Type I - all redheads get the same score</div>
              <div>• Chemical behavior is not captured (inflammatory reactivity, stinging)</div>
              <div>• Regulatory testing often stops at Type III</div>
            </div>
          </div>
        </div>

        {/* Legislative Landscape */}
        <div className="bg-white border border-brand-200 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <FaGlobe className="mr-3 text-brand-500" />
            Current Legislative Landscape
          </h2>
          <div className="space-y-4">
            <div className="bg-brand-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">SAFE Sunscreen Standards Act (H.R. 3686)</h3>
              <p className="text-sm text-gray-600 mb-3">
                Filed June 3, 2025 by Representatives Joyce (PA), Dingell (MI), Joyce (OH), and Ross (NC)
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-700">
                <div>• 5M Americans treated annually</div>
                <div>• $8.1B healthcare costs</div>
                <div>• 200K+ new melanoma cases (2024)</div>
                <div>• 8,290 expected deaths (2024)</div>
              </div>
            </div>
            <div className="bg-brand-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Real-World Evidence Mandate</h3>
              <p className="text-sm text-gray-600">
                Section 3 directs FDA to accept observational studies, patient-reported outcomes, and digitally signed sunscreen diaries as valid evidence.
              </p>
            </div>
          </div>
        </div>

        {/* Ginger Science Study */}
        <div className="bg-white border border-brand-200 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <FaUsers className="mr-3 text-brand-500" />
            The Ginger Science UV Filter Study
          </h2>
          <div className="space-y-4">
            <div className="bg-brand-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Study Aims</h3>
              <div className="space-y-1 text-sm text-gray-700">
                <div>• Compare texture, finish, reactivity across six sunscreens</div>
                <div>• Document real-world context of use</div>
                <div>• Build open, machine-readable ingredient dataset</div>
                <div>• Elevate MC1R voices in decision-making</div>
              </div>
            </div>
            <div className="bg-brand-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Product Cohort</h3>
              <div className="space-y-1 text-sm text-gray-700">
                <div>• Two Korean hybrid sunscreens</div>
                <div>• One Japanese water-gel sunscreen</div>
                <div>• One Canadian broad-spectrum lotion</div>
                <div>• One EU-US SPF 100 formulation</div>
                <div>• One EU premium ultralight mineral</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action - Full Width */}
        <div className="lg:col-span-2 bg-gradient-to-r from-brand-500 to-brand-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Claiming Our Place in the Sun</h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Redheads have navigated inadequate sunscreens and incomplete guidance for generations. By testing modern filters, capturing structured real-world evidence, and sharing results openly, the Ginger Science Project ensures that future labels, formulations, and regulations recognize the unique physiology of MC1R skin.
          </p>
          <Link href="/enrollment" className="inline-block">
            <div className="bg-white bg-opacity-20 rounded-lg p-4 hover:bg-opacity-30 transition-all duration-200 cursor-pointer">
              <p className="text-xl font-semibold">Let's claim our place in the sun!</p>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default RegulatoryPage; 