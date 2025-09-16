import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Contact.css';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

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
              <span className="title-text">Get In Touch</span>
            </h2>
            <div className="title-underline"></div>
            <p className="contact-description">
              Ready to bring your ideas to life? Let's discuss how we can work together 
              to create something amazing.
            </p>
          </motion.div>

          <div className="contact-grid">
            <motion.div className="contact-info" variants={itemVariants}>
              <h3 className="info-title">Let's Connect</h3>
              <p className="info-text">
                I'm always interested in new opportunities and challenging projects. 
                Whether you have a question or just want to say hello, feel free to reach out!
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
                    <span className="method-label">Email</span>
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
                    <span className="method-label">Phone</span>
                    <span className="method-value">+216 93 08 82 85</span>
                  </div>
                </motion.a>

                <motion.a 
                  href="https://linkedin.com/in/med aziz abidi"
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
                    <span className="method-label">LinkedIn</span>
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
                    <span className="method-label">GitHub</span>
                    <span className="method-value">MedAzizAbidii</span>
                  </div>
                </motion.a>
              </div>
            </motion.div>

            <motion.form className="contact-form" onSubmit={handleSubmit} variants={itemVariants}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
                <div className="input-glow"></div>
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
                <div className="input-glow"></div>
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="form-textarea"
                  rows={5}
                ></textarea>
                <div className="input-glow"></div>
              </div>

              <motion.button
                type="submit"
                className="submit-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="btn-text">Send Message</span>
                <div className="btn-glow"></div>
              </motion.button>
            </motion.form>
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