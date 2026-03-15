import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import '../assets/css/styles.css';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>404 - Page non trouvée | FG Développement</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <section className="construction-container" style={{ textAlign: 'center', padding: '50px' }}>
        <h1 style={{ fontSize: '4rem', color: '#333' }}>404</h1>
        <h2 className="h1-construction">Oups ! Cette page n'existe pas.</h2>
        <p className="p-construction">Il semble que vous vous soyez un peu perdu.</p>
        <p className="p-construction" style={{ fontStyle: 'italic' }}>Oops! This page does not exist.</p>
        
        <button className="back-button" onClick={() => navigate('/accueil')} style={{ marginTop: '30px' }}>
          <i className="fa fa-solid fa-house fa-lg"></i> Retour à l'accueil
        </button>
      </section>
    </>
  );
};

export default NotFound;
