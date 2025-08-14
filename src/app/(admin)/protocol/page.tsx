'use client';

import { FaFileAlt, FaUsers, FaShieldAlt, FaFlask, FaGlobe, FaBalanceScale, FaClipboardList, FaDatabase, FaLock, FaQrcode, FaBoxOpen } from 'react-icons/fa';

const ProtocolPage = () => {
  return (
    <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
      {/* Header Section - Full Width */}
      <div className="col-span-full bg-white border border-brand-200 rounded-lg p-6 mb-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Ginger Science UV Filter Study – Protocol</h1>
          <p className="text-xl text-brand-600 font-semibold mb-2">MC1R Data Foundation</p>
          <p className="text-lg text-gray-600">Version: 1.1 – July 2025</p>
        </div>
      </div>

      {/* Overview Section - Full Width */}
      <div className="col-span-full bg-gradient-to-r from-brand-50 to-brand-100 border border-brand-200 rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
          <FaFileAlt className="mr-3 text-brand-500" />
          1. Overview
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
          <p>
            The Ginger Science UV Filter Study is an independent research initiative designed to assess real-world experience and ingredient tolerability across globally sourced sunscreen products. It is part of the Ginger Science Project, which aims to collect structured health and consumer data from redhead and fair-skinned populations historically overlooked in dermatology and clinical research.
          </p>
          <p>
            Redheads are known to have increased risk of skin cancer, and the need for sunscreen is particularly important in the population. The lack of data about how redheads interact with SPF compounds is a material gap in clinical knowledge. This project will help include MC1R-variant data be included in future research.
          </p>
          <p>
            This first product cohort evaluates six EU- and Asia-compliant sunscreens labeled SPF 50 or higher, distributed in brand-blinded microdoses for structured user review. Participants are not compensated but receive unique digital artifacts to mark their contribution to community-owned, privacy-respecting research.
          </p>
          <p>
            This cohort is limited to participants in the United States, due to the ready lack access to modern filters in the country. The FDA has not approved a new sunscreen compound since 1999. This study collects real-world evidence about how redheads interact with sunscreen in order to supplement consumer, regulatory and business decisionmaking.
          </p>
          <p>
            This protocol outlines the scope, data practices, and governance of the study.
          </p>
        </div>
      </div>

      {/* Study Goals */}
      <div className="col-span-full lg:col-span-1 bg-white border border-brand-200 rounded-lg p-6 h-fit">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <FaClipboardList className="mr-3 text-brand-500" />
          2. Study Goals
        </h2>
        <div className="space-y-3">
          <div className="bg-brand-50 p-3 rounded-lg">
            <p className="text-sm text-gray-700">Assess texture, finish, reactivity, and user preference across six sunscreen formulations</p>
          </div>
          <div className="bg-brand-50 p-3 rounded-lg">
            <p className="text-sm text-gray-700">Record real-world context of use (climate, application timing, layering, etc.)</p>
          </div>
          <div className="bg-brand-50 p-3 rounded-lg">
            <p className="text-sm text-gray-700">Build a publicly accessible, machine-readable ingredient dataset linked to participant reviews</p>
          </div>
          <div className="bg-brand-50 p-3 rounded-lg">
            <p className="text-sm text-gray-700">Increase inclusion of redhead and MC1R-expressive skin types in community-anchored wellness data</p>
          </div>
        </div>
      </div>

      {/* Product Cohort */}
      <div className="col-span-full lg:col-span-1 bg-white border border-brand-200 rounded-lg p-6 h-fit">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <FaBoxOpen className="mr-3 text-brand-500" />
          3. Product Cohort
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Each participant receives:</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Six 4ml color-coded, brand-blinded sunscreen samples</li>
              <li>• INCI ingredient lists for all six products (accessible via QR link)</li>
              <li>• A unique survey & review link (unlocked only after informed consent)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Products represent:</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• 2 Korean hybrid sunscreens (chemical-mineral blends)</li>
              <li>• Japanese water-gel sunscreen</li>
              <li>• Canadian broad-spectrum SPF with Mexoryl</li>
              <li>• EU/US SPF 100 formulation with legacy filters</li>
              <li>• Premium ultralight mineral (zinc/titanium) sunscreen</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Participation Instructions */}
      <div className="col-span-full lg:col-span-1 bg-white border border-brand-200 rounded-lg p-6 h-fit">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <FaUsers className="mr-3 text-brand-500" />
          4. Participation Instructions
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Participants must:</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Be age 18+ and based in the U.S.</li>
              <li>• Self-identify as having red hair, MC1R expression, or extreme sun sensitivity</li>
              <li>• Consent to participation through a plain-language consent form</li>
              <li>• Test all six samples over ~7–10 days, preferably in morning-use scenarios</li>
              <li>• Submit a structured review via provided QR form (includes short answer & multiple choice)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Optional:</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Utilize UV stickers packaged with the sample kits</li>
              <li>• Submit images showing how the sunscreen appears on skin</li>
              <li>• Claim MC1R reward token</li>
            </ul>
          </div>
          <p className="text-sm text-gray-600 italic">
            Samples are sent unbranded with ingredient lists. Participants are informed of the brands of each product after submission of review for that product.
          </p>
        </div>
      </div>

      {/* Data Types Collected */}
      <div className="col-span-full lg:col-span-1 bg-white border border-brand-200 rounded-lg p-6 h-fit">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <FaDatabase className="mr-3 text-brand-500" />
          5. Data Types Collected
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2 text-sm">5.1 Survey Responses</h3>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>• Frequency of use</li>
              <li>• Reported side effects</li>
              <li>• Sensory feedback (feel, scent, finish)</li>
              <li>• Climate context</li>
              <li>• Willingness to repurchase or recommend</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2 text-sm">5.2 Product Metadata</h3>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>• UV filter types</li>
              <li>• Region of origin (e.g., Korea, Canada, EU)</li>
              <li>• Product class (hybrid, mineral, gel-based, etc.)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2 text-sm">5.3 Participant Tags</h3>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>• Fitzpatrick skin type</li>
              <li>• Hair/freckle pattern</li>
              <li>• Region/latitude (optional)</li>
              <li>• Dermatological history (optional, de-identified)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Data Infrastructure */}
      <div className="col-span-full lg:col-span-1 bg-white border border-brand-200 rounded-lg p-6 h-fit">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <FaLock className="mr-3 text-brand-500" />
          6. Data Infrastructure
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">6.1 Storage & Structure</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Pseudonymized submission saved off-chain</li>
              <li>• Select reviews parsed by MC1R BioAgent for summary/metadata aggregation</li>
              <li>• IPFS & GitHub used for public documentation (e.g. protocol, INCI sheets, consent form)</li>
              <li>• Process Control NFTs contain only cohort metadata, no identifiers</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">6.2 Access & Revocation</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Participation requires opt-in via consent form</li>
              <li>• Consent may be revoked via email or wallet signature</li>
              <li>• Data may be downloaded by participant upon request</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">6.3 Interoperability</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• All data designed to comply with emerging decentralized health data standards</li>
              <li>• Metadata published under open license for academic/community reuse</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Consent & Governance */}
      <div className="col-span-full lg:col-span-1 bg-white border border-brand-200 rounded-lg p-6 h-fit">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <FaShieldAlt className="mr-3 text-brand-500" />
          7. Consent & Governance
        </h2>
        <div className="space-y-3">
          <div className="bg-brand-50 p-3 rounded-lg">
            <p className="text-sm text-gray-700">No wallet required to participate</p>
          </div>
          <div className="bg-brand-50 p-3 rounded-lg">
            <p className="text-sm text-gray-700">Consent form is required before accessing the survey/review form</p>
          </div>
          <div className="bg-brand-50 p-3 rounded-lg">
            <p className="text-sm text-gray-700">No private health information is stored or sold</p>
          </div>
          <div className="bg-brand-50 p-3 rounded-lg">
            <p className="text-sm text-gray-700">Project governance is overseen by the MC1R Data Foundation core team</p>
          </div>
        </div>
      </div>

      {/* Ethical Framework */}
      <div className="col-span-full lg:col-span-1 bg-white border border-brand-200 rounded-lg p-6 h-fit">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <FaBalanceScale className="mr-3 text-brand-500" />
          8. Ethical Framework
        </h2>
        <div className="space-y-3">
          <div className="bg-brand-50 p-3 rounded-lg">
            <p className="text-sm text-gray-700">GDPR-aligned privacy architecture</p>
          </div>
          <div className="bg-brand-50 p-3 rounded-lg">
            <p className="text-sm text-gray-700">HIPAA-adjacent safeguards for sensitive questions (fully optional)</p>
          </div>
          <div className="bg-brand-50 p-3 rounded-lg">
            <p className="text-sm text-gray-700">Informed consent with optional conditional re-identification enables incentives</p>
          </div>
          <div className="bg-brand-50 p-3 rounded-lg">
            <p className="text-sm text-gray-700">Incentives for this project are early access to other projects, and non-monetary</p>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="col-span-full lg:col-span-1 bg-white border border-brand-200 rounded-lg p-6 h-fit">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <FaQrcode className="mr-3 text-brand-500" />
          9. Next Steps (for Participants)
        </h2>
        <div className="space-y-3">
          <div className="bg-brand-50 p-3 rounded-lg">
            <p className="text-sm text-gray-700">Scan the QR code to view the INCI ingredient list and review products</p>
          </div>
          <div className="bg-brand-50 p-3 rounded-lg">
            <p className="text-sm text-gray-700">Use the samples over the course of 1–2 weeks</p>
          </div>
          <div className="bg-brand-50 p-3 rounded-lg">
            <p className="text-sm text-gray-700">Log your experience in the review form</p>
          </div>
          <div className="bg-brand-50 p-3 rounded-lg">
            <p className="text-sm text-gray-700">Follow @GingerScienceHQ for future cohort releases and data summaries</p>
          </div>
        </div>
      </div>

      {/* Exhibit A: Informed Consent - Full Width */}
      <div className="col-span-full bg-white border border-brand-200 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Exhibit A. Informed Consent</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Ginger Science SPF Research Registry - Informed Consent</h3>
          <div className="prose prose-sm max-w-none text-gray-700 space-y-4">
            <p>
              The Ginger Science SPF Research Registry is a project of the MC1R Data Foundation that collects information from participants regarding sun protection product use, experiences, and preferences to better understand and address the unique sun protection needs of individuals with red hair and the MC1R genetic variant.
            </p>
            <p>
              Registries collect and store data about specific characteristics from individuals with shared traits or conditions. By participating, you contribute valuable insights that help researchers and product developers create safer, more effective sun protection products tailored specifically for redheads.
            </p>
            <p>
              People with the MC1R variant have unique sun protection needs due to increased sensitivity to UV radiation. Today's technologies enable us to harness this information, leading to better research outcomes and improved products.
            </p>
            
            <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-3">How does the Ginger Science SPF Research Registry work?</h4>
            <p>
              De-identified information regarding your sun protection product use, preferences and experiences will be securely stored and used for research and product development purposes. The registry aims to improve understanding of sun protection effectiveness specifically for people with the MC1R gene variant. Additionally, this registry addresses practical needs, such as improving product recommendations and personalized skincare advice.
            </p>
            <p>
              Researchers and product developers will access the registry to gather accurate data on sun protection usage, efficacy, and preferences among redheads. Researchers seeking participants for relevant studies and product testing will also use the registry.
            </p>
            <p>
              All data will be stored on secure, encrypted systems and access will be limited to authorized personnel only.
            </p>
            <p>
              There is no cost to participate in the registry.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-3">By consenting, I acknowledge that I have read and understand the following:</h4>
            <ul className="space-y-2 text-sm">
              <li>• I understand my participation is voluntary, and I may withdraw at any time.</li>
              <li>• I understand that efforts will be made to protect my privacy. My personal information will be securely stored using anonymized codes. However, there remains a minimal risk my identity could become known.</li>
              <li>• I agree to be contacted periodically by the registry to update or verify my information.</li>
              <li>• I consent to sharing my de-identified data for research studies and product development efforts related to sun protection and skincare.</li>
              <li>• I understand my de-identified information may be shared with other reputable skincare and dermatological research databases.</li>
              <li>• I acknowledge I may not directly benefit from participating, and my data may be used broadly in research and product development.</li>
              <li>• I understand I may withdraw my consent at any time, although data already included in ongoing research or product development cannot be removed.</li>
            </ul>

            <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Optional: Consent to Conditional Re-identification</h4>
            <p>
              As part of the Ginger Science SPF Research Registry, your information is stored in a de-identified format. This means we remove personal details so that your identity is not linked to your responses in the research database.
            </p>
            <p>
              In some cases, researchers may want to follow up with participants to share findings, offer new research opportunities, or provide personalized insights. To make that possible, we ask for your optional consent to allow reidentification of your record under specific conditions.
            </p>
            <p>
              By opting in, you agree to the following:
            </p>
            <ul className="space-y-2 text-sm">
              <li>• I consent to my de-identified data being re-linked to my identity only by authorized registry staff under secure and limited circumstances.</li>
              <li>• I understand that this reidentification would be used solely to contact me for follow-up research, personalized feedback, or product testing invitations.</li>
              <li>• I understand I may revoke this consent at any time by notifying the registry.</li>
              <li>• I understand that my contact information will not be shared with third parties without my explicit, additional consent.</li>
            </ul>
            <p>
              There are no penalties for declining this option, and your data will still be fully included in the registry and used for research in de-identified form.
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">YES, I consent to conditional reidentification for the purposes described above.</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">NO, I prefer to remain fully de-identified and will not be contacted for follow-up.</span>
              </div>
            </div>
            <p className="mt-4 text-sm">
              I have read and understand this form, have been provided sufficient background information, had adequate time to ask questions, all my questions were answered, and I have decided to participate in the Ginger Science SPF Research Registry. I will receive a copy of this consent form.
            </p>
            <div className="mt-6">
              <h4 className="font-semibold text-gray-900 mb-2">Contact Information</h4>
              <p className="text-sm">
                For any questions about the Ginger Science SPF Research Registry or this consent form, please contact:<br />
                <strong>info@gingerscience.org</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Exhibit B: Products - Full Width */}
      <div className="col-span-full bg-white border border-brand-200 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Exhibit B: Products</h2>
        <div className="space-y-6">
          {/* Product 1 */}
          <div className="bg-brand-50 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-2">SKIN1004 Madagascar Centella Hyalu‑Cica Water‑Fit Sun Serum SPF 50+ PA++++</h3>
            <p className="text-sm text-gray-700">
              Water, Dibutyl Adipate, Propanediol, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Polymethylsilsesquioxane, Ethylhexyl Triazone, Methylene Bis-Benzotriazolyl Tetramethylbutylphenol, Niacinamide, Coco-Caprylate/Caprate, Caprylyl Methicone, Diethylhexyl Butamido Triazone, Glycerin, 1,2-Hexanediol, Butylene Glycol, Centella Asiatica Extract(9,800Ppm), Betula Platyphylla Japonica Bark Extract, Ginkgo Biloba Leaf Extract, Camellia Sinensis Leaf Extract, Triticum Vulgare (Wheat) Sprout Extract, Medicago Sativa (Alfalfa) Extract, Brassica Oleracea Italica (Broccoli) Sprout Extract, Eruca Sativa Leaf Extract, Camellia Japonica Leaf Extract, Sodium Hyaluronate(10Ppm), Behenyl Alcohol, Poly C10-30 Alkyl Acrylate, Polyglyceryl-3 Methylglucose Distearate, Decyl Glucoside, Tromethamine, Carbomer, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Sodium Stearoyl Glutamate, Polyacrylate Crosspolymer-6, Adenosine, Xanthan Gum, T-Butyl Alcohol, Tocopherol, Hydrolyzed Hyaluronic Acid(Ppm), Inositol, Hyaluronic Acid(0.01Ppm), Pentylene Glycol, Ethylhexylglycerin
            </p>
          </div>

          {/* Product 2 */}
          <div className="bg-brand-50 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-2">La Roche‑Posay Anthelios Melt‑In Milk Sunscreen SPF 100 (Face & Body)</h3>
            <p className="text-sm text-gray-700">
              <strong>Active Ingredients:</strong> Avobenzone (3%), Homosalate (15%), Octisalate (5%), Octocrylene (10%)<br />
              <strong>Inactive Ingredients:</strong> Polymethylsilsesquioxane, Glycerin, Dimethicone, Poly C10-30 Alkyl Acrylate, Styrene/Acrylates Copolymer, Silica, Caprylyl Methicone, Acrylates/Dimethicone Copolymer, Diethylhexyl Syringylidenemalonate, PEG-100 Stearate, Glyceryl Stearate, Phenoxyethanol, Potassium Cetyl Phosphate, Tocopherol, Caprylyl Glycol, Panthenol, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Triethanolamine, PEG-8 Laurate, Inulin Lauryl Carbamate, Chlorphenesin, P-Anisic Acid, Caprylic/Capric Triglyceride, Xanthan Gum, Disodium EDTA, Cassia Alata Leaf Extract, Maltodextrin, Sodium Dodecylbenzenesulfonate
            </p>
          </div>

          {/* Product 3 */}
          <div className="bg-brand-50 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-2">Beauty of Joseon Relief Sun: Rice + Probiotics SPF 50+ PA++++</h3>
            <p className="text-sm text-gray-700">
              Water, Oryza Sativa (Rice) Extract (30%), Dibutyl Adipate, Propanediol, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Polymethylsilsesquioxane, Ethylhexyl Triazone, Niacinamide, Methylene Bis-Benzotriazolyl Tetramethylbutylphenol, Coco-Caprylate/Caprate, Caprylyl Methicone, Diethylhexyl Butamido Triazone, Glycerin, Butylene Glycol, Oryza Sativa (Rice) Germ Extract, Camellia Sinensis Leaf Extract, Lactobacillus/Pumpkin Ferment Extract, Bacillus/Soybean Ferment Extract, Saccharum Officinarum (Sugarcane) Extract, Macrocystis Pyrifera (Kelp) Extract, Cocos Nucifera (Coconut) Fruit Extract, Panax Ginseng Root Extract, Monascus/Rice Ferment, Pentylene Glycol, Behenyl Alcohol, Poly C10-30 Alkyl Acrylate, Polyglyceryl-3 Methylglucose Distearate, Decyl Glucoside, Tromethamine, Carbomer, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, 1,2-Hexanediol, Sodium Stearoyl Glutamate, Polyacrylate Crosspolymer-6, Ethylhexylglycerin, Adenosine, Xanthan Gum, Tocopherol, Lactobacillus/Rice Ferment, Aspergillus Ferment, Saccharomyces/Rice Ferment Filtrate
            </p>
          </div>

          {/* Product 4 */}
          <div className="bg-brand-50 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-2">ISDIN Eryfotona Actinica Ultralight Emulsion Sunscreen SPF 50+</h3>
            <p className="text-sm text-gray-700">
              <strong>Active Ingredients:</strong> Zinc Oxide (11%)<br />
              <strong>Inactive Ingredients:</strong> Water, Diethylhexyl Carbonate, Dibutyl Adipate, Cyclopentasiloxane, Dicaprylyl Carbonate, Alcohol Denat, Cyclohexasiloxane, Butylene Glycol, PEG-30 Dipolyhydroxystearate, Nylon-12, PEG-10 Dimethicone, Dimethicone, Sodium Chloride, Phenoxyethanol, Disteardimonium Hectorite, Triethoxycaprylylsilane, Tocopheryl Acetate, Glyceryl Stearate, Fragrance, Bisabolol, Disodium EDTA, Ethylhexylglycerin, Panthenol, PEG-8, Tocopherol, Lecithin, Plankton Extract, Ascorbyl Palmitate, Ascorbic Acid, Citric Acid
            </p>
          </div>

          {/* Product 5 */}
          <div className="bg-brand-50 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-2">Garnier Ombrelle Complete Sensitive Advanced Sunscreen Lotion SPF 60</h3>
            <p className="text-sm text-gray-700">
              <strong>Active Ingredients:</strong> Homosalate (15%), Octocrylene (7%), Octisalate (5%), Avobenzone (3%), Drometrizole Trisiloxane (Mexoryl® Xl) (0.5%)<br />
              <strong>Inactive Ingredients:</strong> Aqua, Silica, Styrene/Acrylates Copolymer, Butyloctyl Salicylate, Dicaprylyl Carbonate, Methyl Methacrylate Crosspolymer, Nylon-12, PEG-100 Stearate, Glyceryl Stearate, Perlite, Cera Alba, Ammonium Polyacryloyldimethyl Taurate, P-Anisic Acid, Behenyl Alcohol, Chlorphenesin, Disodium EDTA, PEG-8 Laurate, Phenoxyethanol, Sodium Stearoyl Glutamate, T-Butyl Alcohol, Tocopherol, Xanthan Gum
            </p>
          </div>

          {/* Product 6 */}
          <div className="bg-brand-50 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-2">Biore UV Aqua Rich Watery Essence SPF 50+ PA++++</h3>
            <p className="text-sm text-gray-700">
              Water, Ethanol, Ethylhexyl Methoxycinnamate, Ethylhexyl Triazone, Isopropyl Palmitate, (Lauryl Methacrylate/Sodium Methacrylate) Crosspolymer, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Hydrogenated Polyisobutene, Bisethylhexyloxyphenol Methoxyphenyl Triazine, Palmitic Acid, Dextrin, BG, Xylitol, (Acrylates/Alkyl Acrylate (C10-30)) Crosspolymer, Dimethicone, Alkyl Benzoate (C12-15), Glycerin, Glyceryl Stearate, Propanediol, Glyceryl Behenate, (Vinyl Dimethicone/Methicone) Silsesquioxane) Crosspolymer, Cetanol, Agar, Sorbitan Distearate, Isoceteth-20, Polyvinyl Alcohol, (Dimethicone/Vinyl Dimethicone) Crosspolymer, Stearoyl Glutamic Acid, Arginine, Potassium Hydroxide, Sodium Hydroxide, Royal Jelly Extract, Hyaluronic Acid Na, Phenoxyethanol, EDTA 2Na, BHT, Fragrance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProtocolPage; 