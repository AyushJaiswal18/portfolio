import { personalInfo, education, recentTechnologies } from '../constants/portfolioData'
import './About.css'

const About = () => {
  const educationDuration =
    new Date().getFullYear() >= 2026
      ? education.duration
      : `${education.duration} (Expected)`

  return (
    <section id="about" className="about">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">{personalInfo.summary}</p>
            <div className="education-info">
              <h3 className="education-title">Education</h3>
              <p className="education-degree">
                <strong>{education.degree}</strong> - {education.major}
              </p>
              <p className="education-institution">{education.institution}</p>
              <p className="education-details">
                {educationDuration} • CGPA: {education.cgpa}
              </p>
            </div>
            <p>Here are a few technologies I've been working with recently:</p>
            <ul className="tech-list">
              {recentTechnologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
          <div className="about-image">
            <div className="image-wrapper">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="profile-image"
              />
              <div className="image-border"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

