import { useEffect, useRef } from 'react'
import { personalInfo, heroData } from '../constants/portfolioData'
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

  const codeBlock = `const developer = {
  name: "${heroData.codeBlock.name}",
  role: "${heroData.codeBlock.role}",
  location: "${heroData.codeBlock.location}",
  skills: ${JSON.stringify(heroData.codeBlock.skills)},
  passion: "${heroData.codeBlock.passion}"
};`

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">{heroData.greeting}</p>
          <h1 className="hero-name">
            <span className="name-line">{personalInfo.firstName}</span>
            <span className="name-line">{personalInfo.lastName}</span>
          </h1>
          <h2 className="hero-title">{heroData.title}</h2>
          <p className="hero-description">{heroData.description}</p>
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
              <code>{codeBlock}</code>
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

