import './Contact.css'

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Let's Work Together</span>
                    <h2 className="section-title">Get In Touch</h2>
                </div>
                <div className="contact-content">
                    <div className="contact-info-centered">
                        <h3 className="contact-heading">Ready to create something amazing?</h3>
                        <p className="contact-text">
                            Whether you need photography for a fashion show, cinematography for a concert,
                            or commercial content for your brand, I'm here to bring your vision to life.
                        </p>
                        <div className="contact-details">
                            <div className="contact-item">
                                <div className="contact-icon">📧</div>
                                <div>
                                    <div className="contact-label">Email</div>
                                    <a href="mailto:contact@kalaakarstudio.com" className="contact-value">
                                        contact@kalaakarstudio.com
                                    </a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon">📱</div>
                                <div>
                                    <div className="contact-label">Phone</div>
                                    <div>
                                        <a href="tel:+918287490360" className="contact-value">+91 82874 90360</a>
                                        <span className="contact-divider">•</span>
                                        <a href="tel:+919310140687" className="contact-value">+91 93101 40687</a>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon">📍</div>
                                <div>
                                    <div className="contact-label">Location</div>
                                    <div className="contact-value">Lovely Professional University, Jalandhar, Punjab</div>
                                </div>
                            </div>
                        </div>
                        <div className="social-links">
                            <a
                                href="https://www.instagram.com/kalaakar_studio0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                                <span>Instagram</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/ashutosh-kumar-39252128a"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                                <span>LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
