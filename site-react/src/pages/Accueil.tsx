import React from 'react';
import { Helmet } from 'react-helmet-async'; // SEO
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/styles.css';

const Accueil: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Accueil | FG Développement - Florent GERARD</title>
        <meta name="description" content="Découvrez les projets et créations web de Florent GERARD chez FG Développement." />
      </Helmet>
      
      <Header />
      <section className="container">
        <div className="content">
          <h2 className="titre-liste">mes créations</h2><br />
          <div className="all-cards">
            <div className="card">
              <a href="https://www.fgdeveloppement.com/portfolio/" title="cliquer ici" target="_blank" rel="noopener noreferrer">mon portfolio</a>
            </div>
            <div className="card">
              <a href="https://www.mamaesther.org/" title="cliquer ici" target="_blank" rel="noopener noreferrer">association "mama-esther"</a>
            </div>
            <div className="card">
              <a href="https://www.fgdeveloppement.com/mkservices/" title="cliquer ici" target="_blank" rel="noopener noreferrer">Sté MK SERVICES</a>
            </div>
            <div className="card">
              <a href="/construction" title="cliquer ici">Sté ENI</a>
            </div>
            <div className="card">
              <a href="/construction" title="cliquer ici">ONG AVUKA</a>
            </div>
            <div className="card">
              <a href="/creations" title="cliquer ici">créations d'affiches de promo</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Accueil;
