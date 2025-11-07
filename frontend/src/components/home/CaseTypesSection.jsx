import React from 'react';
import { useTranslation } from 'react-i18next';

export default function CaseTypesSection() {
  const { t } = useTranslation();
  const caseTypes = t('caseTypes.items', { returnObjects: true });

  return (
    <section className="bg-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 md:mb-0">
            {t('caseTypes.title')}
          </h3>
          <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group">
            {t('common.buttons.viewAll')}
            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          {caseTypes.map((caseType, index) => (
            <div key={index} className="flex items-center gap-3">
              <svg className="w-5 h-5 text-black flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-800">{caseType}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

