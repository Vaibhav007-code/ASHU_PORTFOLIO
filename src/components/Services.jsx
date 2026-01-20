import './Services.css'

const Services = () => {
    const services = [
        {
            icon: '📸',
            title: 'Fashion Photography',
            description: 'Professional fashion shoots for runways, editorials, and commercial campaigns. Expertise in capturing the perfect shot with attention to lighting and composition.'
        },
        {
            icon: '🎬',
            title: 'Cinematography',
            description: 'High-quality video production for concerts, events, advertisements, and music videos. Bringing stories to life through dynamic visual narratives.'
        },
        {
            icon: '🎭',
            title: 'Event Coverage',
            description: 'Comprehensive coverage of concerts, fashion shows, college events, and celebrity appearances. Capturing every important moment with precision.'
        },
        {
            icon: '💼',
            title: 'Commercial Work',
            description: 'Advertisement shoots, product photography, and promotional content for brands. Creating compelling visuals that drive engagement.'
        }
    ]

    return (
        <section className="services">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">What I Do</span>
                    <h2 className="section-title">Services</h2>
                </div>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
