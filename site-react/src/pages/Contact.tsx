import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useForm, ValidationError } from '@formspree/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/styles.css';
import '../assets/css/contact.css';

const Contact: React.FC = () => {
  const navigate = useNavigate();
  const [state, handleSubmit] = useForm("mbdzkvkv");

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
          
          {state.succeeded ? (
            <div className="status-message status-success" style={{ textAlign: 'center', padding: '20px', fontSize: '1.2rem' }}>
              <p>Merci ! Votre message a bien été envoyé. Je reviendrai vers vous très bientôt.</p>
              <p style={{ fontSize: '1rem', marginTop: '10px', opacity: 0.9 }}>Thank you! Your message has been sent successfully. I will get back to you very soon.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nom / Entreprise (Name)</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Votre nom / Your name" 
                  required 
                />
                <ValidationError prefix="Nom" field="name" errors={state.errors} />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="votre@email.com" 
                  required 
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Sujet (Subject)</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  placeholder="Sujet de votre message / Subject" 
                  required 
                />
                <ValidationError prefix="Sujet" field="subject" errors={state.errors} />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  placeholder="Votre message ici... / Your message..." 
                  required
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              
              <button type="submit" className="submit-button" disabled={state.submitting}>
                {state.submitting ? 'Envoi en cours... / Sending...' : 'Envoyer le message / Send message'}
              </button>
              
              {state.errors && (
                <div className="status-message status-error">
                  Une erreur est survenue lors de l'envoi. / An error occurred while sending.
                </div>
              )}
            </form>
          )}
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
