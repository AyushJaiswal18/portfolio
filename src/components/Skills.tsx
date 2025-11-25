import { topSkills } from '../constants/portfolioData'
import './Skills.css'

const Skills = () => {
  // Duplicate skills array once for seamless infinite scroll
  const duplicatedSkills = [...topSkills, ...topSkills]

  return (
    <section id="skills" className="skills">
      <div className="section-container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-scroll-container">
          <div className="skills-scroll-track">
            {duplicatedSkills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon-wrapper">
                  <span className="skill-emoji">{skill.icon}</span>
                </div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
