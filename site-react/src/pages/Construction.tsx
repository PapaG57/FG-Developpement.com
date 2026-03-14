import React from 'react';
import '../assets/css/construction.css';

const Construction: React.FC = () => {
  return (
    <section className="body-construction">
      <div className="split left">
        <div className="centered">
          <img className="img-construction-left" src="/src/assets/img/developpeur-web.jpg" alt="image d'un homme en train de coder" />
        </div>
        <div className="logoFGDEV">
          <img className="sizeLogoFGDEV" src="/src/assets/img/New_Logo_FG_DEV_no_background.png" alt="logo de la société" title="© FG Développement Tous droits réservés" />
        </div>
      </div>
      <div className="split right">
        <div className="centered">
          <h1 className="h1-construction text-uppercase">page en construction</h1><br />
          <h1 className="h1-construction text-uppercase">page under construction</h1>
          <div><br /><br /><br />
            <img className="img-construction-right" src="/src/assets/img/site-construction-3.gif" alt="travailleur au repos buvant un café" />
          </div><br /><br />
          <p className="p-construction">Un peu de patience, j'ai bientôt fini ;-)</p><br />
          <p className="p-construction">A little patience, I'm almost done ;-)</p><br /><br />
          <div className="joindre-construction">
            <p>Si vous avez des questions, vous pouvez me joindre ici :</p>
            <p>If you have any questions, you can reach me here :</p>
            <a className="mailto" href="mailto:florentgerard@fgdeveloppement.com">florentgerard@fgdeveloppement.com</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Construction;
