import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/styles.css';
import '../assets/css/contact.css';

const Contact: React.FC = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState<'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR'>('IDLE');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('LOADING');
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      const formId = 'florentgerard@fgdeveloppement.com';
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        setStatus('SUCCESS');
        form.reset();
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      setStatus('ERROR');
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact | FG Développement</title>
        <meta name="description" content="Contactez Florent GERARD pour vos besoins en développement web, maintenance de site ou solutions digitales sur mesure." />
      </Helmet>

      <Header />
      <section className="container">
        <div className="content">
          <h2 className="titre-liste">Contactez-moi</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nom / Entreprise</label>
              <input type="text" id="name" name="name" placeholder="Votre nom" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="_replyto" placeholder="votre@email.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Sujet</label>
              <input type="text" id="subject" name="subject" placeholder="Sujet de votre message" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Votre message ici..." required></textarea>
            </div>
            <button type="submit" className="submit-button" disabled={status === 'LOADING'}>
              {status === 'LOADING' ? 'Envoi en cours...' : 'Envoyer le message'}
            </button>
            {status === 'SUCCESS' && <div className="status-message status-success">Merci ! Message envoyé.</div>}
            {status === 'ERROR' && <div className="status-message status-error">Erreur lors de l'envoi.</div>}
          </form>
        </div>
        <button className="back-button" onClick={() => navigate('/accueil')}>
          <i className="fa fa-solid fa-house fa-lg"></i>accueil
        </button>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
