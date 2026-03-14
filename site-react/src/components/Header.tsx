import React from 'react';
import '../assets/css/styles.css';

const Header: React.FC = () => {
  return (
    <header>
      <div className="head">
        <img 
          className="logo" 
          src="/src/assets/img/New_Logo_FG_DEV_no_background.png" 
          alt="logo de la société" 
          title="© FG Développement Tous droits réservés" 
        />
        <h1 className="titre">Florent GERARD - Développement Web</h1>
      </div>
    </header>
  );
};

export default Header;
