import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function FacesOfJusticeSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const scrollContainerRef = useRef(null);
  const attorneys = [
    {
      name: "Ashley Winstead",
      title: "Trial Attorney, Jacksonville",
      image: "2.avif"
    },
    {
      name: "Jason Miller",
      title: "Managing Partner, Jacksonville",
      image: "3.avif"
    },
    {
      name: "Jac",
      title: "Trial Attorney",
      image: "1.avif"
    },
    {
      name: "Attorney 4",
      title: "Trial Attorney",
      image: "4.avif"
    },
    {
      name: "Attorney 5",
      title: "Trial Attorney",
      image: "8.webp"
    }
  ];
  const totalSlides = attorneys.length;
  const { t } = useTranslation();

  const scrollToSlide = (index) => {
    if (isLargeScreen) return;

    const container = scrollContainerRef.current;
    if (!container) return;
    const slide = container.children[index];
    if (!slide) return;

    const offsetLeft = slide.offsetLeft;
    const containerWidth = container.clientWidth;
    const slideWidth = slide.clientWidth;
    const targetScrollLeft = Math.max(offsetLeft - (containerWidth - slideWidth) / 2, 0);

    container.scrollTo({
      left: targetScrollLeft,
      behavior: 'smooth',
    });
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    scrollToSlide(currentSlide);
  }, [currentSlide, isLargeScreen]);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="bg-white px-4 py-16 sm:px-6 md:py-24 lg:px-10 xl:px-12">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-start">
          {/* Left Column - Text Content */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
              {t('faces.title')}
            </h2>
            
            <p className="mb-8 text-lg leading-relaxed text-gray-800 md:text-xl">
              {t('faces.description')}
            </p>
            
            {/* Signature Placeholder */}
            <div className="mb-6 w-full max-w-xs sm:max-w-sm md:max-w-md">
              <div className="text-sm italic text-gray-400">{t('faces.signatureLabel')}</div>
            </div>
            
            {/* Matt Morgan Profile */}
            <div className="mb-8 flex w-full max-w-lg flex-col items-center gap-4 sm:flex-row sm:items-center">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-300">
                {/* <div className="text-gray-600 text-xs text-center">MM</div> */}
                <img src="3.avif" alt="" />
              </div>
              <div>
                <div className="font-bold text-gray-900">{t('faces.profileName')}</div>
                <div className="text-gray-600">{t('faces.profileTitle')}</div>
              </div>
            </div>
            
            <a
              href="#"
              className="group mb-8 inline-flex items-center font-semibold text-brand-primary transition hover:text-brand-primary/80"
            >
              {t('common.buttons.meetOurAttorneys')}
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            
            <p className="text-xs leading-relaxed text-gray-500">
              {t('common.disclaimers.attorneyAvailability')}
            </p>
          </div>

          {/* Right Column - Video Thumbnails */}
          <div className="flex flex-col">
            <div className="relative mb-8">
              {!isLargeScreen && (
                <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-10 flex items-center justify-between px-2 sm:px-4">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-lg transition hover:scale-105 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent sm:h-12 sm:w-12"
                    aria-label={t('common.aria.showPreviousAttorney')}
                  >
                    <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-lg transition hover:scale-105 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent sm:h-12 sm:w-12"
                    aria-label={t('common.aria.showNextAttorney')}
                  >
                    <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              )}

              <div
                ref={scrollContainerRef}
                className={`gap-5 pb-5 ${
                  isLargeScreen
                    ? 'grid grid-cols-2 justify-items-center lg:grid-cols-2 xl:grid-cols-3'
                    : 'flex snap-x snap-mandatory overflow-x-auto scrollbar-hide'
                }`}
              >
                {attorneys.map((attorney, index) => (
                  <div
                    key={index}
                    className={`transition-transform duration-200 ${
                      isLargeScreen
                        ? 'flex w-full max-w-xs flex-col'
                        : 'w-[80vw] flex-shrink-0 snap-center sm:w-64 md:w-72'
                    } ${index === currentSlide ? 'scale-[1.02]' : 'scale-100'}`}
                  >
                    <div
                      className={`relative mb-3 aspect-[3/4] overflow-hidden rounded-2xl shadow-lg ${
                        index === currentSlide
                          ? 'ring-4 ring-brand-accent ring-offset-2 ring-offset-white'
                          : 'ring-1 ring-gray-200'
                      }`}
                    >
                      <img
                        src={`/${attorney.image}`}
                        alt={attorney.name}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />

                      {/* Play Button */}
                      <button
                        type="button"
                        onClick={() => setCurrentSlide(index)}
                        className="group absolute inset-0 flex items-center justify-center"
                        aria-label={t('common.aria.playVideo', { name: attorney.name })}
                      >
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-accent shadow-lg transition-transform group-hover:scale-110 sm:h-16 sm:w-16">
                          <svg className="ml-1 h-6 w-6 text-black sm:h-8 sm:w-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </button>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-gray-900">{attorney.name}</div>
                      <div className="text-sm text-gray-600">{attorney.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Pagination Dots */}
            {!isLargeScreen && (
              <div className="flex flex-wrap items-center justify-center gap-2">
                {attorneys.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentSlide
                        ? 'w-8 bg-gray-900'
                        : 'w-2 bg-gray-400 hover:bg-gray-600'
                    }`}
                    aria-label={t('common.aria.goToSlide', { index: index + 1 })}
                  />
                ))}
                <div className="mt-3 flex w-full items-center justify-center gap-4 sm:hidden">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 shadow-sm transition hover:bg-gray-200"
                    aria-label={t('common.aria.showPreviousAttorney')}
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 shadow-sm transition hover:bg-gray-200"
                    aria-label={t('common.aria.showNextAttorney')}
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {isLargeScreen && (
              <div className="mt-6 flex items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
                  aria-label={t('common.aria.showPreviousAttorney')}
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <div className="text-sm font-semibold text-gray-700">
                  {t('common.labels.slideCounter', { current: currentSlide + 1, total: totalSlides })}
                </div>
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
                  aria-label={t('common.aria.showNextAttorney')}
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

