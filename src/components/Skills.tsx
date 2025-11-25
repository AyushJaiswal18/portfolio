import './Skills.css'

const Skills = () => {
  const topSkills = [
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'Python', icon: '🐍' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Express.js', icon: '🚂' },
  ]

  return (
    <section id="skills" className="skills">
      <div className="section-container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-icons-grid">
          {topSkills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon-wrapper">
                <span className="skill-emoji">{skill.icon}</span>
              </div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
