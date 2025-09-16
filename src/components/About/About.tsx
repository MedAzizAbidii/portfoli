import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Mail, Phone, Calendar, Code, GraduationCap } from 'lucide-react';
import profileImage from '../../assets/aziz-abid.jpeg';
import './About.css';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] as any
      }
    }
  };

  return (
    <section className="about" id="about">
      <div className="about-container">
        <motion.div
          ref={ref}
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">
              <span className="title-number">01.</span>
              <span className="title-text">About Me</span>
            </h2>
            <div className="title-underline"></div>
          </motion.div>

          {/* Profile Section */}
          <div className="about-grid">
            <motion.div className="about-profile" variants={itemVariants}>
              <div className="profile-card hologram-card">
                <div className="card-glow"></div>
                <div className="profile-image-container">
                  <div className="profile-rings">
                    <div className="ring ring-1"></div>
                    <div className="ring ring-2"></div>
                  </div>
                  <img
                    src={profileImage}
                    alt="Mohamed Aziz Abidi"
                    className="profile-image"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="profile-fallback gradient-text" style={{ display: 'none' }}>
                    MA
                  </div>
                </div>
                <div className="profile-info">
                  <h3 className="gradient-text">Mohamed Aziz Abidi</h3>
                  <p className="profile-title">Mobile & Full-Stack Developer</p>
                  <div className="profile-details">
                    <div className="detail-item">
                      <MapPin size={16} />
                      <span>Soukra, Tunis, Tunisia</span>
                    </div>
                    <div className="detail-item">
                      <Calendar size={16} />
                      <span>24 years old</span>
                    </div>
                    <div className="detail-item">
                      <GraduationCap size={16} />
                      <span>5th year at ESPRIT</span>
                    </div>
                    <div className="detail-item">
                      <Mail size={16} />
                      <span>azizabidilol7@gmail.com</span>
                    </div>
                    <div className="detail-item">
                      <Phone size={16} />
                      <span>+216 93 08 82 85</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div className="about-description" variants={itemVariants}>
              <div className="description-card hologram-card">
                <div className="card-glow"></div>
                <div className="card-header">
                  <Code className="header-icon" />
                  <h3>Professional Profile</h3>
                </div>
                <div className="card-content">
                  <p className="description-text">
                    I'm a passionate <span className="highlight">Mobile and Full-Stack Developer</span> 
                    currently pursuing my B.Eng. in Mobile Computer Systems at ESPRIT. With hands-on 
                    experience in <span className="highlight">Flutter</span>, <span className="highlight">blockchain</span>, 
                    and <span className="highlight">backend systems</span>, I'm eager to contribute to 
                    impactful digital solutions.
                  </p>
                  
                  <p className="description-text">
                    My expertise spans across mobile development, web technologies, and emerging innovations. 
                    I bring proven teamwork, leadership, and communication skills, always staying 
                    <span className="highlight"> adaptable</span>, <span className="highlight">curious</span>, 
                    and <span className="highlight">results-driven</span> in my approach to technology.
                  </p>
                  
                  <div className="education-section">
                    <h4 className="gradient-text">Education</h4>
                    <div className="education-item">
                      <div className="education-degree">B.Eng. in Mobile Computer Systems</div>
                      <div className="education-school">ESPRIT - Private School of Engineering and Technology</div>
                      <div className="education-period">2021 - Present</div>
                    </div>
                    <div className="education-item">
                      <div className="education-degree">Computer Science Baccalaureate</div>
                      <div className="education-school">High School of SOKRA</div>
                      <div className="education-period">2017 - 2021</div>
                    </div>
                  </div>
                  
                  <div className="languages-section">
                    <h4 className="gradient-text">Languages</h4>
                    <div className="languages-grid">
                      <div className="language-item">
                        <span className="language-flag">🇹🇳</span>
                        <div className="language-info">
                          <span className="language-name">Arabic (Tunisian)</span>
                          <span className="language-level">Native</span>
                        </div>
                      </div>
                      <div className="language-item">
                        <span className="language-flag">🇫🇷</span>
                        <div className="language-info">
                          <span className="language-name">French</span>
                          <span className="language-level">B2 Level</span>
                        </div>
                      </div>
                      <div className="language-item">
                        <span className="language-flag">🇺🇸</span>
                        <div className="language-info">
                          <span className="language-name">English</span>
                          <span className="language-level">B2 Level</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Interests & Methodologies Section */}
          <motion.div className="interests-section" variants={itemVariants}>
            <div className="interests-card hologram-card">
              <div className="card-glow"></div>
              <h4 className="gradient-text">Interests & Methodologies</h4>
              <div className="interests-grid">
                <div className="interest-item">
                  <span className="interest-emoji">📱</span>
                  <span>Mobile Development</span>
                </div>
                <div className="interest-item">
                  <span className="interest-emoji">🔗</span>
                  <span>Blockchain Technology</span>
                </div>
                <div className="interest-item">
                  <span className="interest-emoji">🤖</span>
                  <span>AI & Machine Learning</span>
                </div>
                <div className="interest-item">
                  <span className="interest-emoji">🏃‍♂️</span>
                  <span>Agile Methodology</span>
                </div>
                <div className="interest-item">
                  <span className="interest-emoji">📊</span>
                  <span>Scrum Framework</span>
                </div>
                <div className="interest-item">
                  <span className="interest-emoji">📐</span>
                  <span>UML Design</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;