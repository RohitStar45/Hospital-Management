import React from 'react';
import './Banner.scss';
import {useNavigate} from 'react-router-dom';
import icon from '../../assets/banner/icons/Calling.png';
import bannerBg from '../../assets/banner/2.jpg';

const Banner = () => {
    const navigate = useNavigate();

    const handleBookAppointment = () => {
        navigate('/contact');
        // Small delay to ensure page loads before scrolling
        setTimeout(() => {
            const contactForm = document.querySelector('.contact-form-wrapper');
            if (contactForm) {
                contactForm.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                });
            }
        }, 100);
    };

    const handlePhoneClick = () => {
        window.open('tel:+919158450788', '_self');
    };

    return (
        <section className='banner-section' style={{ backgroundImage: `url(${bannerBg})` }}>
            <div className="banner-overlay"></div>
            <div className="banner-content">
                <div className="container">
                    <div className="row align-items-center min-vh-100">
                        <div className="col-lg-7 col-md-8">
                            <div className="banner-text" data-aos="fade-up" data-aos-duration="2000">
                                <div className="banner-intro">
                                    <span className="welcome-text">Welcome to</span>
                                    <h1>Dr. Pandharkar<br />Chest Clinic</h1>
                                    <p className="banner-tagline">
                                        Your trusted partner for comprehensive respiratory care and chest health solutions
                                    </p>
                                </div>

                                <div className="banner-cta">
                                    <button 
                                        className="primary-btn"
                                        onClick={handleBookAppointment}
                                    >
                                        <span>Book Appointment</span>
                                        <div className="btn-arrow">→</div>
                                    </button>

                                    <div className="emergency-contact">
                                        <div className="contact-icon" onClick={handlePhoneClick}>
                                            <img src={icon} alt="Call" />
                                        </div>
                                        <div className="contact-info">
                                            <span className="contact-label">Emergency Call</span>
                                            <div className="contact-numbers">
                                                <a href="tel:+919158450788">+91-9158450788</a>
                                                <a href="tel:+918766040262">+91-8766040262</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="banner-highlights">
                                    <div className="highlight-item">
                                        <span className="highlight-icon">🏥</span>
                                        <span>Expert Care</span>
                                    </div>
                                    <div className="highlight-item">
                                        <span className="highlight-icon">⚡</span>
                                        <span>Quick Diagnosis</span>
                                    </div>
                                    <div className="highlight-item">
                                        <span className="highlight-icon">💝</span>
                                        <span>Compassionate Treatment</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;