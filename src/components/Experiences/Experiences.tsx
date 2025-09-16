import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import './Experiences.css';

interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    company: "IGE International General Equipment",
    position: "Summer Intern",
    period: "June 2025 - August 2025",
    description: [
      "Developed a mobile leave management application to streamline and simplify employee leave requests",
      "Implemented automated workflows for employees, managers, and HR covering request submission, approval, and refusal processes",
      "Designed and built admin features for managing employee accounts and email notifications"
    ],
    technologies: ["Mobile Development", "Workflow Automation", "Backend Integration"]
  },
  {
    id: 2,
    company: "wanes auto",
    position: "Application Developer (Freelance)",
    period: "June 2025 - September 2025",
    description: [
      "Developed cross-platform mobile and web application for managing vehicle spare parts",
      "Focused on improving traceability of transactions including sales, purchases, and stock management",
      "Designed and implemented role-based access control with personalized features to meet client-specific needs"
    ],
    technologies: ["Cross-platform Development", "Web Development", "Database Management", "Role-based Access"]
  },
  {
    id: 3,
    company: "telcotec Industries",
    position: "Mobile Developer Intern",
    period: "July 2024 - September 2024",
    description: [
      "Designed and developed a cross-platform app for crowd sourcing in Tunisia",
      "Built intuitive UI using Flutter and integrated Node.js for backend operations",
      "Delivered a prototype tested by internal stakeholders with positive UX feedback"
    ],
    technologies: ["Flutter", "Node.js", "Mobile UI/UX", "Cross-platform Development"]
  },
  {
    id: 4,
    company: "SNR Company",
    position: "Technical Observation Intern",
    period: "July 2022 - August 2022",
    description: [
      "Shadowed engineering teams and participated in workshops on electronic component insertion",
      "Gained hands-on experience in soldering and circuit board manufacturing processes",
      "Learned PCB design principles and practical application in industrial settings"
    ],
    technologies: ["Arduino", "PCB Design", "Proteus", "Eagle", "Electronics"]
  }
];

const Experiences: React.FC = () => {
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
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section className="experiences" id="experiences">
      <div className="experiences-container">
        <motion.div
          ref={ref}
          className="experiences-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">
              <span className="title-number">03.</span>
              <span className="title-text">{t('experiences.title')}</span>
            </h2>
            <div className="title-underline"></div>
            <p className="section-subtitle">
              {t('experiences.subtitle')}
            </p>
          </motion.div>

          <div className="timeline">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                className="timeline-item"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="timeline-marker">
                  <div className="marker-dot"></div>
                  <div className="marker-line"></div>
                </div>
                
                <div className="experience-card">
                  <div className="card-header">
                    <div className="position-info">
                      <h3 className="position-title">{t(`experiences.items.${experience.id === 1 ? 'ige' : experience.id === 2 ? 'wanesAuto' : experience.id === 3 ? 'telcotec' : 'snr'}.position`)}</h3>
                      <h4 className="company-name">{t(`experiences.items.${experience.id === 1 ? 'ige' : experience.id === 2 ? 'wanesAuto' : experience.id === 3 ? 'telcotec' : 'snr'}.company`)}</h4>
                    </div>
                    <div className="period-badge">
                      {t(`experiences.items.${experience.id === 1 ? 'ige' : experience.id === 2 ? 'wanesAuto' : experience.id === 3 ? 'telcotec' : 'snr'}.period`)}
                    </div>
                  </div>

                  <div className="experience-description">
                    <p>{t(`experiences.items.${experience.id === 1 ? 'ige' : experience.id === 2 ? 'wanesAuto' : experience.id === 3 ? 'telcotec' : 'snr'}.description`)}</p>
                    <div className="achievements-list">
                      {(t(`experiences.items.${experience.id === 1 ? 'ige' : experience.id === 2 ? 'wanesAuto' : experience.id === 3 ? 'telcotec' : 'snr'}.achievements`, { returnObjects: true }) as string[]).map((achievement, i) => (
                        <div key={i} className="description-item">
                          <span className="bullet">▸</span>
                          <p>{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="experience-tech">
                    {experience.technologies.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experiences;