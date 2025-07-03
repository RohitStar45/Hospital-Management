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
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-xl-8">
                            <div className="banner-text" data-aos="fade-up" data-aos-duration="2000">
                                <div className="banner-badge">
                                    <span>🫁 Expert Respiratory Care</span>
                                </div>
                                
                                <h1>Your most trusted health partner</h1>
                                
                                <p className="banner-subtitle">
                                    Providing comprehensive chest and respiratory care with 19+ years of expertise. 
                                    Your journey to better breathing starts here.
                                </p>

                                <div className="banner-actions">
                                    <div className="theme-btn">
                                        <button onClick={handleBookAppointment}>
                                            <span>
                                                Book an appointment
                                            </span>
                                        </button>
                                    </div>

                                    <div className="banner-call">
                                        <div className='icon' onClick={handlePhoneClick}>
                                            <img src={icon} alt="icon" />
                                        </div>
                                        <div className='call-text'>
                                            <p>24/7 Support Available</p>
                                            <h6 onClick={handlePhoneClick}>+91-9158450788</h6>
                                            <h6 onClick={() => window.open('tel:+918766040262', '_self')}>+91-8766040262</h6>
                                        </div>
                                    </div>
                                </div>

                                <div className="banner-features">
                                    <div className="feature-item">
                                        <span className="feature-icon">🏥</span>
                                        <span>Modern Clinic</span>
                                    </div>
                                    <div className="feature-item">
                                        <span className="feature-icon">⚡</span>
                                        <span>Quick Diagnosis</span>
                                    </div>
                                    <div className="feature-item">
                                        <span className="feature-icon">💝</span>
                                        <span>Compassionate Care</span>
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