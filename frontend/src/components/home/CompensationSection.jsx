import React from 'react';
import { useTranslation } from 'react-i18next';

export default function CompensationSection() {
  const { t } = useTranslation();
  const compensationTypes = t('compensation.items', { returnObjects: true });
  const icons = compensationTypes.map((_, index) => (
    <svg key={index} className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ));

  return (
    <section className="bg-gray-100 py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-0">
            {t('compensation.title')}
          </h2>
          <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group mb-8 md:mb-0">
            {t('common.buttons.startClaim')}
            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {compensationTypes.map((title, index) => (
            <div key={index} className="bg-blue-500 rounded-lg p-6 text-white">
              <div className="flex items-center justify-center mb-4">
                {icons[index]}
              </div>
              <h3 className="text-xl font-bold text-center">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

