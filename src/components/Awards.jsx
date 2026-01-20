import './Awards.css'

const Awards = () => {
    return (
        <section id="awards" className="awards">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Recognition</span>
                    <h2 className="section-title">Awards & Achievements</h2>
                </div>
                <div className="awards-grid">
                    <div className="award-card">
                        <div className="award-image certificate-full">
                            <img src="/nation.PNG" alt="National Ranking Award" loading="lazy" />
                        </div>
                        <div className="award-content">
                            <h3 className="award-title">National Award</h3>
                            <p className="award-description">Best Social Media Promotion in Sports and Physical Education</p>
                            <p className="award-org">G-SEC 2026 • Global Sports Educational Convention 2026</p>
                            <p className="award-location">Lovely Professional University, Punjab</p>
                        </div>
                    </div>
                    <div className="award-card clickable-award" onClick={() => window.open('/internation.jpg', '_blank')}>
                        <div className="award-image certificate-full">
                            <img src="/internation.jpg" alt="International Recognition Certificate" loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Awards
