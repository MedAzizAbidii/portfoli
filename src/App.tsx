import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar/Navbar';
import ParticleBackground from './components/ParticleBackground/ParticleBackground';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experiences from './components/Experiences/Experiences';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher';
import './i18n/i18n';
import './App.css';

function App() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Simulate loading time for smooth entry
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experiences', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <AnimatePresence>
        {loading && (
          <motion.div
            className="loading-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="loading-content">
              <div className="loading-spinner"></div>
              <motion.p
                className="loading-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {t('common.loading')}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <>
          <ParticleBackground />
          <Navbar activeSection={activeSection} />
          <LanguageSwitcher />
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Hero />
            <About />
            <Experiences />
            <Projects />
            <Skills />
            <Contact />
          </motion.main>
        </>
      )}
    </div>
  );
}

export default App;
