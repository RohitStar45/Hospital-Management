import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Navbar from '../../components/Navbar/Navbar';
import './Contactus.scss';
import ContactForm from '../../components/ContactForm/ContactForm';
import Footer from '../../sections/Footer/Footer';
import contactImage from '../../assets/contactusimg.jpg';

const Contactus = () => {
    return (
        <>
            <Navbar />
            <section className='contact-hero-section'>
                <div className="container">
                    <div className="contact-hero-content">
                        <SectionTitle 
                            subTitle="GET IN TOUCH"
                            title="Contact Our Expert Team"
                            description="We're here to help with all your respiratory health needs. Reach out for appointments, inquiries, or more information about our specialized services."
                        />
                    </div>
                </div>
            </section>

            <section className='contact-main-section'>
                <div className="container">
                    {/* Contact Form Section */}
                    <div className="contact-form-wrapper">
                        <div className="contact-form-header">
                            <h2>Book Your Appointment</h2>
                            <p>Schedule your consultation with our expert pulmonologist. We're committed to providing personalized care for all your respiratory health needs.</p>
                        </div>
                        <ContactForm />
                    </div>

                    {/* Contact Image Section */}
                    <div className="contact-image-wrapper">
                        <div className="contact-image-section">
                            <div className="contact-image">
                                <img src={contactImage} alt="Contact Us" />
                                <div className="contact-image-overlay">
                                    <div className="overlay-content">
                                        <h4>Expert Respiratory Care</h4>
                                        <p>Professional consultation and treatment for all your chest and lung health needs</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Information Cards */}
                        <div className="contact-info-cards">
                            <div className="info-card">
                                <div className="info-icon">
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div className="info-content">
                                    <h4>Phone Numbers</h4>
                                    <p>+91-9158450788</p>
                                    <p>+91-8766040262</p>
                                </div>
                            </div>

                            <div className="info-card">
                                <div className="info-icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="info-content">
                                    <h4>Clinic Address</h4>
                                    <p>Office No. 017, First Floor, A-Building, Downtown City Vista, Fountain Road, Opp. Victorious Kids Educares, Kharadi, Pune – 411014</p>
                                </div>
                            </div>

                            <div className="info-card">
                                <div className="info-icon">
                                    <i className="fas fa-clock"></i>
                                </div>
                                <div className="info-content">
                                    <h4>Working Hours</h4>
                                    <p>Mon, Wed, Thu: 6:00 PM - 9:30 PM</p>
                                    <p>Tue, Fri: 10:00 AM - 12:00 PM & 7:00 PM - 9:30 PM</p>
                                    <p>Sat: 10:00 AM - 12:00 PM & 6:00 PM - 9:30 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer />
        </>
    );
};

export default Contactus;