import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/styles.css';
import '../assets/css/404.css';

const NotFound: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>{t('not_found_title')} | FG Développement</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Header />
      <section className="container">
        <div className="content not-found-container">
          
          <div className="animated-404">
            <i className="fa-solid fa-plug-circle-xmark floating-icon"></i>
            <h1 className="not-found-code">404</h1>
          </div>
          
          <h2 className="not-found-subtitle">{t('not_found_subtitle')}</h2>
          <p className="not-found-text">
            {t('not_found_text')}
          </p>
          
          <button className="back-button not-found-button" onClick={() => navigate('/accueil')}>
            <i className="fa fa-solid fa-house fa-lg"></i> {t('back_home')}
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default NotFound;
