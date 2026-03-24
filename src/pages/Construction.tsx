import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/styles.css';
import '../assets/css/construction.css';

const Construction: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('under_construction')} | FG Développement</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Header />
      <section className="container">
        <div className="content construction-page-container">
          
          {/* Animation des engrenages */}
          <div className="gears-container">
            <i className="fa-solid fa-gear gear-large"></i>
            <i className="fa-solid fa-gear gear-small"></i>
          </div>
          
          <h1 className="titre-liste">{t('under_construction')}</h1>
          <h2 className="construction-subtitle">{t('under_construction_subtitle')}</h2>
          
          <p className="construction-text">
            {t('under_construction_text')}
          </p>

          <div className="actions-buttons">
            <button className="back-button" onClick={() => navigate('/accueil')} style={{marginTop: 0}}>
              <i className="fa fa-solid fa-house fa-lg"></i> {t('accueil')}
            </button>
            <button className="contact-button" onClick={() => navigate('/contact')}>
              <i className="fa-solid fa-envelope fa-lg"></i> {t('contact')}
            </button>
          </div>
          
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Construction;
