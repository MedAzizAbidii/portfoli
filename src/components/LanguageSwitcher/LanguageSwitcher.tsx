import React from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';
import './LanguageSwitcher.css';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="language-switcher"
      aria-label={`Switch to ${i18n.language === 'en' ? 'French' : 'English'}`}
    >
      <Languages size={18} />
      <span className="lang-text">
        {i18n.language === 'en' ? 'FR' : 'EN'}
      </span>
    </button>
  );
};

export default LanguageSwitcher;