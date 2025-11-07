import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSubmission } from '../../hooks/useSubmission';

export default function FeeFreeFormSection() {
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
      // handled by hook
    }
  };

  const caseTypes = t('feeFree.caseTypes', { returnObjects: true });

  return (
    <section className="bg-brand-primary text-white py-12 md:py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="flex flex-col">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {t('feeFreeForm.title')}
            </h2>
            <p className="text-lg md:text-xl text-gray-200">
              {t('feeFreeForm.description')}
            </p>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
              {t('feeFreeForm.subtitle')}
            </h3>
            <p className="text-gray-600 mb-6">
              {t('feeFreeForm.intro')}
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* First Name and Last Name */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="firstName"
                  placeholder={t('common.form.firstName')}
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-accent"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder={t('common.form.lastName')}
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-accent"
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-accent"
                  required
                />
                <input
                  type="text"
                  name="zipCode"
                  placeholder={t('common.form.zip')}
                  value={formData.zipCode}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-accent"
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
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-accent"
                required
              />
              
              {/* Case Type Dropdown */}
              <select
                name="caseType"
                value={formData.caseType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-accent"
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
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-accent resize-none"
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
                <label htmlFor="consent" className="text-sm text-gray-700">
                  {t('common.form.consent')}
                </label>
              </div>
              
              {/* Terms & Privacy */}
              <p className="text-xs text-gray-500">
                {t('common.form.terms')}
              </p>
              
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-brand-accent text-black font-bold py-4 rounded-lg transition-colors hover:bg-brand-accentDark text-lg disabled:cursor-not-allowed disabled:opacity-70"
                disabled={status.state === 'loading'}
              >
                {status.state === 'loading' ? t('common.buttons.submitting') : t('feeFreeForm.submit')}
              </button>
              
              <div className="min-h-[1.5rem] text-sm" aria-live="polite">
                {status.state === 'success' && (
                  <div className="space-y-1 text-green-700">
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
                  <p className="text-red-600">
                    {status.message || t('common.messages.submissionError')}
                  </p>
                )}
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

