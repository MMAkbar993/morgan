import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function FacesOfJusticeSection() {
  const { t } = useTranslation();
  const attorneys = useMemo(
    () => [
      { name: 'Ashley Winstead', title: 'Trial Attorney, Jacksonville', image: '2.avif' },
      { name: 'Jason Miller', title: 'Managing Partner, Jacksonville', image: '3.avif' },
      { name: 'Jac', title: 'Trial Attorney', image: '1.avif' },
      { name: 'Attorney 4', title: 'Trial Attorney', image: '4.avif' },
      { name: 'Attorney 5', title: 'Trial Attorney', image: '8.webp' },
      { name: 'Attorney 6', title: 'Trial Attorney', image: '16.webp' },
    ],
    [],
  );
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  const totalSlides = attorneys.length;
  const maxSlideIndex = Math.max(0, totalSlides - cardsPerView);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1280) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 992) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  useEffect(() => {
    setCurrentSlide((prev) => Math.min(prev, maxSlideIndex));
  }, [maxSlideIndex]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev >= maxSlideIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlideIndex : prev - 1));
  };

  const cardWidthPercent = useMemo(() => 100 / cardsPerView, [cardsPerView]);
  const slideOffsetPercent = useMemo(
    () => (totalSlides > 0 ? (currentSlide * 100) / totalSlides : 0),
    [currentSlide, totalSlides],
  );

  return (
    <section className="bg-white px-4 py-16 sm:px-6 md:py-24 lg:px-10 xl:px-12">
      <div className="mx-auto w-full max-w-7xl overflow-hidden">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-start">
          {/* Left Column - Text Content */}
          <div className="mx-auto flex w-full max-w-xl flex-col items-center px-2 text-center sm:max-w-2xl sm:px-4 md:mx-0 md:max-w-none md:items-start md:px-0 md:text-left">
            <h2 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl">
              {t('faces.title')}
            </h2>
            
            <p className="mb-8 text-base leading-relaxed text-gray-800 sm:text-lg md:text-xl">
              {t('faces.description')}
            </p>
            
            <SignatureGraphic />
            
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
          <div className="flex w-full flex-col">
            <div className="relative mb-8">
              <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-10 flex items-center justify-between px-1 sm:px-2">
                <CarouselButton direction="prev" onClick={handlePrev} label={t('common.aria.showPreviousAttorney')} />
                <CarouselButton direction="next" onClick={handleNext} label={t('common.aria.showNextAttorney')} />
              </div>

              <div className="overflow-hidden rounded-3xl">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${slideOffsetPercent}%)` }}
                >
                  {attorneys.map((attorney, index) => {
                    const isActive = index >= currentSlide && index < currentSlide + cardsPerView;
                    return (
                      <div
                        key={attorney.name}
                        style={{ flex: `0 0 ${cardWidthPercent}%` }}
                        className="box-border px-1 py-2 sm:px-3"
                      >
                        <div
                          className={`relative mx-auto mb-3 aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl shadow-lg transition sm:aspect-[3/4] ${
                            isActive
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

                          <button
                            type="button"
                            onClick={() => setCurrentSlide(index)}
                            className="group absolute inset-0 flex items-center justify-center"
                            aria-label={t('common.aria.playVideo', { name: attorney.name })}
                          >
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-accent shadow-lg transition-transform group-hover:scale-110 sm:h-16 sm:w-16">
                              <svg className="ml-1 h-6 w-6 text-black sm:h-8 sm:w-8" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </button>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-gray-900">{attorney.name}</div>
                          <div className="text-sm text-gray-600">{attorney.title}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center justify-center gap-2">
                {Array.from({ length: maxSlideIndex + 1 }).map((_, index) => {
                  const isActive = index === currentSlide;
                  return (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2.5 rounded-full transition-all ${
                        isActive ? 'w-8 bg-gray-900' : 'w-2.5 bg-gray-400 hover:bg-gray-500'
                      }`}
                      aria-label={t('common.aria.goToSlide', { index: index + 1 })}
                      aria-pressed={isActive}
                    >
                      <span className="sr-only">{`Slide ${index + 1}`}</span>
                    </button>
                  );
                })}
              </div>
              <div className="text-sm font-semibold text-gray-700">
                {currentSlide + 1} / {maxSlideIndex + 1}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CarouselButton({ direction, onClick, label }) {
  const isPrev = direction === 'prev';

  return (
    <button
      type="button"
      onClick={onClick}
      className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-lg transition hover:scale-105 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent sm:h-12 sm:w-12"
      aria-label={label}
    >
      <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {isPrev ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        )}
      </svg>
    </button>
  );
}

function SignatureGraphic() {
  return (
    <div className="mb-8 w-full max-w-xs sm:max-w-sm md:max-w-md">
      <svg
        viewBox="0 0 360 90"
        role="img"
        aria-labelledby="signatureTitle"
        className="h-auto w-full text-gray-800"
      >
        <title id="signatureTitle">Signature of Matt Morgan</title>
        <path
          d="M12 62c24-10 62-28 76-36 24-12 32-12 44-8s14 20-4 24-50-6-60-24c-8-16-6-30 6-32 14-2 24 16 32 30 18 34 44 58 62 58 12 0 28-10 44-36s32-52 46-52c18 0 28 44-36 72-34 14-48 18-48 24 0 4 6 8 22 8 18 0 42-6 74-20"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-80"
        />
      </svg>
      <div className="mt-2 text-sm text-gray-500">Matt Morgan</div>
    </div>
  );
}

