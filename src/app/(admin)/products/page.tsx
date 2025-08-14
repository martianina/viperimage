'use client';

import { useState } from 'react';
import { FaShoppingCart, FaStar, FaExternalLinkAlt, FaQuoteLeft, FaGlobe, FaTimes, FaFlask } from 'react-icons/fa';
import Image from 'next/image';

const productsData = [
  {
    "product": "Biore UV Aqua Rich Watery Essence SPF 50+ PA++++",
    "image_url": "/img/products/biore-aqua-rich.jpg",
    "ingredients": "Water, Ethanol, Ethylhexyl Methoxycinnamate, Ethylhexyl Triazone, Isopropyl Palmitate, (Lauryl Methacrylate/Sodium Methacrylate) Crosspolymer, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Hydrogenated Polyisobutene, Bisethylhexyloxyphenol Methoxyphenyl Triazine, Palmitic Acid, Dextrin, BG, Xylitol, (Acrylates/Alkyl Acrylate (C10-30)) Crosspolymer, Dimethicone, Alkyl Benzoate (C12-15), Glycerin, Glyceryl Stearate, Propanediol, Glyceryl Behenate, (Vinyl Dimethicone/Methicone) Silsesquioxane) Crosspolymer, Cetanol, Agar, Sorbitan Distearate, Isoceteth-20, Polyvinyl Alcohol, (Dimethicone/Vinyl Dimethicone) Crosspolymer, Stearoyl Glutamic Acid, Arginine, Potassium Hydroxide, Sodium Hydroxide, Royal Jelly Extract, Hyaluronic Acid Na, Phenoxyethanol, EDTA 2Na, BHT, Fragrance",
    "purchase_links": [
      {
        "site": "Amazon US (import)",
        "url": "https://www.amazon.com/Biore-Sunscreen-Water-Essence-3-70floz/dp/B0CG5DLLJD",
        "price": "$30.39"
      },
      {
        "site": "Target US",
        "url": "https://www.target.com/p/biore-uv-aqua-rich-dermatologist-tested-oxybenzone-38-octinoxate-free-moisturizing-face-sunscreen-for-sensitive-skin-spf-50-1-7-fl-oz/-/A-89151953",
        "price": "$13.59"
      }
    ],
    "reviews": [
      {
        "quote": "Community review coming soon...",
        "source": "Redhead Community",
        "url": "#",
        "citation": "pending"
      }
    ]
  },
  {
    "product": "SKIN1004 Madagascar Centella Hyalu‑Cica Water‑Fit Sun Serum SPF 50+ PA++++",
    "image_url": "/img/products/skin1004-sun-serum.jpg",
    "ingredients": "Water, Dibutyl Adipate, Propanediol, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Polymethylsilsesquioxane, Ethylhexyl Triazone, Methylene Bis-Benzotriazolyl Tetramethylbutylphenol, Niacinamide, Coco-Caprylate/Caprate, Caprylyl Methicone, Diethylhexyl Butamido Triazone, Glycerin, 1,2-Hexanediol, Butylene Glycol, Centella Asiatica Extract(9,800Ppm), Betula Platyphylla Japonica Bark Extract, Ginkgo Biloba Leaf Extract, Camellia Sinensis Leaf Extract, Triticum Vulgare (Wheat) Sprout Extract, Medicago Sativa (Alfalfa) Extract, Brassica Oleracea Italica (Broccoli) Sprout Extract, Eruca Sativa Leaf Extract, Camellia Japonica Leaf Extract, Sodium Hyaluronate(10Ppm), Behenyl Alcohol, Poly C10-30 Alkyl Acrylate, Polyglyceryl-3 Methylglucose Distearate, Decyl Glucoside, Tromethamine, Carbomer, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Sodium Stearoyl Glutamate, Polyacrylate Crosspolymer-6, Adenosine, Xanthan Gum, T-Butyl Alcohol, Tocopherol, Hydrolyzed Hyaluronic Acid(Ppm), Inositol, Hyaluronic Acid(0.01Ppm), Pentylene Glycol, Ethylhexylglycerin",
    "purchase_links": [
      {
        "site": "YesStyle",
        "url": "https://www.yesstyle.com/en/skin-1004-madagascar-centella-hyalu-cica-water-fit-sun-serum-50ml/info.html/pid.1113888108",
        "price": "$10.46"
      },
      {
        "site": "Walmart US",
        "url": "https://www.walmart.com/ip/SKIN1004-Madagascar-Centella-Hyalu-Cica-Water-Fit-Sun-Serum-SPF-50-PA-1-69-fl-oz-50-ml/1281161172",
        "price": "$24.54"
      }
    ],
    "reviews": [
      {
        "quote": "Community review coming soon...",
        "source": "Redhead Community",
        "url": "#",
        "citation": "pending"
      }
    ]
  },
  {
    "product": "La Roche‑Posay Anthelios Melt‑In Milk Sunscreen SPF 100",
    "image_url": "/img/products/anthelios-spf100.jpg",
    "ingredients": "Active Ingredients: Avobenzone (3%), Homosalate (15%), Octisalate (5%), Octocrylene (10%). Inactive Ingredients: Polymethylsilsesquioxane, Glycerin, Dimethicone, Poly C10-30 Alkyl Acrylate, Styrene/Acrylates Copolymer, Silica, Caprylyl Methicone, Acrylates/Dimethicone Copolymer, Diethylhexyl Syringylidenemalonate, PEG-100 Stearate, Glyceryl Stearate, Phenoxyethanol, Potassium Cetyl Phosphate, Tocopherol, Caprylyl Glycol, Panthenol, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Triethanolamine, PEG-8 Laurate, Inulin Lauryl Carbamate, Chlorphenesin, P-Anisic Acid, Caprylic/Capric Triglyceride, Xanthan Gum, Disodium EDTA, Cassia Alata Leaf Extract, Maltodextrin, Sodium Dodecylbenzenesulfonate",
    "purchase_links": [
      {
        "site": "La Roche‑Posay US",
        "url": "https://www.laroche-posay.us/our-products/sun/body-sunscreen/anthelios-melt-in-milk-sunscreen-for-face-body-spf-100-antheliosmeltinmilkspf100.html",
        "price": "$26.99"
      },
      {
        "site": "Ulta",
        "url": "https://www.ulta.com/p/anthelios-melt-in-milk-body-face-sunscreen-lotion-spf-100-pimprod2013150",
        "price": "$27.54"
      },
      {
        "site": "Walmart",
        "url": "https://www.walmart.com/ip/La-Roche-Posay-Anthelios-Melt-In-Milk-Sunscreen-for-Face-and-Body-SPF-100-5-0-fl-oz/5233614937",
        "price": "$38.97"
      }
    ],
    "reviews": [
      {
        "quote": "Community review coming soon...",
        "source": "Redhead Community",
        "url": "#",
        "citation": "pending"
      }
    ]
  },
  {
    "product": "ISDIN Eryfotona Actinica Ultralight Emulsion Sunscreen SPF 50+",
    "image_url": "/img/products/isdin-eryfotona.jpg",
    "ingredients": "Active Ingredients: Zinc Oxide (11%). Inactive Ingredients: Water, Diethylhexyl Carbonate, Dibutyl Adipate, Cyclopentasiloxane, Dicaprylyl Carbonate, Alcohol Denat, Cyclohexasiloxane, Butylene Glycol, PEG-30 Dipolyhydroxystearate, Nylon-12, PEG-10 Dimethicone, Dimethicone, Sodium Chloride, Phenoxyethanol, Disteardimonium Hectorite, Triethoxycaprylylsilane, Tocopheryl Acetate, Glyceryl Stearate, Fragrance, Bisabolol, Disodium EDTA, Ethylhexylglycerin, Panthenol, PEG-8, Tocopherol, Lecithin, Plankton Extract, Ascorbyl Palmitate, Ascorbic Acid, Citric Acid",
    "purchase_links": [
      {
        "site": "ISDIN US",
        "url": "#",
        "price": "TBD"
      }
    ],
    "reviews": [
      {
        "quote": "Community review coming soon...",
        "source": "Redhead Community",
        "url": "#",
        "citation": "pending"
      }
    ]
  },
  {
    "product": "Garnier Ombrelle Complete Sensitive Advanced Sunscreen Lotion SPF 60",
    "image_url": "/img/products/garnier-ombrelle.jpg",
    "ingredients": "Active Ingredients: Homosalate (15%), Octocrylene (7%), Octisalate (5%), Avobenzone (3%), Drometrizole Trisiloxane (Mexoryl® Xl) (0.5%). Inactive Ingredients: Aqua, Silica, Styrene/Acrylates Copolymer, Butyloctyl Salicylate, Dicaprylyl Carbonate, Methyl Methacrylate Crosspolymer, Nylon-12, PEG-100 Stearate, Glyceryl Stearate, Perlite, Cera Alba, Ammonium Polyacryloyldimethyl Taurate, P-Anisic Acid, Behenyl Alcohol, Chlorphenesin, Disodium EDTA, PEG-8 Laurate, Phenoxyethanol, Sodium Stearoyl Glutamate, T-Butyl Alcohol, Tocopherol, Xanthan Gum",
    "purchase_links": [
      {
        "site": "Amazon Canada",
        "url": "#",
        "price": "TBD"
      }
    ],
    "reviews": [
      {
        "quote": "Community review coming soon...",
        "source": "Redhead Community",
        "url": "#",
        "citation": "pending"
      }
    ]
  },
  {
    "product": "Beauty of Joseon Relief Sun: Rice + Probiotics SPF 50+ PA++++",
    "image_url": "/img/products/beauty-of-joseon.jpg",
    "ingredients": "Water, Oryza Sativa (Rice) Extract (30%), Dibutyl Adipate, Propanediol, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Polymethylsilsesquioxane, Ethylhexyl Triazone, Niacinamide, Methylene Bis-Benzotriazolyl Tetramethylbutylphenol, Coco-Caprylate/Caprate, Caprylyl Methicone, Diethylhexyl Butamido Triazone, Glycerin, Butylene Glycol, Oryza Sativa (Rice) Germ Extract, Camellia Sinensis Leaf Extract, Lactobacillus/Pumpkin Ferment Extract, Bacillus/Soybean Ferment Extract, Saccharum Officinarum (Sugarcane) Extract, Macrocystis Pyrifera (Kelp) Extract, Cocos Nucifera (Coconut) Fruit Extract, Panax Ginseng Root Extract, Monascus/Rice Ferment, Pentylene Glycol, Behenyl Alcohol, Poly C10-30 Alkyl Acrylate, Polyglyceryl-3 Methylglucose Distearate, Decyl Glucoside, Tromethamine, Carbomer, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, 1,2-Hexanediol, Sodium Stearoyl Glutamate, Polyacrylate Crosspolymer-6, Ethylhexylglycerin, Adenosine, Xanthan Gum, Tocopherol, Lactobacillus/Rice Ferment, Aspergillus Ferment, Saccharomyces/Rice Ferment Filtrate",
    "purchase_links": [
      {
        "site": "YesStyle",
        "url": "#",
        "price": "TBD"
      }
    ],
    "reviews": [
      {
        "quote": "Community review coming soon...",
        "source": "Redhead Community",
        "url": "#",
        "citation": "pending"
      }
    ]
  }
];

const ProductsPage = () => {
  const [selectedIngredients, setSelectedIngredients] = useState<string | null>(null);

  const openIngredientsModal = (ingredients: string) => {
    setSelectedIngredients(ingredients);
  };

  const closeIngredientsModal = () => {
    setSelectedIngredients(null);
  };

  return (
    <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-2">
      {/* Header Section - Full Width */}
      <div className="col-span-full bg-white border border-brand-200 rounded-lg p-8 mb-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center">
            <FaGlobe className="mr-3 text-brand-500" />
            Redhead-Tested Sunscreens
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover sunscreens that have been tested and reviewed by the redhead community. 
            These products offer various formulations and price points to meet different needs and preferences.
          </p>
        </div>
      </div>

      {/* Products Grid - 2 per row */}
      {productsData.map((product, index) => (
        <div key={index} className="col-span-1 bg-white border border-brand-200 rounded-lg overflow-hidden h-fit">
          {/* Product Header */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-xs text-gray-500 text-center">
                    Product Image<br />Placeholder
                  </div>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-lg font-bold text-gray-900 mb-2">{product.product}</h2>
                <div className="flex items-center space-x-2">
                  <FaStar className="text-yellow-400" />
                  <span className="text-sm text-gray-600">Community Tested</span>
                </div>
              </div>
            </div>
          </div>

          {/* Purchase Links */}
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <FaShoppingCart className="mr-2 text-brand-500" />
              Where to Buy
            </h3>
            <div className="space-y-2">
              {product.purchase_links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-brand-50 rounded-lg hover:bg-brand-100 transition-colors duration-200"
                >
                  <div className="flex items-center">
                    <FaExternalLinkAlt className="text-brand-500 mr-2" />
                    <span className="font-medium text-gray-900">{link.site}</span>
                  </div>
                  <span className="font-bold text-brand-600">{link.price}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <FaQuoteLeft className="mr-2 text-brand-500" />
              Community Reviews
            </h3>
            <div className="space-y-4">
              {product.reviews.map((review, reviewIndex) => (
                <div key={reviewIndex} className="bg-gray-50 p-4 rounded-lg">
                  <blockquote className="text-sm text-gray-700 italic mb-2">
                    "{review.quote}"
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{review.source}</span>
                    {review.url !== "#" && (
                      <a
                        href={review.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-brand-500 hover:text-brand-600 flex items-center"
                      >
                        View Source
                        <FaExternalLinkAlt className="ml-1" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ingredient Information */}
          <div className="p-6 bg-gray-50">
            <button
              onClick={() => openIngredientsModal(product.ingredients)}
              className="flex items-center justify-center w-full py-2 px-4 bg-white border border-brand-200 rounded-lg hover:bg-brand-50 transition-colors duration-200"
            >
              <FaFlask className="mr-2 text-brand-500" />
              <span className="text-sm font-medium text-gray-900">View Ingredients</span>
            </button>
          </div>
        </div>
      ))}

      {/* Information Section - Full Width */}
      <div className="col-span-full bg-gradient-to-r from-brand-50 to-brand-100 border border-brand-200 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">About These Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white bg-opacity-70 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Community Tested</h3>
            <p className="text-sm text-gray-700">
              All products featured have been tested and reviewed by members of the redhead community, providing real-world feedback on effectiveness and compatibility.
            </p>
          </div>
          <div className="bg-white bg-opacity-70 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Multiple Formulations</h3>
            <p className="text-sm text-gray-700">
              From lightweight essences to traditional lotions, these products offer different textures and finishes to suit various skin types and preferences.
            </p>
          </div>
          <div className="bg-white bg-opacity-70 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Price Range</h3>
            <p className="text-sm text-gray-700">
              Products are available at various price points, from budget-friendly options to premium formulations, making sun protection accessible to everyone.
            </p>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="col-span-full bg-white border border-brand-200 rounded-lg p-6">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Important Note</h3>
          <p className="text-sm text-gray-600">
            These products are recommendations based on community feedback and testing. Individual results may vary. 
            Always patch test new products and consult with a dermatologist if you have specific skin concerns. 
            Prices and availability may change over time.
          </p>
        </div>
      </div>

      {/* Ingredients Modal */}
      {selectedIngredients && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900">Ingredients List</h3>
              <button
                onClick={closeIngredientsModal}
                className="text-gray-400 hover:text-gray-600"
              >
                <FaTimes className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div className="prose prose-sm max-w-none">
                <p className="text-gray-700 whitespace-pre-wrap">{selectedIngredients}</p>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200">
              <button
                onClick={closeIngredientsModal}
                className="w-full py-2 px-4 bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPage; 