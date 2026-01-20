import { useState, useEffect, useRef, useCallback } from 'react'
import './Navbar.css'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')
    const ticking = useRef(false)

    useEffect(() => {
        const handleScroll = () => {
            // Throttle scroll handler using requestAnimationFrame
            if (!ticking.current) {
                requestAnimationFrame(() => {
                    setScrolled(window.scrollY > 50)

                    // Update active section
                    const sections = document.querySelectorAll('section[id]')
                    const scrollPos = window.scrollY

                    sections.forEach((section) => {
                        const sectionTop = section.offsetTop - 100
                        const sectionHeight = section.offsetHeight
                        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                            setActiveSection(section.getAttribute('id'))
                        }
                    })

                    ticking.current = false
                })
                ticking.current = true
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavClick = (e, targetId) => {
        e.preventDefault()
        setMobileMenuOpen(false)
        document.body.style.overflow = 'auto'

        const target = document.querySelector(targetId)
        if (target) {
            const offsetTop = target.offsetTop - 80
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            })
        }
    }

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
        document.body.style.overflow = !mobileMenuOpen ? 'hidden' : 'auto'
    }

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <a href="#home" className="logo" onClick={(e) => handleNavClick(e, '#home')}>
                    <span className="logo-text">ASHUTOSH VERMA</span>
                    <span className="logo-subtitle">Cinematographer & Photographer</span>
                </a>

                <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
                    <li><a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '#home')}>Home</a></li>
                    <li><a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '#about')}>About</a></li>
                    <li><a href="#portfolio" className={`nav-link ${activeSection === 'portfolio' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '#portfolio')}>Portfolio</a></li>
                    <li><a href="#awards" className={`nav-link ${activeSection === 'awards' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '#awards')}>Awards</a></li>
                    <li><a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '#contact')}>Contact</a></li>
                </ul>

                <div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
