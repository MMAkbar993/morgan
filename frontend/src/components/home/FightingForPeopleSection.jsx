import React from 'react';
import { useTranslation } from 'react-i18next';

export default function FightingForPeopleSection() {
  const { t } = useTranslation();
  const stats = t('fighting.stats', { returnObjects: true });
  const primaryStats = stats.slice(0, 3);
  const highlightStat = stats[3] ?? stats[stats.length - 1] ?? { value: '', label: '' };

  return (
    <section className="bg-gray-100 py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {t('fighting.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl leading-relaxed">
            {t('fighting.description')}
          </p>
        </div>

        {/* Statistics Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
          {/* Segment 1 */}
          {primaryStats.map((item, index) => (
            <div key={index} className="bg-gray-200 p-6 md:p-8 md:border-r md:border-gray-300">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                {item.value}
              </div>
              <div className="text-sm md:text-base text-gray-700">
                {item.label}
              </div>
            </div>
          ))}

          {/* Segment 4 - Dark Blue with Arrow */}
          <div className="relative mt-4 bg-brand-primary p-6 text-white md:mt-0 md:p-8">
            <div className="absolute left-0 top-0 bottom-0 hidden w-8 md:block">
              <svg className="h-full w-full text-brand-primary" viewBox="0 0 32 100" preserveAspectRatio="none">
                <path d="M0,0 L32,50 L0,100 Z" fill="currentColor" />
              </svg>
            </div>
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                {highlightStat.value}
            </div>
            <div className="text-sm md:text-base">
                {highlightStat.label}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

