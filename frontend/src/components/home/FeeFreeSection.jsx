import React, { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useSubmission } from '../../hooks/useSubmission';

export default function FeeFreeSection() {
  const { t, i18n } = useTranslation();
  const { submit, status, resetStatus } = useSubmission();

  const initialFormState = {
    firstName: '',
    lastName: '',
    phone: '',
    zipCode: '',
    email: '',
    caseType: '',
    description: '',
    consent: false
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (status.state !== 'idle') {
      resetStatus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submit({
        ...formData,
        locale: i18n.language,
      });
      setFormData(initialFormState);
    } catch {
      // status handled in hook
    }
  };

  const caseTypes = t('feeFree.caseTypes', { returnObjects: true });

  return (
    <section className="bg-[#0a2043] px-4 py-12 text-white md:py-16">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,500px)] lg:items-start lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col">
            {/* Header Text */}
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-[56px] lg:leading-[1.05]">
              {t('feeFree.heading')}
            </h1>

            {/* Call to Action */}
            <p className="mb-8 text-lg font-semibold md:text-xl">
              <Trans
                i18nKey="feeFree.subheading"
                components={[<span className="underline font-semibold" />]}
              />
            </p>

            {/* Video Player */}
            <div className="relative mb-10 w-full max-w-lg md:max-w-xl">
              <div className="relative aspect-video overflow-hidden rounded-2xl bg-[#102a59] shadow-[0_20px_45px_rgba(0,0,0,0.35)]">
                {/* Video Thumbnail Placeholder */}
                <div className="absolute inset-0">
                  <img src="16.webp" alt={t('feeFree.videoAlt')} className="h-full w-full object-cover" />
                </div>
                {/* Play Button */}
                <button className="group absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f5d000] shadow-[0_12px_25px_rgba(0,0,0,0.4)] transition-transform group-hover:scale-110 md:h-20 md:w-20">
                    <svg className="ml-1 h-8 w-8 text-black md:h-10 md:w-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>

            {/* As seen on */}
            <div className="flex flex-col gap-3 md:flex-row md:items-center">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80 md:text-xs lg:text-sm">
                {t('feeFree.asSeenOn')}
              </span>
              <div className="flex flex-wrap items-center gap-5 text-sm font-semibold tracking-wide text-white/80 md:text-base">
                <span>ABC NEWS</span>
                <span>CNN</span>
                <span>USA TODAY</span>
                <span>FOX</span>
                <span>NBC NEWS</span>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="w-full max-w-md rounded-3xl border border-white/20  p-[32px] shadow-[0_20px_45px_rgba(0,0,0,0.35)] backdrop-blur">
            <h2 className="mb-6 text-2xl font-semibold md:text-3xl">
              {t('feeFree.formTitle')}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* First Name and Last Name */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="firstName"
                  placeholder={t('common.form.firstName')}
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-brand-accent"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder={t('common.form.lastName')}
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-brand-accent"
                  required
                />
              </div>

              {/* Phone Number and Zip Code */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="tel"
                  name="phone"
                  placeholder={t('common.form.phone')}
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-brand-accent"
                  required
                />
                <input
                  type="text"
                  name="zipCode"
                  placeholder={t('common.form.zip')}
                  value={formData.zipCode}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-brand-accent"
                  required
                />
              </div>

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder={t('common.form.email')}
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-brand-accent"
                required
              />

              {/* Case Type Dropdown */}
              <select
                name="caseType"
                value={formData.caseType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-brand-accent"
                required
              >
                <option value="">{t('common.form.caseTypePlaceholder')}</option>
                {caseTypes.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>

              {/* Description Textarea */}
              <textarea
                name="description"
                placeholder={t('common.form.description')}
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-brand-accent resize-none"
                required
              />

              {/* Consent Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="consent"
                  id="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-1 w-5 h-5 rounded border-gray-300 text-brand-primary focus:ring-brand-accent"
                  required
                />
                <label htmlFor="consent" className="text-sm">
                  {t('common.form.consent')}
                </label>
              </div>

              {/* Terms & Privacy */}
              <p className="text-xs text-white/70">
                {t('common.form.terms')}
              </p>

              {/* Submit Button */}
              <div className="space-y-3">
                <button
                  type="submit"
                  className="w-full bg-brand-accent text-black font-bold py-4 rounded-lg transition-colors hover:bg-brand-accentDark text-lg disabled:cursor-not-allowed disabled:opacity-70"
                  disabled={status.state === 'loading'}
                >
                  {status.state === 'loading' ? t('common.buttons.submitting') : t('feeFree.startButton')}
                </button>

                <div className="min-h-[1.5rem] text-sm" aria-live="polite">
                  {status.state === 'success' && (
                    <div className="space-y-1 text-green-100">
                      <p>{t('common.messages.submissionSuccess')}</p>
                      {status.location && (
                        <p>
                          {t('common.messages.locationGuess', {
                            city: status.location.city || '—',
                            region: status.location.region || '—',
                            country: status.location.country || '—',
                            source: status.location.source || 'lookup',
                          })}
                        </p>
                      )}
                    </div>
                  )}
                  {status.state === 'error' && (
                    <p className="text-red-200">
                      {status.message || t('common.messages.submissionError')}
                    </p>
                  )}
                </div>
              </div>

              {/* Copyright Notice */}
              <p className="mt-4 text-center text-xs text-white/60">
                {t('common.disclaimers.copyright')}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

