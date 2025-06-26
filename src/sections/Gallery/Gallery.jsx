import React, { useState } from 'react';
import './Gallery.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import imgOne from '../../assets/1.png';
import imgTwo from '../../assets/servicePage/gallery/2.png';
import imgThree from '../../assets/servicePage/gallery/3.png';
import imgFour from '../../assets/servicePage/gallery/4.png';
import imgFive from '../../assets/servicePage/gallery/5.png';
import imgSix from '../../assets/servicePage/gallery/6.png';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const galleryImages = [
        {
            id: 1,
            src: imgOne,
            title: 'Reception Area',
            description: 'Welcoming and comfortable reception area for patients'
        },
        {
            id: 2,
            src: imgTwo,
            title: 'Consultation Room',
            description: 'Private consultation rooms equipped with modern facilities'
        },
        {
            id: 3,
            src: imgThree,
            title: 'Diagnostic Equipment',
            description: 'Advanced diagnostic tools for accurate assessment'
        },
        {
            id: 4,
            src: imgFour,
            title: 'Treatment Room',
            description: 'Specialized treatment rooms for various procedures'
        },
        {
            id: 5,
            src: imgFive,
            title: 'Waiting Area',
            description: 'Comfortable seating area for patients and families'
        },
        {
            id: 6,
            src: imgSix,
            title: 'Medical Equipment',
            description: 'State-of-the-art medical equipment and technology'
        }
    ];

    const openLightbox = (image) => {
        setSelectedImage(image);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    return (
        <section className='gallery-section pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="gallery-header">
                    <SectionTitle 
                        subTitle="Gallery"
                        title="Take a Virtual Tour of Our Modern Clinic"
                        description="Explore our state-of-the-art facilities designed with your comfort and health in mind. Our clinic provides a welcoming, hygienic, and technologically advanced environment for comprehensive respiratory care."
                    />
                </div>

                <div className="gallery-grid">
                    {galleryImages.map((image, index) => (
                        <div 
                            key={image.id} 
                            className={`gallery-item ${index === 0 ? 'featured' : ''}`}
                            data-aos="fade-up" 
                            data-aos-delay={index * 100}
                            onClick={() => openLightbox(image)}
                        >
                            <div className="gallery-image">
                                <img src={image.src} alt={image.title} />
                                <div className="gallery-overlay">
                                    <div className="overlay-content">
                                        <div className="zoom-icon">
                                            <span>🔍</span>
                                        </div>
                                        <h4>{image.title}</h4>
                                        <p>{image.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="gallery-features">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="feature-highlight">
                                <div className="feature-icon">
                                    <span>🏥</span>
                                </div>
                                <h4>Modern Facility</h4>
                                <p>Contemporary design with patient comfort in mind</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="feature-highlight">
                                <div className="feature-icon">
                                    <span>🧼</span>
                                </div>
                                <h4>Hygienic Environment</h4>
                                <p>Strict cleanliness protocols for patient safety</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="feature-highlight">
                                <div className="feature-icon">
                                    <span>⚡</span>
                                </div>
                                <h4>Advanced Technology</h4>
                                <p>Latest medical equipment for accurate diagnosis</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="feature-highlight">
                                <div className="feature-icon">
                                    <span>💝</span>
                                </div>
                                <h4>Comfortable Setting</h4>
                                <p>Relaxing atmosphere to ease patient anxiety</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="lightbox-overlay" onClick={closeLightbox}>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <button className="lightbox-close" onClick={closeLightbox}>
                            ×
                        </button>
                        <img src={selectedImage.src} alt={selectedImage.title} />
                        <div className="lightbox-info">
                            <h3>{selectedImage.title}</h3>
                            <p>{selectedImage.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;