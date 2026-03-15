import React from 'react';
import { useTranslation } from 'react-i18next';
import '../assets/css/styles.css';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header>
      <div className="head">
        <img 
          className="logo" 
          src="/assets/img/New_Logo_FG_DEV_no_background.png" 
          alt="logo de la société" 
          title="© FG Développement Tous droits réservés" 
        />
        <h1 className="titre">{t('header_title')}</h1>
        <div className="language-selector">
          <button 
            onClick={() => changeLanguage('fr')} 
            className={i18n.language === 'fr' ? 'active' : ''}
            title="Français"
          >
            <img src="https://flagcdn.com/w40/fr.png" alt="Français" width="30" />
          </button>
          <button 
            onClick={() => changeLanguage('en')} 
            className={i18n.language === 'en' ? 'active' : ''}
            title="English"
          >
            <img src="https://flagcdn.com/w40/gb.png" alt="English" width="30" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
