import React from 'react';
import { Helmet } from 'react-helmet-async'; // SEO
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/styles.css';

const Accueil: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('welcome')} | FG Développement</title>
        <meta name="description" content="Découvrez les projets et créations web de Florent GERARD chez FG Développement." />
      </Helmet>
      
      <Header />
      <section className="container">
        <div className="content">
          <h2 className="titre-liste">{t('my_creations')}</h2><br />
          <div className="all-cards">
            <div className="card">
              <a href="https://www.fgdeveloppement.com/portfolio/" title={t('click_here')} target="_blank" rel="noopener noreferrer">{t('portfolio')}</a>
            </div>
            <div className="card">
              <a href="https://www.mamaesther.org/" title={t('click_here')} target="_blank" rel="noopener noreferrer">{t('association')}</a>
            </div>
            <div className="card">
              <a href="https://www.fgdeveloppement.com/mkservices/" title={t('click_here')} target="_blank" rel="noopener noreferrer">{t('mkservices')}</a>
            </div>
            <div className="card">
              <a href="/construction" title={t('click_here')}>{t('eni')}</a>
            </div>
            <div className="card">
              <a href="/construction" title={t('click_here')}>{t('avuka')}</a>
            </div>
            <div className="card">
              <a href="/creations" title={t('click_here')}>{t('promo_posters')}</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Accueil;
