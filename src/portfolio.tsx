import React, { useState, useEffect } from 'react';
import './portfolio.css';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = [
    {
      company: 'MAQ Software',
      role: 'Software Engineer 1',
      period: 'July 2024 - Present',
      description: 'Led full-stack deployment of Microsoft website using React.js, Node.js, TypeScript',
      technologies: ['React.js', 'Node.js', 'TypeScript', 'Azure']
    },
    {
      company: 'MAQ Software',
      role: 'Associate Software Engineer',
      period: 'Jan 2024 - June 2024',
      description: 'Engineered 25+ user-focused web pages with embedded Power BI',
      technologies: ['React.js', 'Power BI', 'OpenAI', 'Azure AI']
    },
    {
      company: 'Pantech Prolabs',
      role: 'SDE Intern',
      period: 'July 2023 - Aug 2023',
      description: 'Developed Credit Card Fraud Detection System with 99% accuracy',
      technologies: ['Python', 'Machine Learning', 'OpenCV']
    }
  ];

  const skills = {
    'Frontend Development': ['React.js', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Redux'],
    'Backend Development': ['Node.js', 'Express.js', 'Java', 'Spring Boot', '.NET'],
    'Cloud & DevOps': ['Azure DevOps', 'AWS', 'Docker', 'Kubernetes']
  };

  const projects = [
    {
      title: 'Job Seeker Application',
      description: 'A full-stack platform connecting job seekers with employers, featuring real-time updates and advanced search capabilities.',
      tech: ['React', 'Redux', 'Node', 'MongoDB'],
      metrics: ['40% performance improvement', '50% better user experience']
    },
    {
      title: 'Online Outpass System',
      description: 'Streamlined digital solution for managing student outpass requests with automated approval workflows.',
      tech: ['Node.js', 'Express', 'MongoDB'],
      metrics: ['30% increase in engagement', '20% reduction in processing time']
    }
  ];

  return (
    <div className="portfolio">
      {/* Hero Section */}
      <section className="hero" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
        <div className="hero-content">
          <h1 className="hero-title">Saurabh Rangdale</h1>
          <p className="hero-subtitle">Software Engineer & Full Stack Developer</p>
          <div className="social-links">
            <a href="#" className="social-link">GitHub</a>
            <a href="#" className="social-link">LinkedIn</a>
            <a href="#" className="social-link">Email</a>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          {['experience', 'skills', 'education', 'projects'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`nav-link ${activeTab === tab ? 'active' : ''}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </nav>

      {/* Content Sections */}
      <div className="content">
        {/* Experience Section */}
        {activeTab === 'experience' && (
          <div className="experience-section">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-card">
                <h3 className="company">{exp.company}</h3>
                <p className="role">{exp.role}</p>
                <p className="period">{exp.period}</p>
                <p className="description">{exp.description}</p>
                <div className="tech-stack">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Skills Section */}
        {activeTab === 'skills' && (
          <div className="skills-section">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="skill-card">
                <h3 className="skill-category">{category}</h3>
                <div className="skill-tags">
                  {items.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Education Section */}
        {activeTab === 'education' && (
          <div className="education-card">
            <h3 className="institute">National Institute of Technology Hamirpur</h3>
            <p className="degree">Bachelor of Technology in Computer Science and Engineering</p>
            <p className="period">2020 – 2024</p>
            <div className="gpa">
              <span>CGPA:</span>
              <span className="gpa-score">8.13</span>
            </div>
          </div>
        )}

        {/* Projects Section */}
        {activeTab === 'projects' && (
          <div className="projects-section">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-metrics">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="metric">{metric}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;