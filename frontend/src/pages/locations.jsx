import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import FeeFreeFormSection from '../components/home/FeeFreeFormSection';

function LocationSearch() {
  const { t } = useTranslation();
  const hero = t('locations.hero', { returnObjects: true });
  const localOffice = hero?.localOffice;

  return (
    <section className="bg-brand-light px-4 pb-12 pt-8 md:pt-12">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="text-sm text-gray-500 mb-2 font-semibold uppercase tracking-wide">
              {t('locations.hero.title')}
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:gap-4">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder={hero?.searchPlaceholder}
                  className="w-full rounded-full border border-transparent bg-white px-6 py-3 text-base shadow-md focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/50"
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-brand-accent px-5 py-2 text-sm font-semibold text-black shadow hover:bg-brand-accentDark transition"
                >
                  {hero?.searchButton}
                </button>
              </div>
              <button
                type="button"
                className="mt-4 inline-flex items-center text-sm font-semibold text-brand-primary transition hover:text-brand-primaryDark md:mt-0"
              >
                {hero?.viewAll}
                <svg className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L13.586 11H4a1 1 0 0 1 0-2h9.586l-3.293-3.293a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-gray-100">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-primary">
              {hero?.localOfficeLabel}
            </p>
            <h3 className="mt-3 text-xl font-bold text-gray-900">
              {localOffice?.name}
            </h3>
            <div className="mt-3 space-y-1 text-sm text-gray-600">
              {Array.isArray(localOffice?.addressLines) &&
                localOffice.addressLines.map((line) => <p key={line}>{line}</p>)}
            </div>
            <div className="mt-4 flex items-center gap-3 text-brand-primary">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <a
                href={`tel:${localOffice?.phone?.replace(/[^0-9+]/g, '') ?? ''}`}
                className="text-sm font-semibold hover:underline"
              >
                {localOffice?.phone}
              </a>
            </div>
            <button
              type="button"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-brand-accent px-6 py-3 text-sm font-bold text-black transition hover:bg-brand-accentDark"
            >
              {localOffice?.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function RemoteHelp() {
  const { t } = useTranslation();
  const remoteHelp = t('locations.remoteHelp', { returnObjects: true });
  const features = Array.isArray(remoteHelp?.features) ? remoteHelp.features : [];

  return (
    <section className="bg-white px-4 py-12">
      <div className="container mx-auto max-w-6xl rounded-3xl bg-gray-50 px-6 py-8 shadow-sm ring-1 ring-gray-100">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{remoteHelp?.title}</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow ring-1 ring-gray-100">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-primary text-white">
                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <p className="text-sm font-semibold text-gray-800">{feature}</p>
                </div>
              ))}
            </div>
          </div>
          <button
            type="button"
            className="inline-flex items-center rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-primaryDark"
          >
            {remoteHelp?.cta}
            <svg className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L13.586 11H4a1 1 0 0 1 0-2h9.586l-3.293-3.293a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

function Coverage() {
  const { t } = useTranslation();
  const coverage = t('locations.coverage', { returnObjects: true });

  return (
    <section className="px-4 py-16">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              {coverage?.title}
            </h2>
            <p className="mt-6 text-base text-gray-600">
              {coverage?.description}
            </p>
          </div>
          <div className="relative overflow-hidden rounded-3xl bg-brand-light shadow-lg">
            <img
              src="/usa-pin-map.svg"
              alt={coverage?.mapAlt}
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function StateList() {
  const { t } = useTranslation();
  const statesData = t('locations.states.items', { returnObjects: true });
  const statesTitle = t('locations.states.title');

  const columns = useMemo(() => {
    if (!Array.isArray(statesData) || !statesData.length) {
      return [];
    }
    const columnCount = 3;
    const perColumn = Math.ceil(statesData.length / columnCount);
    return Array.from({ length: columnCount }, (_, columnIndex) =>
      statesData.slice(columnIndex * perColumn, (columnIndex + 1) * perColumn),
    );
  }, [statesData]);

  return (
    <section className="bg-white px-4 pb-16">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          {statesTitle}
        </h2>
        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-8">
              {column.map((stateInfo) => (
                <div key={stateInfo.state}>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {stateInfo.state}
                  </h3>
                  <ul className="mt-2 space-y-1 text-sm text-gray-600">
                    {stateInfo.cities.map((city) => (
                      <li key={city}>{city}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Locations() {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      <nav className="container mx-auto max-w-6xl px-4 pt-6 text-sm text-gray-500" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link to="/" className="hover:text-brand-primary">
              {t('locations.breadcrumbs.home')}
            </Link>
          </li>
          <li aria-hidden="true" className="text-gray-400">
            /
          </li>
          <li className="text-gray-800 font-semibold">
            {t('locations.breadcrumbs.current')}
          </li>
        </ol>
      </nav>

      <LocationSearch />
      <RemoteHelp />
      <Coverage />
      <StateList />
      <FeeFreeFormSection />
    </div>
  );
}


