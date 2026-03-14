import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/about.css';

const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <section className="container">
        <div className="content">
          <div className="titre-about">
            <img className="fg-img" src="/src/assets/img/fg-img.jpg" alt="photo du créateur du site" />
            <h1>HISTORIQUE</h1>
          </div>
          <p>Bonjour. Je me nomme <strong className="strong"> Florent GERARD </strong> et j'ai créé ce site afin de promouvoir mes créations et vous faire partager ma passion pour le développement web.</p>
        </div>
        <button className="back-button" onClick={() => navigate(-1)}>
          <i className="fa fa-solid fa-house fa-lg"></i>&ensp;&ensp;&ensp;accueil
        </button>
      </section>
      <Footer />
    </>
  );
};

export default About;
