import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import profileImage from '../../assets/aziz-abid.jpeg';
import './Hero.css';

const Hero: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  
  const dynamicWords = [
    'Mobile Developer',
    'Full-Stack Developer', 
    'Flutter Expert',
    'Blockchain Developer',
    'iOS Developer',
    'Problem Solver'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % dynamicWords.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
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
        duration: 0.8
      }
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="electric-grid"></div>
        <div className="floating-shapes">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`floating-shape shape-${i + 1}`}
              animate={{
                y: [-20, 20, -20],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: i * 0.5
              }}
            />
          ))}
        </div>
      </div>

      <div className="container hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Image */}
          <motion.div
            className="hero-image"
            variants={itemVariants}
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="image-placeholder glass">
              <div className="image-ring ring-1"></div>
              <div className="image-ring ring-2"></div>
              <div className="profile-img">
                <img 
                  src={profileImage} 
                  alt="Mohamed Aziz Abidi" 
                  className="profile-photo"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <span className="gradient-text profile-fallback" style={{ display: 'none' }}>MA</span>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="hero-text">
            <motion.p 
              className="hero-greeting"
              variants={itemVariants}
            >
              Hello, I'm 👋
            </motion.p>

            <motion.h1 
              className="hero-name"
              variants={itemVariants}
            >
              <span className="gradient-text">Mohamed Aziz Abidi</span>
            </motion.h1>

            <motion.div 
              className="hero-title-container"
              variants={itemVariants}
            >
              <h2 className="hero-title">
                <span className="static-text">I'm a </span>
                <motion.span
                  key={currentWordIndex}
                  className="dynamic-text gradient-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {dynamicWords[currentWordIndex]}
                </motion.span>
              </h2>
            </motion.div>

            <motion.p 
              className="hero-description"
              variants={itemVariants}
            >
              Aspiring mobile and full-stack developer with hands-on experience in Flutter, blockchain, and backend systems. 
              Eager to contribute to impactful digital solutions in agile, international environments.
            </motion.p>

            <motion.div 
              className="hero-stats"
              variants={itemVariants}
            >
              <div className="stat">
                <span className="stat-number gradient-text">24</span>
                <span className="stat-label">Years Old</span>
              </div>
              <div className="stat">
                <span className="stat-number gradient-text">5+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat">
                <span className="stat-number gradient-text">3</span>
                <span className="stat-label">Internships</span>
              </div>
            </motion.div>

            <motion.div 
              className="hero-actions"
              variants={itemVariants}
            >
              <motion.a
                href="#contact"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="btn-icon">📧</span>
                Get In Touch
              </motion.a>

              <motion.a
                href="#"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                download="Mohamed_Aziz_Abidi_CV.pdf"
              >
                <span className="btn-icon">📄</span>
                Download CV
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;