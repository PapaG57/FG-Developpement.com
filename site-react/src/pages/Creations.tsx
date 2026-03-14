import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/styles.css';

const Creations: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <section className="container">
        <div className="content">
          <h2 className="titre-liste">affiches promotionnelles</h2><br />
          <div className="all-cards">
            <div className="card">
              <a href="/src/assets/files/Affiche-Promo-Nöel-2023-MK-Services.pdf" title="cliquer ici" target="_blank" rel="noopener noreferrer">affiche 1</a>
            </div>
            <div className="card">
              <a href="/src/assets/files/Affiche-Promo-Nöel-2023-MK-Services-p2.pdf" title="cliquer ici" target="_blank" rel="noopener noreferrer">affiche 2</a>
            </div>
            <div className="text-card">
              <p>Ces affiches ont été créées en 2023 pour la société MK Services située à Bangui, capitale de la Centrafrique</p>
            </div>
          </div>
        </div>
        <button className="back-button" onClick={() => navigate(-1)}>
          <i className="fa fa-solid fa-house fa-lg"></i>&ensp;&ensp;&ensp;accueil
        </button>
      </section>
      <Footer />
    </>
  );
};

export default Creations;
