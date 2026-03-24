import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import '../assets/css/intro.css';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const video = document.getElementById('myVideo') as HTMLVideoElement;
    
    if (video) {
      video.oncanplay = () => setIsLoading(false);
      
      video.onended = () => {
        setIsLoading(true); 
        setTimeout(() => {
          navigate('/accueil');
        }, 2500); // Durée augmentée à 2.5s pour une transition plus fluide
      };
      
      const timer = setTimeout(() => {
        if (isLoading) setIsLoading(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [navigate, isLoading]);

  return (
    <>
      <Helmet>
        <title>{t('header_title')}</title>
        <meta name="description" content="Bienvenue sur le site de FG Développement par Florent GERARD. Création de sites web professionnels sur mesure." />
      </Helmet>
      <div className="home-container">
        <video id="myVideo" autoPlay muted playsInline poster="/assets/img/vignette.jpg">
          <source src="/assets/video/intro_FGDEV.mp4" type="video/mp4" />
          <source src="/assets/video/intro_FGDEV.webm" type="video/webm" />
          <source src="/assets/video/intro_FGDEV.ogg" type="video/ogg" />
        </video>

        {isLoading && (
          <div className="spinner-overlay">
            <div className="spinner-container">
              <div className="loader"></div>
              <div className="loading-text">{t('home_init')}</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
