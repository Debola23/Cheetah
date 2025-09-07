import React, { useState } from 'react';
import { motion } from 'framer-motion';

const currencies = ['USD','EUR','GBP','JPY','INR','CNY','AUD','CAD'];

const languageRegions = [
  { code: 'en-US', label: 'English', region: 'United States' },
  { code: 'en-GB', label: 'English', region: 'United Kingdom' },
  { code: 'fr-FR', label: 'Français', region: 'France' },
  { code: 'es-ES', label: 'Español', region: 'Spain' },
  { code: 'zh-CN', label: '中文', region: 'China' },
  { code: 'hi-IN', label: 'हिन्दी', region: 'India' },
];

export default function LanguageRegionModal({ onClose }) {
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [selectedRegion, setSelectedRegion] = useState(languageRegions[0].code);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative top-[30px] bg-white dark:bg-[#000] rounded-lg shadow-xl w-full max-w-2xl overflow-auto">
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl leading-none cursor-pointer"
        >
          x
        </button>

        <div className="p-6 space-y-6">
          {/* Currency Section */}
          <div>
            <p className="font-medium text-gray-700 dark:text-gray-300 mb-2">Currency</p>
            <div className="flex flex-wrap gap-2">
              {currencies.map(cur => {
                const active = selectedCurrency === cur;
                return (
                  <button
                    key={cur}
                    onClick={() => setSelectedCurrency(cur)}
                    className={`px-3 py-1 rounded border transition ${
                      active
                        ? 'bg-[#D6A95A] border-[#D6A95A] text-white'
                        : 'bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600'
                    } hover:border-[#D6A95A]`}
                  >
                    {cur}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Language & Region Section */}
          <div>
            <p className="font-medium text-gray-700 dark:text-gray-300 mb-2">Choose a language & region</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {languageRegions.map(lr => {
                const active = selectedRegion === lr.code;
                return (
                  <button
                    key={lr.code}
                    onClick={() => setSelectedRegion(lr.code)}
                    className={`p-3 rounded-lg text-left border transition ${
                      active
                        ? 'bg-[#D6A95A] dark:bg-gray-700 border-[#D6A95A]'
                        : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600'
                    } hover:border-[#D6A95A]`}
                  >
                    <div className="font-medium text-gray-800 dark:text-gray-100">
                      {lr.label}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {lr.region}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
