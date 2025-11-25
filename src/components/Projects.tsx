import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'MyGradway',
      description: 'Online Job Listing Platform with asynchronous priority-based email system, Razorpay payments, JWT authentication, and comprehensive admin analytics dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Redis', 'TypeScript', 'Resend', 'Loki', 'Prometheus'],
      highlights: [
        'Architected full-stack career platform with asynchronous priority-based email system using Redis and BullMQ',
        'Integrated Razorpay payments, JWT authentication, Cloudinary uploads, and admin analytics dashboard',
        'Implemented observability with Winston/Loki logging and Prometheus metrics for API monitoring'
      ],
      github: 'https://github.com/yourusername/mygradway',
      demo: '#',
      image: 'mygradway',
    },
    {
      title: 'DocuAI',
      description: 'AI Code Documentation Generator - Autonomous AI agent that analyzes codebases and generates comprehensive documentation automatically.',
      tech: ['Python', 'LangChain', 'Langsmith', 'OpenAI API', 'AST Parser'],
      highlights: [
        'Built autonomous AI agent that analyzes codebases and generates comprehensive documentation automatically',
        'Executed AST parsing to extract function signatures and code structure across Python and JavaScript',
        'Developed CLI tool with multi-language support, identifying code smells and suggesting improvements'
      ],
      github: 'https://github.com/yourusername/docuai',
      demo: '#',
      image: 'docuai',
    },
    {
      title: 'Orca',
      description: 'Cloud VM Platform - Built cloud platform launching containerized VMs across multiple AWS regions with browser access.',
      tech: ['Node.js', 'React', 'AWS (ECS, EC2, SNS)', 'Kasm Workspaces', 'Docker'],
      highlights: [
        'Built cloud platform launching containerized VMs across multiple AWS regions with browser access',
        'Integrated AWS ECS orchestration, SNS webhooks for real-time updates, and RESTful API architecture',
        'Developed full-stack interface for VM lifecycle management with JWT authentication and multi-region support'
      ],
      github: 'https://github.com/yourusername/orca',
      demo: '#',
      image: 'orca',
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <span>{project.image}</span>
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="GitHub Repository"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="Live Demo"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                {project.highlights && (
                  <ul className="project-highlights">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                )}
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

