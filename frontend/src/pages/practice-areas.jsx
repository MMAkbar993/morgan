import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const HERO_ICON_MAP = {
  car: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M5.5 5.5A2.5 2.5 0 0 1 8 3h8a2.5 2.5 0 0 1 2.5 2.5l.77 4.23A3 3 0 0 1 22 12v4.5a1.5 1.5 0 0 1-3 0V16h-2v.5a1.5 1.5 0 0 1-3 0V16H10v.5a1.5 1.5 0 0 1-3 0V16H5v.5a1.5 1.5 0 0 1-3 0V12a3 3 0 0 1 2.73-2.97Zm1.71.5-.56 3.06H17.35l-.56-3.06A1 1 0 0 0 16 5H8a1 1 0 0 0-.79.37ZM5 11a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2Z" />
    </svg>
  ),
  slip: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a3 3 0 1 1-3 3 3 3 0 0 1 3-3Zm-5.06 8.42a2 2 0 0 1 2.12-1.58l4.38.44A3 3 0 0 1 16 12.88V14a1 1 0 0 1-2 0v-1.12a1 1 0 0 0-.91-1l-2.09-.21-2.24 8.01a1 1 0 0 1-1.92-.54l1.47-5.26-1.12-.12-1.53 5.4a1 1 0 0 1-1.92-.54ZM18 13a1 1 0 0 1 .92.61l1.5 3.5a1 1 0 0 1-1.84.78L18.82 16H18a1 1 0 0 1 0-2Z" />
    </svg>
  ),
  workers: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a4 4 0 0 1 4 4v1a2 2 0 0 1 2 2v2.09a6 6 0 0 1-3.7 5.54l-.3.12a2 2 0 0 0-1.28 1.86V20a2 2 0 1 1-4 0v-1.39a2 2 0 0 0-1.28-1.86l-.3-.12A6 6 0 0 1 6 11.09V9a2 2 0 0 1 2-2V6a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v1h4V6a2 2 0 0 0-2-2Z" />
      <path d="M20 18a1 1 0 0 1 .78.37l1 1.25a1 1 0 0 1-1.56 1.26l-1-1.25A1 1 0 0 1 20 18ZM4 18a1 1 0 0 1 .78 1.63l-1 1.25a1 1 0 0 1-1.56-1.26l1-1.25A1 1 0 0 1 4 18Z" />
    </svg>
  ),
};

function HeroIcon({ type }) {
  const icon = HERO_ICON_MAP[type];
  if (!icon) {
    return null;
  }
  return icon;
}

export default function PracticeAreas() {
  const { t } = useTranslation();

  const breadcrumbs = t('practiceAreas.breadcrumbs', { returnObjects: true });
  const hero = t('practiceAreas.hero', { returnObjects: true });
  const practiceAreas = t('practiceAreas.allPracticeAreas.items', { returnObjects: true });
  const otherWays = t('practiceAreas.otherWays', { returnObjects: true });
  const corporateNegligence = t('practiceAreas.corporateNegligence', { returnObjects: true });
  const moreSection = t('practiceAreas.moreSection', { returnObjects: true });

  const heroConfig = hero && typeof hero === 'object' ? hero : {};
  const heroCards = Array.isArray(heroConfig.cards) ? heroConfig.cards : [];
  const practiceAreaList = Array.isArray(practiceAreas) ? practiceAreas : [];
  const otherWayCategories = otherWays && typeof otherWays === 'object' && Array.isArray(otherWays.categories)
    ? otherWays.categories
    : [];
  const corporateItems = corporateNegligence && typeof corporateNegligence === 'object' && Array.isArray(corporateNegligence.items)
    ? corporateNegligence.items
    : [];

  const [activeCorporateIndex, setActiveCorporateIndex] = useState(0);

  const practiceAreaColumns = useMemo(() => {
    if (!practiceAreaList.length) {
      return [];
    }
    const columns = 3;
    const chunkSize = Math.ceil(practiceAreaList.length / columns);
    return Array.from({ length: columns }, (_, index) =>
      practiceAreaList.slice(index * chunkSize, (index + 1) * chunkSize),
    );
  }, [practiceAreaList]);

  const handleCorporateIndicator = (index) => {
    setActiveCorporateIndex(index);
  };

  const activeCorporateItem = corporateItems[activeCorporateIndex] || corporateItems[0];

  return (
    <div className="bg-white">
      <nav className="container mx-auto max-w-6xl px-4 pt-6 text-sm text-gray-500" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link to="/" className="hover:text-brand-primary">
              {breadcrumbs?.home ?? 'Home'}
            </Link>
          </li>
          <li aria-hidden="true" className="text-gray-400">
            /
          </li>
          <li className="text-gray-800 font-semibold">
            {breadcrumbs?.current ?? 'Practice Areas'}
          </li>
        </ol>
      </nav>

      <section className="px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <h1 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-gray-900 mb-6">
                {heroConfig.headline}
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
                {heroConfig.subheadline}
              </p>
            </div>

            <div className="lg:col-span-2 space-y-6">
              {heroCards.map((card, index) => (
                <div
                  key={`${card.title}-${index}`}
                  className="flex gap-4 rounded-2xl bg-brand-light/80 p-6 shadow-sm ring-1 ring-brand-light transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-primary shadow">
                    <HeroIcon type={card.icon} />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">{card.title}</h2>
                    <p className="mt-1 text-sm text-gray-600">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="container mx-auto max-w-6xl grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between gap-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                {otherWays?.title}
              </h2>
              {otherWays?.cta && (
                <button
                  type="button"
                  className="hidden rounded-full border border-brand-primary px-5 py-2 text-sm font-semibold text-brand-primary transition hover:bg-brand-primary hover:text-white md:inline-flex md:items-center md:justify-center"
                >
                  {otherWays.cta}
                  <svg className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L13.586 11H4a1 1 0 0 1 0-2h9.586l-3.293-3.293a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                  </svg>
                </button>
              )}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {otherWayCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className="group flex items-center justify-between rounded-xl bg-white p-5 text-left shadow-sm ring-1 ring-gray-200 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="text-base font-semibold text-gray-900">{category}</span>
                  <span className="ml-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-light text-brand-primary transition group-hover:bg-brand-primary group-hover:text-white">
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L13.586 11H4a1 1 0 0 1 0-2h9.586l-3.293-3.293a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                    </svg>
                  </span>
                </button>
              ))}
            </div>

            {otherWays?.cta && (
              <button
                type="button"
                className="mt-6 inline-flex items-center text-sm font-semibold text-brand-primary transition hover:text-brand-primaryDark md:hidden"
              >
                {otherWays.cta}
                <svg className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L13.586 11H4a1 1 0 0 1 0-2h9.586l-3.293-3.293a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                </svg>
              </button>
            )}
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-brand-primary to-brand-primaryDark p-8 text-white shadow-lg">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-xl font-semibold">
                {corporateNegligence?.title}
              </h3>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-wide">
                {String(activeCorporateIndex + 1).padStart(2, '0')}/{String(corporateItems.length || 1).padStart(2, '0')}
              </span>
            </div>

            <div className="mt-8">
              <div className="rounded-2xl bg-white/10 p-6">
                <p className="text-sm uppercase text-white/70">
                  {activeCorporateItem?.title}
                </p>
                <p className="mt-3 text-lg font-semibold">
                  {activeCorporateItem?.description}
                </p>
                {corporateNegligence?.cta && (
                  <button
                    type="button"
                    className="mt-6 inline-flex items-center rounded-full bg-brand-accent px-5 py-2 text-sm font-bold text-black transition hover:bg-brand-accentDark"
                  >
                    {corporateNegligence.cta}
                    <svg className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L13.586 11H4a1 1 0 0 1 0-2h9.586l-3.293-3.293a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                    </svg>
                  </button>
                )}
              </div>

              <div className="mt-6 flex items-center justify-center gap-3">
                {corporateItems.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleCorporateIndicator(index)}
                    className={`h-2.5 rounded-full transition ${
                      index === activeCorporateIndex ? 'w-8 bg-brand-accent' : 'w-2 bg-white/40 hover:bg-white/60'
                    }`}
                    aria-label={t('common.aria.goToSlide', { index: index + 1 })}
                    aria-pressed={index === activeCorporateIndex}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="container mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-3xl bg-brand-primary text-white">
            <div
              className="absolute inset-0 opacity-80 mix-blend-luminosity"
              style={{ backgroundImage: "url('/12.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-brand-primary/80" aria-hidden="true" />
            <div className="relative px-8 py-16 md:px-16 md:py-20">
              <h2 className="text-2xl md:text-4xl font-bold">{moreSection?.title}</h2>
              <p className="mt-4 max-w-2xl text-lg text-white/85">{moreSection?.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-light px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {t('practiceAreas.allPracticeAreas.title')}
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {practiceAreaColumns.map((column, columnIndex) => (
              <ul key={columnIndex} className="space-y-4">
                {column.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-primary flex-shrink-0" />
                    <span className="text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>

    
    </div>
  );
}


