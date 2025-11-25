import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      title: 'Technical Lead',
      organization: 'Startup Weekend Jaipur',
      duration: 'May 2024 - Oct 2024',
      type: 'Academic',
      achievements: [
        'Led backend development for 150+ participants using Node.js, Express.js, and MongoDB',
        'Engineered live polling and team formation system processing 500+ submissions with 99% uptime',
        'Deployed scalable backend infrastructure on AWS with Docker, reducing deployment time by 40%',
      ],
    },
    {
      title: 'Developer - Blood Donation Camp Portal',
      organization: 'Manipal University Jaipur',
      duration: 'Nov 2024',
      type: 'Academic',
      achievements: [
        'Developed web portal managing 2000+ donor registrations across 10 hospitals with 95% data accuracy',
        'Architected real-time dashboard displaying blood statistics using Socket.io, reducing manual updates by 100%',
        'Automated certificate generation and validation system, processing 1800+ certificates in under 8 hours',
      ],
    },
  ]

  return (
    <section id="experience" className="experience">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <div className="experience-title-section">
                  <h3 className="experience-title">{exp.title}</h3>
                  <span className="experience-type">{exp.type}</span>
                </div>
                <div className="experience-org-duration">
                  <span className="experience-organization">{exp.organization}</span>
                  <span className="experience-duration">{exp.duration}</span>
                </div>
              </div>
              <ul className="experience-achievements">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

