// Portfolio projects data with correct mappings
// Images are now optimized WebP format in public/images

// Helper to generate image paths with srcset
const getImageData = (baseName) => ({
    src: `/images/${baseName}.webp`,
    srcSet: [
        `/images/${baseName}-400w.webp 400w`,
        `/images/${baseName}-600w.webp 600w`,
        `/images/${baseName}-800w.webp 800w`,
        `/images/${baseName}-1200w.webp 1200w`
    ].join(', ')
})

export const portfolioData = [
    {
        id: 1,
        title: "Bridal Fashion Photography",
        category: "fashion",
        description: "Elegant bridal fashion shoot featuring intricate traditional lehenga with detailed embroidery and classic Indian jewelry",
        ...getImageData('IMG_6426')
    },
    {
        id: 2,
        title: "Dramatic Stage Performance",
        category: "concert",
        description: "Artistic concert photography capturing dramatic golden stage lighting and performer silhouette",
        ...getImageData('IMG_6439')
    },
    {
        id: 3,
        title: "Runway Fashion Show",
        category: "fashion",
        description: "High-fashion runway photography featuring model in ethereal white ensemble with dramatic lighting",
        ...getImageData('IMG_6446')
    },
    {
        id: 4,
        title: "Live Event Coverage",
        category: "event",
        description: "Dynamic outdoor event photography capturing energetic speaker in action against blue sky",
        ...getImageData('IMG_6448')
    },
    {
        id: 5,
        title: "Creative Motion Portrait",
        category: "commercial",
        description: "Artistic portrait with intentional motion blur technique showcasing creative expression and movement",
        ...getImageData('IMG_6449')
    },
    {
        id: 6,
        title: "Satinder Sartaaj Live Concert",
        category: "concert",
        description: "Live performance photography of legendary Sufi singer Satinder Sartaaj with full band and dramatic stage design",
        ...getImageData('IMG_6453')
    },
    {
        id: 7,
        title: "K-POP Themed Fashion Show",
        category: "fashion",
        location: "Lovely Professional University",
        description: "Dynamic fashion show photography with motion blur capturing the energy of K-POP themed runway",
        ...getImageData('IMG_6458')
    },
    {
        id: 8,
        title: "Neeraj Goyat",
        category: "event",
        location: "Lovely Professional University",
        description: "Indian professional boxer and influencer captured during his guest appearance at a college event",
        ...getImageData('IMG_6462')
    },
    {
        id: 9,
        title: "Stage Performance Portrait",
        category: "event",
        description: "Elegant stage portrait featuring performer in vibrant red traditional attire with professional lighting",
        ...getImageData('IMG_6465')
    },
    {
        id: 10,
        title: "Celebrity Event Coverage",
        category: "event",
        description: "Candid event photography capturing celebrity guest in leather jacket addressing packed auditorium",
        ...getImageData('IMG_6467')
    },
    {
        id: 11,
        title: "Former PM of UK Event",
        category: "event",
        description: "High-profile event photography featuring Liz Truss, former Prime Minister of United Kingdom 🇬🇧, during exclusive interview session",
        ...getImageData('IMG_6470')
    },
    {
        id: 12,
        title: "Traditional Fashion Shoot",
        category: "commercial",
        description: "Professional outdoor fashion photography showcasing elegant orange traditional Indian attire with detailed craftsmanship",
        ...getImageData('IMG_6471')
    },
    {
        id: 13,
        title: "Montrose Runway Fashion Week",
        category: "fashion",
        location: "Lovely Professional University, Jalandhar",
        description: "Official Photography Partner for Montrose Runway Fashion Week Edition 17 - Show for a Cause event powered by World Designing Forum",
        ...getImageData('IMG_6472')
    },
    {
        id: 14,
        title: "National Ranking Awards 2026",
        category: "event",
        location: "India International Centre, New Delhi",
        description: "Award photography for National Ranking Awards in Sports & Physical Education - G-SEC 2026 Global Sports Education Convention",
        ...getImageData('IMG_6473')
    }
]


