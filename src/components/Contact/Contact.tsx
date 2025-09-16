import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import './Contact.css';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <motion.div
          ref={ref}
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">
              <span className="title-number">05.</span>
              <span className="title-text">{t('contact.title')}</span>
            </h2>
            <div className="title-underline"></div>
            <p className="contact-description">
              {t('contact.description')}
            </p>
          </motion.div>

          <div className="contact-content-grid">
            <motion.div className="contact-info-section" variants={itemVariants}>
              <h3 className="info-title">{t('contact.subtitle')}</h3>
              <p className="info-description">
                {t('contact.description')}
              </p>
              
              <div className="contact-methods">
                <motion.a 
                  href="mailto:azizabidilol7@gmail.com"
                  className="contact-method"
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="method-icon email-icon">
                    <div className="icon-glow"></div>
                  </div>
                  <div className="method-info">
                    <span className="method-label">{t('contact.social.email')}</span>
                    <span className="method-value">azizabidilol7@gmail.com</span>
                  </div>
                </motion.a>

                <motion.a 
                  href="tel:+21693088285"
                  className="contact-method"
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="method-icon phone-icon">
                    <div className="icon-glow"></div>
                  </div>
                  <div className="method-info">
                    <span className="method-label">{t('contact.info.phone')}</span>
                    <span className="method-value">+216 93 08 82 85</span>
                  </div>
                </motion.a>

                <motion.a 
                  href="https://linkedin.com/in/med-aziz-abidi"
                  className="contact-method"
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="method-icon linkedin-icon">
                    <div className="icon-glow"></div>
                  </div>
                  <div className="method-info">
                    <span className="method-label">{t('contact.social.linkedin')}</span>
                    <span className="method-value">Mohamed Aziz Abidi</span>
                  </div>
                </motion.a>

                <motion.a 
                  href="https://github.com/MedAzizAbidii"
                  className="contact-method"
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="method-icon github-icon">
                    <div className="icon-glow"></div>
                  </div>
                  <div className="method-info">
                    <span className="method-label">{t('contact.social.github')}</span>
                    <span className="method-value">MedAzizAbidii</span>
                  </div>
                </motion.a>

                <motion.div 
                  className="contact-method location-method"
                >
                  <div className="method-icon location-icon">
                    <div className="icon-glow"></div>
                  </div>
                  <div className="method-info">
                    <span className="method-label">{t('contact.info.location')}</span>
                    <span className="method-value">{t('contact.info.location')}</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer 
        className="footer"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.8 }}
      >
        <div className="footer-content">
          <p>&copy; 2024 Software Engineer Portfolio. Built with React & TypeScript.</p>
        </div>
      </motion.footer>
    </section>
  );
};

export default Contact;