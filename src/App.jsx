import { useState, useEffect, lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Awards from './components/Awards'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    return (
        <div className={`app ${isLoaded ? 'loaded' : ''}`}>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Awards />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
