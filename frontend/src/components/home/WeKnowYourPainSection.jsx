import React from 'react';
import { useTranslation } from 'react-i18next';

export default function WeKnowYourPainSection() {
  const { t } = useTranslation();

  return (
    <section className="relative py-0">
      <div className="relative w-full">
        {/* Background Image */}
        <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
          {/* Placeholder for image - replace with actual image */}
          <div className="absolute inset-0 flex items-center justify-center rounded-lg">
            {/* <div className="text-white text-center">
              <div className="text-lg mb-2">Office Meeting Image</div>
              
              <div className="text-sm">Conference room with team</div>
            </div> */}
            <img src="4.avif" alt="" />
          </div>

          {/* Play Button */}
          <button className="absolute top-1/2 right-4 transform -translate-y-1/2 group z-10 md:right-1/4">
            <div className="w-16 h-16 rounded-full bg-brand-accent shadow-2xl transition-transform group-hover:scale-110 md:h-24 md:w-24 flex items-center justify-center">
              <svg className="w-10 h-10 md:w-12 md:h-12 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </button>

          {/* Overlay with Text */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent px-6 py-8 md:left-20 md:px-12 md:py-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t('pain.title')}
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-white max-w-3xl leading-relaxed">
              {t('pain.description')}
            </p>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-white py-4 px-4">
        <div className="container mx-auto max-w-7xl">
          <p className="text-xs text-gray-500 leading-relaxed">
            {t('pain.disclaimer')}
          </p>
        </div>
      </div>
    </section>
  );
}

