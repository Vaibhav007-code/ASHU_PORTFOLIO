import { useState, useEffect, useRef } from 'react'
import './About.css'

const About = () => {
    const [projectCount, setProjectCount] = useState(0)
    const [experienceCount, setExperienceCount] = useState(0)
    const [nationalAwardCount, setNationalAwardCount] = useState(0)
    const [internationalAwardCount, setInternationalAwardCount] = useState(0)
    const [hasAnimated, setHasAnimated] = useState(false)
    const statsRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true)
                    animateCounter(setProjectCount, 50, 1500)
                    animateCounter(setExperienceCount, 5, 1000)
                    animateCounter(setNationalAwardCount, 1, 800)
                    animateCounter(setInternationalAwardCount, 1, 900)
                }
            },
            { threshold: 0.3 }
        )

        if (statsRef.current) {
            observer.observe(statsRef.current)
        }

        return () => observer.disconnect()
    }, [hasAnimated])

    const animateCounter = (setter, target, duration) => {
        const increment = target / (duration / 16)
        let current = 0

        const updateCounter = () => {
            current += increment
            if (current < target) {
                setter(Math.floor(current))
                requestAnimationFrame(updateCounter)
            } else {
                setter(target)
            }
        }
        updateCounter()
    }

    return (
        <section id="about" className="about">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Who I Am</span>
                    <h2 className="section-title">About Me</h2>
                </div>
                <div className="about-grid">
                    <div className="about-content">
                        <p className="about-text">
                            I'm a passionate cinematographer and photographer based at <strong>Lovely Professional University</strong>,
                            specializing in capturing the essence of fashion, concerts, events, and commercial content.
                            My work has been featured across major events including fashion weeks, music concerts, and high-profile collaborations.
                        </p>
                        <p className="about-text">
                            With a keen eye for detail and a commitment to visual storytelling, I've had the privilege of working
                            with renowned artists, influencers, and brands. My approach combines technical expertise with creative
                            vision to deliver stunning visuals that leave a lasting impact.
                        </p>
                        <div className="stats-grid" ref={statsRef}>
                            <div className="stat-item">
                                <div className="stat-number">{projectCount}+</div>
                                <div className="stat-label">Projects Completed</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">{experienceCount}+</div>
                                <div className="stat-label">Years Experience</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">{nationalAwardCount}</div>
                                <div className="stat-label">National Award</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">{internationalAwardCount}</div>
                                <div className="stat-label">International Award</div>
                            </div>
                        </div>
                    </div>
                    <div className="about-image">
                        <div className="image-wrapper">
                            <img src="/ashuimg.JPG" alt="Ashutosh Verma - Cinematographer & Photographer" loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
