import { useState, useRef, useEffect } from 'react'
import './OptimizedImage.css'

/**
 * OptimizedImage Component
 * - Lazy loads images with Intersection Observer
 * - Shows blur placeholder while loading
 * - Uses srcset for responsive sizes (pre-generated)
 * - Explicit width/height to prevent layout shifts
 */

const OptimizedImage = ({
    src,
    srcSet,
    alt,
    className = '',
    aspectRatio = '4/5',
    sizes = '(max-width: 480px) 45vw, (max-width: 768px) 50vw, 350px'
}) => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [isInView, setIsInView] = useState(false)
    const [hasError, setHasError] = useState(false)
    const containerRef = useRef(null)

    // Use Intersection Observer for lazy loading
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true)
                        observer.unobserve(entry.target)
                    }
                })
            },
            {
                rootMargin: '100px 0px', // Start loading 100px before visible
                threshold: 0.01 // Trigger even if just 1% is visible
            }
        )

        if (containerRef.current) {
            observer.observe(containerRef.current)
        }

        return () => observer.disconnect()
    }, [])

    const handleLoad = () => {
        setIsLoaded(true)
    }

    const handleError = () => {
        setHasError(true)
        setIsLoaded(true)
    }

    return (
        <div
            ref={containerRef}
            className={`optimized-image-container ${className}`}
            style={{ aspectRatio }}
        >
            {/* Blur placeholder - always visible until image loads */}
            <div className={`image-placeholder ${isLoaded ? 'hidden' : ''}`}>
                <div className="placeholder-shimmer"></div>
            </div>

            {/* Actual image - only load when in view */}
            {isInView && !hasError && (
                <img
                    src={src}
                    srcSet={srcSet}
                    sizes={sizes}
                    alt={alt}
                    width="400"
                    height="500"
                    loading="lazy"
                    decoding="async"
                    fetchpriority="high"
                    onLoad={handleLoad}
                    onError={handleError}
                    className={`optimized-image ${isLoaded ? 'loaded' : ''}`}
                />
            )}

            {/* Error fallback */}
            {hasError && (
                <div className="image-error">
                    <span>📷</span>
                </div>
            )}
        </div>
    )
}

export default OptimizedImage
