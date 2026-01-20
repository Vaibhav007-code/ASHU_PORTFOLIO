import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { portfolioData } from '../portfolioData'
import OptimizedImage from './OptimizedImage'
import './Portfolio.css'

const Portfolio = () => {
    const [filter, setFilter] = useState('all')
    const [isMobile, setIsMobile] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState(null)
    const observerRef = useRef(null)
    const itemRefs = useRef(new Map())

    // Detect mobile view
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768)
        }
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    // Memoize filtered items to prevent unnecessary recalculations
    const visibleItems = useMemo(() => {
        return portfolioData.filter(
            (item) => filter === 'all' || item.category === filter
        )
    }, [filter])

    // Group items by category for mobile view
    const categoryGroups = useMemo(() => {
        const groups = {}
        portfolioData.forEach(item => {
            if (!groups[item.category]) {
                groups[item.category] = []
            }
            groups[item.category].push(item)
        })
        return groups
    }, [])

    // Category metadata
    const categoryMeta = {
        fashion: { emoji: '👗', title: 'Fashion', description: 'Fashion shows & photoshoots' },
        concert: { emoji: '🎤', title: 'Concerts', description: 'Live music performances' },
        event: { emoji: '🎯', title: 'Events', description: 'Corporate & celebrity events' },
        commercial: { emoji: '📸', title: 'Commercial', description: 'Brand & product photography' }
    }

    // Optimized intersection observer setup
    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                        observerRef.current?.unobserve(entry.target)
                    }
                })
            },
            {
                threshold: 0.05,
                rootMargin: '50px 0px'
            }
        )

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect()
            }
        }
    }, [])

    // Re-observe items when filter changes
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            itemRefs.current.forEach((element) => {
                if (element && observerRef.current) {
                    element.classList.remove('visible')
                    observerRef.current.observe(element)
                }
            })
        }, 50)

        return () => clearTimeout(timeoutId)
    }, [filter, selectedCategory])

    // Ref callback to track item elements
    const setItemRef = useCallback((id, element) => {
        if (element) {
            itemRefs.current.set(id, element)
            if (observerRef.current) {
                observerRef.current.observe(element)
            }
        } else {
            itemRefs.current.delete(id)
        }
    }, [])

    // Render mobile category cards
    const renderMobileCategoryCards = () => {
        return (
            <div className="mobile-category-grid">
                {Object.entries(categoryGroups).map(([category, items]) => {
                    const meta = categoryMeta[category]
                    const coverImage = items[0]
                    return (
                        <div
                            key={category}
                            className="category-card"
                            onClick={() => setSelectedCategory(category)}
                        >
                            <div className="category-card-image">
                                <OptimizedImage
                                    src={coverImage.src}
                                    srcSet={coverImage.srcSet}
                                    alt={meta.title}
                                    aspectRatio="4/5"
                                />
                                <div className="category-overlay">
                                    <div className="category-emoji">{meta.emoji}</div>
                                    <h3 className="category-title">{meta.title}</h3>
                                    <p className="category-description">{meta.description}</p>
                                    <p className="category-count">{items.length} Photos</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }

    // Render mobile album view (when category is selected)
    const renderMobileAlbum = () => {
        const items = categoryGroups[selectedCategory]
        const meta = categoryMeta[selectedCategory]

        return (
            <div className="mobile-album-view">
                <div className="album-header">
                    <button className="back-button" onClick={() => setSelectedCategory(null)}>
                        ← Back
                    </button>
                    <div className="album-title">
                        <span className="album-emoji">{meta.emoji}</span>
                        <h3>{meta.title}</h3>
                    </div>
                    <p className="album-count">{items.length} Photos</p>
                </div>
                <div className="album-grid">
                    {items.map((item, index) => (
                        <div
                            key={item.id}
                            className="album-item"
                            ref={(el) => setItemRef(item.id, el)}
                            style={{
                                transitionDelay: `${Math.min(index * 0.05, 0.3)}s`
                            }}
                        >
                            <div className="album-image">
                                <OptimizedImage
                                    src={item.src}
                                    srcSet={item.srcSet}
                                    alt={item.title}
                                    aspectRatio="4/5"
                                />
                            </div>
                            <div className="album-info">
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                                {item.location && <p className="album-location">📍 {item.location}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <section id="portfolio" className="portfolio">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">My Work</span>
                    <h2 className="section-title">Featured Projects</h2>
                </div>

                {/* Mobile View: Category Cards or Album */}
                {isMobile && (
                    <>
                        {selectedCategory ? renderMobileAlbum() : renderMobileCategoryCards()}
                    </>
                )}

                {/* Desktop View: Filters and Grid */}
                {!isMobile && (
                    <>
                        <div className="portfolio-filters">
                            <button
                                className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                                onClick={() => setFilter('all')}
                            >
                                All
                            </button>
                            <button
                                className={`filter-btn ${filter === 'fashion' ? 'active' : ''}`}
                                onClick={() => setFilter('fashion')}
                            >
                                Fashion
                            </button>
                            <button
                                className={`filter-btn ${filter === 'concert' ? 'active' : ''}`}
                                onClick={() => setFilter('concert')}
                            >
                                Concerts
                            </button>
                            <button
                                className={`filter-btn ${filter === 'event' ? 'active' : ''}`}
                                onClick={() => setFilter('event')}
                            >
                                Events
                            </button>
                            <button
                                className={`filter-btn ${filter === 'commercial' ? 'active' : ''}`}
                                onClick={() => setFilter('commercial')}
                            >
                                Commercial
                            </button>
                        </div>

                        <div className="portfolio-grid">
                            {visibleItems.map((item, index) => (
                                <div
                                    key={item.id}
                                    className="portfolio-item"
                                    data-category={item.category}
                                    ref={(el) => setItemRef(item.id, el)}
                                    style={{
                                        transitionDelay: `${Math.min(index * 0.03, 0.2)}s`
                                    }}
                                >
                                    <div className="portfolio-image">
                                        <OptimizedImage
                                            src={item.src}
                                            srcSet={item.srcSet}
                                            alt={item.title}
                                            aspectRatio="4/5"
                                        />
                                        <div className="portfolio-overlay"></div>
                                    </div>
                                    <div className="portfolio-info">
                                        <h3>{item.title}</h3>
                                        <p className="portfolio-description">{item.description}</p>
                                        {item.location && <p className="portfolio-location">📍 {item.location}</p>}
                                        <span className="portfolio-category">{item.category}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </section>
    )
}

export default Portfolio
