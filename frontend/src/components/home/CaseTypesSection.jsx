import React from 'react';
import { useTranslation } from 'react-i18next';

const CHECK_ICON = (
  <svg className="h-4 w-4 text-[#0a2043]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function CaseTypesSection() {
  const { t } = useTranslation();
  const caseTypes = t('caseTypes.items', { returnObjects: true });

  return (
    <section className="bg-[#f6f7fb] px-4 py-14">
      <div className="mx-auto flex max-w-4xl flex-col overflow-hidden rounded-2xl border border-[#e2e7f2] bg-white shadow-[0_18px_45px_-25px_rgba(9,38,85,0.25)]">
        <header className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e2e7f2] px-6 py-5">
          <h3 className="text-lg font-semibold text-[#0f1b33] md:text-xl">{t('caseTypes.title')}</h3>
          <a
            href="/practice-areas"
            className="inline-flex items-center text-sm font-semibold uppercase tracking-wide text-[#0a2043] transition hover:text-[#f5d000]"
          >
            {t('common.buttons.viewAll')}
            <span className="ml-1 text-base">›</span>
          </a>
        </header>

        <div className="grid grid-cols-1 gap-x-6 gap-y-4 px-6 py-6 text-sm text-[#0f1b33] sm:grid-cols-2 lg:grid-cols-3">
          {caseTypes.map((caseType) => (
            <div key={caseType} className="flex items-start gap-2">
              <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#f0f3ff]">
                {CHECK_ICON}
              </span>
              <span className="font-semibold">{caseType}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

