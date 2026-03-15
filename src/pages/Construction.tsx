import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import '../assets/css/styles.css';
import '../assets/css/construction.css';

const Construction: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    document.body.classList.add('body-construction-page');
    return () => {
      document.body.classList.remove('body-construction-page');
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>{t('under_construction')} | FG Développement</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <section className="construction-container">
        <div className="split left">
          <div className="logo-overlay">
            <img className="sizeLogoFGDEV" src="/assets/img/New_Logo_FG_DEV_no_background.png" alt="logo de la société" />
          </div>
        </div>
        <div className="split right">
          <h1 className="h1-construction">{t('under_construction')}</h1>
          <img className="img-construction-right" src="/assets/img/site-construction-3.gif" alt="travailleur au repos" />
          <p className="p-construction">{t('patience')}</p>
          <div className="joindre-construction">
            <p>{t('questions')}</p>
            <a className="mailto" href="mailto:florentgerard@fgdeveloppement.com">florentgerard@fgdeveloppement.com</a>
          </div>
          
          <button className="back-button" onClick={() => navigate('/accueil')} style={{marginTop: '30px'}}>
            <i className="fa fa-solid fa-house fa-lg"></i>{t('accueil')}
          </button>
        </div>
      </section>
    </>
  );
};

export default Construction;
