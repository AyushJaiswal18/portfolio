import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              Full-Stack Web Developer proficient in MERN stack, Python, JavaScript, and DevOps 
              with hands-on experience in AI and autonomous agent development. Proven ability to 
              build scalable web applications and automate workflows.
            </p>
            <div className="education-info">
              <h3 className="education-title">Education</h3>
              <p className="education-degree">
                <strong>Bachelor of Technology</strong> - Computer and Communication Engineering
              </p>
              <p className="education-institution">Manipal University Jaipur</p>
              <p className="education-details">
                {new Date().getFullYear() >= 2026 ? '2022 - 2026' : '2022 - 2026 (Expected)'} • CGPA: 8.49/10
              </p>
            </div>
            <p>
              Here are a few technologies I've been working with recently:
            </p>
            <ul className="tech-list">
              <li>React & Next.js</li>
              <li>Node.js & Express</li>
              <li>Python & AI/ML</li>
              <li>MongoDB & PostgreSQL</li>
              <li>AWS & Docker</li>
              <li>TypeScript & JavaScript</li>
            </ul>
          </div>
          <div className="about-image">
            <div className="image-wrapper">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQFuR5-DB0WFbg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1715371221215?e=1765411200&v=beta&t=92aIUghNNt79hndq4T0XBChguKuGyG-oeRhHmbUEJYU"
                alt="Ayush Jaiswal"
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

