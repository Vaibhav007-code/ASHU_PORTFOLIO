import './Hero.css'

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-background">
                <div className="gradient-overlay"></div>
            </div>
            <div className="hero-content">
                <div className="hero-text">
                    <h1 className="hero-title">
                        <span className="title-line">Capturing</span>
                        <span className="title-line highlight">Moments</span>
                        <span className="title-line">That Matter</span>
                    </h1>
                    <p className="hero-subtitle">
                        Award-winning cinematographer and photographer crafting visual stories that resonate
                    </p>
                    <div className="hero-buttons">
                        <a href="#portfolio" className="btn btn-primary">View My Work</a>
                        <a href="#contact" className="btn btn-secondary">Get In Touch</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
