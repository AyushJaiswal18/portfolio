import './Achievements.css'

const Achievements = () => {
  const achievements = [
    {
      type: 'Patent',
      title: 'Bluetooth-Enabled Stethoscope with Integrated Heart Rate Monitor',
      applicationNumber: '202411094555',
      date: 'Dec 2024',
    },
    {
      type: 'Award',
      title: "Dean's Excellence Award in Academics",
      count: 3,
      organization: 'Manipal University Jaipur',
    },
  ]

  return (
    <section id="achievements" className="achievements">
      <div className="section-container">
        <h2 className="section-title">Achievements</h2>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-icon">
                {achievement.type === 'Patent' ? (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                ) : (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                )}
              </div>
              <div className="achievement-content">
                <span className="achievement-type">{achievement.type}</span>
                <h3 className="achievement-title">{achievement.title}</h3>
                {achievement.applicationNumber && (
                  <p className="achievement-detail">
                    Application: {achievement.applicationNumber}
                  </p>
                )}
                {achievement.count && (
                  <p className="achievement-detail">
                    Received {achievement.count} times
                  </p>
                )}
                {achievement.organization && (
                  <p className="achievement-org">{achievement.organization}</p>
                )}
                <p className="achievement-date">{achievement.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements

