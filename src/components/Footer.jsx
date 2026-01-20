import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3>ASHUTOSH VERMA</h3>
                        <p>Cinematographer & Photographer</p>
                    </div>
                    <div className="footer-links">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#portfolio">Portfolio</a>
                        <a href="#awards">Awards</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 Ashutosh Verma. All rights reserved. | Kalaakar Studio</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
