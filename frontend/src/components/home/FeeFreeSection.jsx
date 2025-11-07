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
    <section className="bg-brand-primary text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="flex flex-col">
            {/* Header Text */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t('feeFree.heading')}
            </h1>

            {/* Call to Action */}
            <p className="text-lg md:text-xl mb-6">
              <Trans
                i18nKey="feeFree.subheading"
                components={[<span className="underline font-semibold" />]}
              />
            </p>

            {/* Video Player */}
            <div className="relative mb-8 w-full max-w-lg">
              <div className="relative bg-gray-300 rounded-lg overflow-hidden aspect-video">
                {/* Video Thumbnail Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                  {/* <div className="text-gray-500 text-sm"><img src="" alt="" /></div> */}
                  <img src="16.webp" alt={t('feeFree.videoAlt')} />
                </div>
                {/* Play Button */}
                <button className="absolute inset-0 flex items-center justify-center group">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-accent rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>

            {/* As seen on */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <span className="text-sm md:text-base whitespace-nowrap">{t('feeFree.asSeenOn')}</span>
              <div className="flex flex-wrap items-center gap-4 md:gap-6">
                <span className="text-sm md:text-base font-semibold">ABC NEWS</span>
                <span className="text-sm md:text-base font-semibold">CNN</span>
                <span className="text-sm md:text-base font-semibold">USA TODAY</span>
                <span className="text-sm md:text-base font-semibold">FOX</span>
                <span className="text-sm md:text-base font-semibold">NBC NEWS</span>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="flex flex-col rounded-lg border border-white/30 bg-white/5 p-5 sm:p-6 backdrop-blur">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
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
              <p className="text-xs text-gray-300">
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
              <p className="text-xs text-gray-400 text-center mt-4">
                {t('common.disclaimers.copyright')}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

