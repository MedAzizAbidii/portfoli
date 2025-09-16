import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  Code,
  Smartphone,
  Globe,
  Database,
  Star,
  Award,
  Calendar,
  Building
} from 'lucide-react';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: 'mobile' | 'web' | 'blockchain' | 'desktop';
  year: string;
  company?: string;
  featured?: boolean;
  color: string;
}

const projects = {
  internship: [
    {
      id: 1,
      title: "Leave Management Mobile App",
      description: "Mobile application for streamlining employee leave requests with automated workflows for employees, managers, and HR, including approval processes and email notifications.",
      technologies: ['Flutter', 'Mobile Development', 'Backend Integration', 'Push Notifications'],
      category: 'mobile' as const,
      year: '2025',
      company: 'IGE International General Equipment',
      featured: true,
      color: 'primary'
    },
    {
      id: 2,
      title: "Vehicle Spare Parts Management",
      description: "Cross-platform mobile and web application for managing vehicle spare parts with improved traceability of transactions including sales, purchases, and stock management.",
      technologies: ['Cross-platform Development', 'Web Development', 'Database Management', 'Role-based Access'],
      category: 'web' as const,
      year: '2025',
      company: 'wanes auto (Freelance)',
      color: 'secondary'
    },
    {
      id: 3,
      title: "Crowd Sourcing Mobile App",
      description: "Cross-platform app for crowd sourcing in Tunisia with intuitive UI built using Flutter and Node.js backend operations, tested by internal stakeholders.",
      technologies: ['Flutter', 'Node.js', 'Mobile UI/UX', 'Cross-platform Development'],
      category: 'mobile' as const,
      year: '2024',
      company: 'telcotec Industries',
      color: 'success'
    }
  ],
  academic: [
    {
      id: 4,
      title: "HealthChain App",
      description: "Blockchain-based platform to securely manage and share personal health data with full patient control, featuring decentralized medical records and AI-powered chatbot.",
      technologies: ['Blockchain', 'Smart Contracts', 'Flutter', 'NestJS', 'Web3', 'AI'],
      category: 'blockchain' as const,
      year: '2025',
      featured: true,
      color: 'primary'
    },
    {
      id: 5,
      title: "ChicCercle - ShopeMate App",
      description: "AI-powered shopping assistant app with real-time product scanning, personalized recommendations, and price comparison features for enhanced shopping experience.",
      technologies: ['iOS', 'Android', 'NestJS', 'Weather API', 'AI'],
      category: 'mobile' as const,
      year: '2025',
      color: 'secondary'
    },
    {
      id: 6,
      title: "AFFARIETY - E-learning Platform",
      description: "Comprehensive online learning platform with user authentication, course management, and admin dashboard for tracking student progress.",
      technologies: ['JavaFX', 'Symfony', 'SQL', 'PHP'],
      category: 'web' as const,
      year: '2024',
      featured: true,
      color: 'info'
    },
    {
      id: 7,
      title: "Cinema Booking Website",
      description: "Responsive cinema website allowing users to browse films, view showtimes, and book tickets online with real-time seat selection.",
      technologies: ['HTML', 'CSS', 'PHP', 'SQL'],
      category: 'web' as const,
      year: '2022',
      color: 'warning'
    },
    {
      id: 8,
      title: "2D Game Development",
      description: "C-based 2D game using SDL with advanced score tracking, collision detection, and immersive gameplay mechanics.",
      technologies: ['C', 'SDL', 'Game Development'],
      category: 'desktop' as const,
      year: '2021-2022',
      color: 'danger'
    }
  ]
};

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<'all' | 'internship' | 'academic'>('all');

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'mobile':
        return <Smartphone className="w-5 h-5" />;
      case 'web':
        return <Globe className="w-5 h-5" />;
      case 'blockchain':
        return <Database className="w-5 h-5" />;
      case 'desktop':
        return <Code className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  const getColorClass = (color: string) => {
    switch (color) {
      case 'primary':
        return 'from-blue-600/20 to-cyan-600/20 border-blue-500/30';
      case 'secondary':
        return 'from-purple-600/20 to-pink-600/20 border-purple-500/30';
      case 'success':
        return 'from-green-600/20 to-emerald-600/20 border-green-500/30';
      case 'info':
        return 'from-cyan-600/20 to-blue-600/20 border-cyan-500/30';
      case 'warning':
        return 'from-yellow-600/20 to-orange-600/20 border-yellow-500/30';
      case 'danger':
        return 'from-red-600/20 to-rose-600/20 border-red-500/30';
      default:
        return 'from-gray-600/20 to-slate-600/20 border-gray-500/30';
    }
  };

  const getAllProjects = () => {
    return [...projects.internship, ...projects.academic];
  };

  const getFilteredProjects = () => {
    switch (activeCategory) {
      case 'internship':
        return projects.internship;
      case 'academic':
        return projects.academic;
      default:
        return getAllProjects();
    }
  };

  const filteredProjects = getFilteredProjects();

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">
            <span className="title-number">02.</span>
            <span className="title-text">{t('projects.title')}</span>
          </h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="category-filters"
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            marginBottom: '80px' 
          }}
        >
          <div className="filter-container" style={{
            display: 'flex',
            background: 'rgba(26, 26, 46, 0.8)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            padding: '8px',
            border: '1px solid rgba(0, 255, 255, 0.2)',
            boxShadow: '0 8px 32px rgba(0, 255, 255, 0.1)'
          }}>
            {[
              { key: 'all', label: t('projects.categories.all'), icon: <Star className="w-4 h-4" /> },
              { key: 'internship', label: t('projects.categories.internship'), icon: <Building className="w-4 h-4" /> },
              { key: 'academic', label: t('projects.categories.academic'), icon: <Award className="w-4 h-4" /> }
            ].map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key as 'all' | 'internship' | 'academic')}
                className="filter-btn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  borderRadius: '12px',
                  border: 'none',
                  background: activeCategory === category.key 
                    ? 'linear-gradient(135deg, rgba(0, 255, 255, 0.2), rgba(0, 150, 255, 0.3))'
                    : 'transparent',
                  color: activeCategory === category.key ? '#00ffff' : '#888',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontSize: '14px',
                  fontWeight: '600',
                  textShadow: activeCategory === category.key ? '0 0 10px rgba(0, 255, 255, 0.5)' : 'none',
                  boxShadow: activeCategory === category.key ? '0 0 20px rgba(0, 255, 255, 0.3)' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (activeCategory !== category.key) {
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeCategory !== category.key) {
                    e.currentTarget.style.color = '#888';
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                {category.icon}
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="project-wrapper"
            >
              <div className="project-card" style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                padding: '30px 25px',
                position: 'relative'
              }}>
                <div className="card-glow"></div>
                <div className="card-border"></div>
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="featured-badge" style={{
                    position: 'absolute',
                    top: '-8px',
                    right: '-8px',
                    background: 'linear-gradient(135deg, #ffd700, #ff8c00)',
                    color: '#000',
                    fontSize: '11px',
                    fontWeight: 'bold',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    zIndex: 3,
                    boxShadow: '0 4px 15px rgba(255, 215, 0, 0.3)'
                  }}>
                    <Star className="w-3 h-3" />
                    {t('common.featured')}
                  </div>
                )}

                {/* Project Header with Icon */}
                <div className="project-header" style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '15px',
                  marginBottom: '25px',
                  textAlign: 'center',
                  width: '100%'
                }}>
                  <div style={{ width: '100%' }}>
                    <div className="category-icon" style={{
                      padding: '12px',
                      borderRadius: '12px',
                      background: 'rgba(0, 255, 255, 0.1)',
                      border: '1px solid rgba(0, 255, 255, 0.2)',
                      color: '#00ffff',
                      width: 'fit-content',
                      margin: '0 auto 15px auto'
                    }}>
                      {getCategoryIcon(project.category)}
                    </div>
                    <div className="project-info">
                      <h3 className="project-title" style={{ 
                        marginBottom: '10px',
                        textAlign: 'center'
                      }}>{t(`projects.items.${project.id === 1 ? 'leaveManagement' : 
                            project.id === 2 ? 'vehicleParts' : 
                            project.id === 3 ? 'crowdSourcing' : 
                            project.id === 4 ? 'healthChain' : 
                            project.id === 5 ? 'chicCercle' : 
                            project.id === 6 ? 'affariety' : 
                            project.id === 7 ? 'cinema' : 'game2d'}.title`)}</h3>
                      <div className="project-meta" style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        gap: '8px',
                        fontSize: '12px',
                        color: '#888'
                      }}>
                        <Calendar className="w-4 h-4" />
                        <span>{project.year}</span>
                        {'company' in project && project.company && (
                          <>
                            <span>•</span>
                            <Building className="w-4 h-4" />
                            <span style={{ color: '#00ffff' }}>
                              {'company' in project ? project.company : ''}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <div style={{ 
                  marginBottom: '25px',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  textAlign: 'center'
                }}>
                  <p className="project-description" style={{ 
                    lineHeight: '1.7',
                    fontSize: '14px',
                    color: '#ccc',
                    margin: '0'
                  }}>
                    {t(`projects.items.${project.id === 1 ? 'leaveManagement' : 
                         project.id === 2 ? 'vehicleParts' : 
                         project.id === 3 ? 'crowdSourcing' : 
                         project.id === 4 ? 'healthChain' : 
                         project.id === 5 ? 'chicCercle' : 
                         project.id === 6 ? 'affariety' : 
                         project.id === 7 ? 'cinema' : 'game2d'}.description`)}
                  </p>
                </div>

                {/* Technologies */}
                <div className="tech-stack" style={{ 
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: '8px',
                  marginTop: 'auto'
                }}>
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag" style={{
                      margin: '0'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Corner Indicators */}
                <div className="corner-indicators">
                  <div className="corner corner-tl"></div>
                  <div className="corner corner-tr"></div>
                  <div className="corner corner-bl"></div>
                  <div className="corner corner-br"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;