import React from 'react';
import { useTranslation } from 'react-i18next';

export default function MobileCallButton() {
  const { t } = useTranslation();
  const phoneNumber = t('common.phone');
  const phoneLink = `tel:${phoneNumber.replace(/[^\d]/g, '')}`;

  return (
    <a
      href={phoneLink}
      className="md:hidden fixed bottom-0 left-0 right-0 bg-[#f5d000] text-black font-bold py-4 px-6 text-center text-lg z-50 shadow-[0_-4px_12px_rgba(0,0,0,0.15)] hover:bg-[#e6c500] transition-colors"
    >
      Call Us Now: {phoneNumber}
    </a>
  );
}

