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
                        <div className="award-image">
                            <img src="/IMG_6473.PNG" alt="National Ranking Award" loading="lazy" />
                        </div>
                        <div className="award-content">
                            <h3 className="award-title">National Award</h3>
                            <p className="award-description">Best Social Media Promotion in Sports and Physical Education</p>
                            <p className="award-org">G-SEC 2026 • Global Sports Educational Convention 2026</p>
                            <p className="award-location">Lovely Professional University, Punjab</p>
                        </div>
                    </div>
                    <div className="award-card">
                        <div className="award-content full-content">
                            <h3 className="award-title">International Recognition</h3>
                            <p className="award-description">Main page Instagram feature - Lovely Professional University</p>
                            <p className="award-org">Kalaakar Studio</p>
                            <a
                                href="https://www.instagram.com/kalaakar_studio0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="award-link"
                            >
                                Visit @kalaakar_studio0 →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Awards
