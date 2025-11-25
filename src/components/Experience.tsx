import { experiences } from '../constants/portfolioData'
import './Experience.css'

const Experience = () => {

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

