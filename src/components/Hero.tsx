import { useEffect, useRef } from 'react'
import './Hero.css'

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Hi, my name is</p>
          <h1 className="hero-name">
            <span className="name-line">Ayush</span>
            <span className="name-line">Jaiswal</span>
          </h1>
          <h2 className="hero-title">I build things for the web.</h2>
          <p className="hero-description">
            Full-Stack Web Developer proficient in MERN stack, Python, JavaScript, and DevOps 
            with hands-on experience in AI and autonomous agent development. I build scalable 
            web applications and automate workflows.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={scrollToProjects}>
              View My Work
            </button>
            <a
              href="#contact"
              className="btn btn-secondary"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Get In Touch
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="code-block">
            <div className="code-header">
              <span className="code-dot"></span>
              <span className="code-dot"></span>
              <span className="code-dot"></span>
            </div>
            <pre className="code-content">
              <code>{`const developer = {
  name: "Ayush Jaiswal",
  role: "Full Stack Developer",
  location: "Jaipur, Rajasthan",
  skills: ["MERN", "Python", "DevOps"],
  passion: "Building scalable applications"
};`}</code>
            </pre>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow">
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  )
}

export default Hero

