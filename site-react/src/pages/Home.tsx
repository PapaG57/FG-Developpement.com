import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/index.css';

const Home: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const video = document.getElementById('myVideo') as HTMLVideoElement;
    if (video) {
      video.onended = () => {
        navigate('/accueil');
      };
    }
  }, [navigate]);

  return (
    <div className="home-container">
      {/* affichage de la vidéo */}
      <div>
        <video id="myVideo" autoPlay muted poster="/src/assets/img/vignette.jpg">
          <source src="/src/assets/video/intro_FGDEV.mp4" type="video/mp4" />
          <source src="/src/assets/video/intro_FGDEV.webm" type="video/webm" />
          <source src="/src/assets/video/intro_FGDEV.ogg" type="video/ogg" />
        </video>
      </div>

      {/* affichage du loading spinner */}
      <div id="spinner">
        <img className="spinner" src="/src/assets/img/spinner.gif" alt="Loading..." />
      </div>
    </div>
  );
};

export default Home;
