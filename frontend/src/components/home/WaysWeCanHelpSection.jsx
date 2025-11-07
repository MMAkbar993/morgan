import React from 'react';
import { useTranslation } from 'react-i18next';

export default function WaysWeCanHelpSection() {
  const { t } = useTranslation();
  const helpCards = t('ways.cards', { returnObjects: true });
  const icons = [
    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" key="icon-1">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>,
    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" key="icon-2">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>,
    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" key="icon-3">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>,
  ];

  return (
    <section className="bg-white py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12">
          {t('ways.title')}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {helpCards.map((card, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-4">
                {icons[index]}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {card.title}
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {card.description}
              </p>
              <a href={card.link ?? '#'} className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group">
                {t('common.buttons.howWeHelp')}
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

