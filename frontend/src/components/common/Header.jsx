import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const isSpanish = i18n.language.startsWith('es');

  useEffect(() => {
    document.documentElement.setAttribute('lang', i18n.language);
  }, [i18n.language]);

  const navLinkBase =
    'text-white text-sm font-semibold transition-colors duration-200 hover:text-[#f5d000] flex items-center';

  const toggleLanguage = () => {
    const nextLanguage = isSpanish ? 'en' : 'es';
    i18n.changeLanguage(nextLanguage);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0a2043] text-white">
      <div className="container mx-auto flex items-center justify-between gap-6 px-4 py-3">
        {/* Logo */}
        <a href="/">
        <div className="flex items-center">
          <div className="flex flex-col items-center md:items-start">
            <div className="inline-flex items-center border-2 border-black bg-black px-4 py-1.5">
              <span className="text-[#f5d000] text-lg font-black leading-none tracking-tight">
                {t('header.logo')}
              </span>
            </div>
            <p className="mt-1 hidden text-xs font-semibold tracking-wide text-white md:block">
              {t('header.tagline.prefix')}{' '}
              <span className="text-[#f5d000]">{t('header.tagline.highlight')}</span>{' '}
              {t('header.tagline.suffix')}
            </p>
          </div>
        </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden flex-1 items-center justify-end lg:flex">
          <nav className="flex items-center gap-6">
            <Link to="/locations" className={navLinkBase}>
              {t('header.nav.locations')}
            </Link>
            <Link to="/practice-areas" className={navLinkBase}>
              {t('header.nav.practiceAreas')}
              <span className="ml-1 text-base">›</span>
            </Link>
            <a href="#" className={navLinkBase}>
              {t('header.nav.attorneys')}
            </a>
            <a href="#" className={navLinkBase}>
              {t('header.nav.about')}
              <span className="ml-1 text-base">›</span>
            </a>
            <a href="#" className={navLinkBase}>
              {t('header.nav.results')}
            </a>
            <a href="#" className={navLinkBase}>
              {t('header.nav.contact')}
            </a>
            <button className="ml-4 text-white transition-colors duration-200 hover:text-[#f5d000]">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <div className="ml-6 text-xl font-black tracking-tight text-[#f5d000]">
              {t('common.phone')}
            </div>
            <button
              type="button"
              onClick={toggleLanguage}
              className="ml-4 rounded-full border border-white/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-white/10"
            >
              {isSpanish ? t('common.language.toEnglish') : t('common.language.toSpanish')}
            </button>
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white transition-colors duration-200 hover:text-[#f5d000]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-white/20 bg-[#0a2043] px-4 pb-6">
          <nav className="flex flex-col space-y-4 pt-4">
            <Link
              to="/locations"
              className="text-white text-sm font-semibold uppercase tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('header.nav.locations')}
            </Link>
            <Link
              to="/practice-areas"
              className="text-white text-sm font-semibold uppercase tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('header.nav.practiceAreas')}
            </Link>
            <a href="#" className="text-white text-sm font-semibold uppercase tracking-wide">
              {t('header.nav.attorneys')}
            </a>
            <a href="#" className="text-white text-sm font-semibold uppercase tracking-wide">
              {t('header.nav.about')}
            </a>
            <a href="#" className="text-white text-sm font-semibold uppercase tracking-wide">
              {t('header.nav.results')}
            </a>
            <a href="#" className="text-white text-sm font-semibold uppercase tracking-wide">
              {t('header.nav.contact')}
            </a>
            <div className="pt-2 text-lg font-black text-[#f5d000]">{t('common.phone')}</div>
            <button
              type="button"
              onClick={toggleLanguage}
              className="w-max rounded-full border border-white/40 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-white/10"
            >
              {isSpanish ? t('common.language.toEnglish') : t('common.language.toSpanish')}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

