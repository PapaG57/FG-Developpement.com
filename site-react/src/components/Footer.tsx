import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/styles.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <img 
        className="logo-footer" 
        src="/src/assets/img/New_Logo_FG_DEV_no_background_blanc.png" 
        alt="logo de la société" 
        title="© FG Développement Tous droits réservés" 
      />
      <h3>© <span>{currentYear}</span> FG Développement - Tous droits réservés</h3>
      <a className="contact" href="mailto:florentgerard@fgdeveloppement.com">ME CONTACTER</a>
      <Link className="about" to="/about">à propos</Link>
    </footer>
  );
};

export default Footer;
