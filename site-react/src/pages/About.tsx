import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/styles.css'; 
import '../assets/css/about.css';   

const About: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('about-page');
    return () => {
      document.body.classList.remove('about-page');
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>À propos | FG Développement - Florent GERARD</title>
        <meta name="description" content="Découvrez le parcours de Florent GERARD, expert en développement web et fondateur de FG Développement." />
      </Helmet>

      <Header />
      <section className="container">
        <div className="content">
          <div className="titre-about">
            <img className="fg-img" src="/src/assets/img/fg-img.jpg" alt="photo de Florent GERARD" />
            <h1 style={{ color: '#fcfcfc' }}>HISTORIQUE</h1>
          </div>
          <p>Bonjour. Je me nomme <strong className="strong"> Florent GERARD </strong> et j'ai créé ce site afin de promouvoir mes créations et vous faire partager ma passion pour le développement web.</p>
        </div>
        <button className="back-button" onClick={() => navigate(-1)}>
          <i className="fa fa-solid fa-house fa-lg"></i>accueil
        </button>
      </section>
      <Footer />
    </>
  );
};

export default About;
