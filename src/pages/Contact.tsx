import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useForm, ValidationError } from '@formspree/react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/styles.css';
import '../assets/css/contact.css';

const Contact: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm("mbdzkvkv");

  return (
    <>
      <Helmet>
        <title>{t('contact')} | FG Développement</title>
        <meta name="description" content="Contactez Florent GERARD pour vos besoins en développement web, maintenance de site ou solutions digitales sur mesure." />
      </Helmet>

      <Header />
      <section className="container">
        <div className="content">
          <h2 className="titre-liste">{t('contact_me')}</h2>
          
          {state.succeeded ? (
            <div className="status-message status-success" style={{ textAlign: 'center', padding: '20px', fontSize: '1.2rem' }}>
              <p>{t('contact_success')}</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{t('form_name')}</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder={t('form_placeholder_name')} 
                  required 
                />
                <ValidationError prefix="Nom" field="name" errors={state.errors} />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">{t('form_email')}</label>
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
                <label htmlFor="subject">{t('form_subject')}</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  placeholder={t('form_placeholder_subject')} 
                  required 
                />
                <ValidationError prefix="Sujet" field="subject" errors={state.errors} />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">{t('form_message')}</label>
                <textarea 
                  id="message" 
                  name="message" 
                  placeholder={t('form_placeholder_message')} 
                  required
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              
              <button type="submit" className="submit-button" disabled={state.submitting}>
                {state.submitting ? t('form_sending') : t('form_submit')}
              </button>
              
              {state.errors && (
                <div className="status-message status-error">
                  {t('form_error')}
                </div>
              )}
            </form>
          )}
        </div>
        <button className="back-button" onClick={() => navigate('/accueil')}>
          <i className="fa fa-solid fa-house fa-lg"></i>{t('accueil')}
        </button>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
