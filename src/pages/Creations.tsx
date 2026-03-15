import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/styles.css';

const Creations: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('promo_posters_title')} | FG Développement</title>
        <meta name="description" content="Portfolio de créations d'affiches publicitaires et supports de communication réalisés par Florent GERARD." />
      </Helmet>

      <Header />
      <section className="container">
        <div className="content">
          <h2 className="titre-liste">{t('promo_posters_title')}</h2><br />
          <div className="all-cards">
            <div className="card">
              <a href="/src/assets/files/Affiche-Promo-Nöel-2023-MK-Services.pdf" title={t('click_here')} target="_blank" rel="noopener noreferrer">{t('poster_1')}</a>
            </div>
            <div className="card">
              <a href="/src/assets/files/Affiche-Promo-Nöel-2023-MK-Services-p2.pdf" title={t('click_here')} target="_blank" rel="noopener noreferrer">{t('poster_2')}</a>
            </div>
            <div className="text-card">
              <p>{t('poster_desc')}</p>
            </div>
          </div>
        </div>
        <button className="back-button" onClick={() => navigate(-1)}>
          <i className="fa fa-solid fa-house fa-lg"></i>{t('accueil')}
        </button>
      </section>
      <Footer />
    </>
  );
};

export default Creations;
