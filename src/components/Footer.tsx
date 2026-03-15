import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../assets/css/styles.css';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <img 
        className="logo-footer" 
        src="/src/assets/img/New_Logo_FG_DEV_no_background_blanc.png" 
        alt="logo de la société" 
        title={t('copyright', { year: currentYear })}
      />
      <p className="copyright">{t('copyright', { year: currentYear })}</p>
      
      <Link className="contact" to="/contact">{t('footer_contact')}</Link>
      
      <Link className="about-link" to="/about">{t('footer_about')}</Link>
    </footer>
  );
};

export default Footer;
