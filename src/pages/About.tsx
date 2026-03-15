import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation, Trans } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/styles.css'; 
import '../assets/css/about.css';   

const About: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    document.body.classList.add('about-page');
    return () => {
      document.body.classList.remove('about-page');
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>{t('about')} | FG Développement</title>
        <meta name="description" content="Découvrez le parcours de Florent GERARD, expert en développement web et fondateur de FG Développement." />
      </Helmet>

      <Header />
      <section className="container">
        <div className="content">
          <div className="titre-about">
            <img className="fg-img" src="/assets/img/fg-img.jpg" alt="photo de Florent GERARD" />
            <h1 style={{ color: '#fcfcfc' }}>{t('history')}</h1>
          </div>
          <p>
            <Trans i18nKey="about_intro">
              Bonjour. Je me nomme <strong className="strong"> Florent GERARD </strong> et j'ai créé ce site afin de promouvoir mes créations et vous faire partager ma passion pour le développement web.
            </Trans>
          </p>
        </div>
        <button className="back-button" onClick={() => navigate(-1)}>
          <i className="fa fa-solid fa-house fa-lg"></i>{t('accueil')}
        </button>
      </section>
      <Footer />
    </>
  );
};

export default About;
