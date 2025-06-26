import React, { useEffect } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './TreatmentSection.scss';
import { useLocation } from 'react-router-dom';

const TreatmentSection = () => {
    const location = useLocation();

    useEffect(() => {
        // Check if there's a hash in the URL and scroll to that treatment
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'start',
                        inline: 'nearest'
                    });
                }, 100);
            }
        }
    }, [location]);

    const treatments = [
        {
            id: 'asthma-and-allergy',
            title: 'Asthma & Allergy',
            image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
            description: 'Comprehensive care for asthma and allergic conditions affecting your respiratory system.',
            symptoms: [
                'Wheezing or whistling sound when breathing',
                'Shortness of breath during activities',
                'Chest tightness or pain',
                'Persistent cough, especially at night',
                'Difficulty sleeping due to breathing problems'
            ],
            treatment: 'Our treatment approach includes comprehensive allergy testing, pulmonary function tests, and personalized medication plans. We focus on identifying triggers and developing long-term management strategies.'
        },
        {
            id: 'branchoscopy',
            title: 'Bronchoscopy',
            image: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=800',
            description: 'Advanced diagnostic procedure to examine airways and diagnose lung conditions.',
            symptoms: [
                'Persistent cough with unknown cause',
                'Blood in sputum (hemoptysis)',
                'Abnormal chest X-ray findings',
                'Suspected lung infection or tumor',
                'Foreign body in airways'
            ],
            treatment: 'The procedure is performed under local anesthesia with sedation. We use state-of-the-art equipment to ensure patient comfort and accurate diagnosis.'
        },
        {
            id: 'bronchitis',
            title: 'Bronchitis',
            image: 'https://images.pexels.com/photos/4167664/pexels-photo-4167664.jpeg?auto=compress&cs=tinysrgb&w=800',
            description: 'Treatment for acute and chronic bronchitis with comprehensive respiratory care.',
            symptoms: [
                'Persistent cough with mucus production',
                'Chest discomfort or soreness',
                'Fatigue and weakness',
                'Shortness of breath',
                'Low-grade fever (in acute cases)'
            ],
            treatment: 'Treatment includes bronchodilators, anti-inflammatory medications, and pulmonary rehabilitation. We focus on reducing inflammation and improving lung function.'
        },
        {
            id: 'chest-diseases',
            title: 'Chest Diseases',
            image: 'https://images.pexels.com/photos/4167735/pexels-photo-4167735.jpeg?auto=compress&cs=tinysrgb&w=800',
            description: 'Comprehensive diagnosis and management of various chest-related conditions.',
            symptoms: [
                'Chest pain or discomfort',
                'Difficulty breathing',
                'Persistent cough',
                'Abnormal chest sounds',
                'Reduced exercise tolerance'
            ],
            treatment: 'We use comprehensive diagnostic approaches including imaging studies, pulmonary function tests, and laboratory analysis for accurate diagnosis and effective treatment.'
        },
        {
            id: 'chest-infection',
            title: 'Chest Infection',
            image: 'https://images.pexels.com/photos/4167844/pexels-photo-4167844.jpeg?auto=compress&cs=tinysrgb&w=800',
            description: 'Expert treatment for various types of chest infections and respiratory complications.',
            symptoms: [
                'Productive cough with colored sputum',
                'Fever and chills',
                'Chest pain when breathing or coughing',
                'Shortness of breath',
                'General malaise and fatigue'
            ],
            treatment: 'Treatment includes appropriate antibiotic therapy, supportive care, and monitoring for complications. We ensure complete recovery through comprehensive follow-up care.'
        },
        {
            id: 'copd',
            title: 'COPD',
            image: 'https://images.pexels.com/photos/4167871/pexels-photo-4167871.jpeg?auto=compress&cs=tinysrgb&w=800',
            description: 'Comprehensive management of Chronic Obstructive Pulmonary Disease.',
            symptoms: [
                'Progressive shortness of breath',
                'Chronic cough with sputum',
                'Wheezing and chest tightness',
                'Frequent respiratory infections',
                'Reduced exercise capacity'
            ],
            treatment: 'Our approach includes bronchodilator therapy, pulmonary rehabilitation, oxygen therapy when needed, and comprehensive lifestyle modifications.'
        },
        {
            id: 'cancer-diagnosis',
            title: 'Cancer Diagnosis',
            image: 'https://images.pexels.com/photos/4167901/pexels-photo-4167901.jpeg?auto=compress&cs=tinysrgb&w=800',
            description: 'Advanced diagnostic services for early detection of lung and thoracic cancers.',
            symptoms: [
                'Persistent cough that worsens',
                'Blood in sputum',
                'Chest pain that worsens with breathing',
                'Unexplained weight loss',
                'Shortness of breath'
            ],
            treatment: 'We use advanced imaging techniques, bronchoscopy, and tissue sampling for accurate diagnosis. Early detection and staging are crucial for treatment planning.'
        },
        {
            id: 'diagnostic-rooms',
            title: 'Diagnostic Rooms',
            image: 'https://images.pexels.com/photos/4167932/pexels-photo-4167932.jpeg?auto=compress&cs=tinysrgb&w=800',
            description: 'State-of-the-art diagnostic facilities for comprehensive respiratory evaluation.',
            symptoms: [
                'Need for pulmonary function testing',
                'Respiratory symptom evaluation',
                'Pre-operative assessment',
                'Occupational lung disease screening',
                'Exercise tolerance testing'
            ],
            treatment: 'We provide comprehensive diagnostic services including pulmonary function tests, imaging studies, and specialized respiratory assessments using state-of-the-art equipment.'
        },
        {
            id: 'ild-and-pulmonary-fibrosis',
            title: 'ILD & Pulmonary Fibrosis',
            image: 'https://images.pexels.com/photos/4167963/pexels-photo-4167963.jpeg?auto=compress&cs=tinysrgb&w=800',
            description: 'Specialized care for interstitial lung disease and pulmonary fibrosis.',
            symptoms: [
                'Progressive shortness of breath',
                'Dry, persistent cough',
                'Fatigue and weakness',
                'Clubbing of fingers',
                'Reduced exercise tolerance'
            ],
            treatment: 'Treatment includes anti-fibrotic medications, immunosuppressive therapy, pulmonary rehabilitation, and oxygen therapy as needed.'
        },
        {
            id: 'pleural-effusion',
            title: 'Pleural Effusion',
            image: 'https://images.pexels.com/photos/4167994/pexels-photo-4167994.jpeg?auto=compress&cs=tinysrgb&w=800',
            description: 'Expert diagnosis and treatment of fluid accumulation around the lungs.',
            symptoms: [
                'Shortness of breath',
                'Chest pain, especially when breathing',
                'Dry cough',
                'Feeling of chest heaviness',
                'Reduced exercise capacity'
            ],
            treatment: 'We use ultrasound-guided thoracentesis for fluid removal and analysis. Treatment addresses the underlying cause and prevents recurrence.'
        },
        {
            id: 'post-covid-care',
            title: 'Post Covid Care',
            image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
            description: 'Comprehensive rehabilitation for lingering post-COVID respiratory symptoms.',
            symptoms: [
                'Persistent shortness of breath',
                'Chronic fatigue',
                'Reduced exercise tolerance',
                'Persistent cough',
                'Chest tightness'
            ],
            treatment: 'Our approach includes respiratory therapy, lung function testing, gradual exercise programs, and comprehensive rehabilitation based on individual needs.'
        },
        {
            id: 'pneumonia',
            title: 'Pneumonia',
            image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
            description: 'Expert care for pneumonia with rapid diagnosis and effective treatment.',
            symptoms: [
                'High fever and chills',
                'Productive cough with colored sputum',
                'Chest pain when breathing',
                'Shortness of breath',
                'Fatigue and weakness'
            ],
            treatment: 'Treatment includes appropriate antibiotic therapy, supportive care, and monitoring for complications. We ensure complete recovery through comprehensive follow-up.'
        },
        {
            id: 'pulmonary-function-tests',
            title: 'Pulmonary Function Tests',
            image: 'https://images.pexels.com/photos/4386468/pexels-photo-4386468.jpeg?auto=compress&cs=tinysrgb&w=800',
            description: 'Comprehensive lung function testing for accurate respiratory assessment.',
            symptoms: [
                'Unexplained shortness of breath',
                'Chronic cough',
                'Reduced exercise tolerance',
                'Occupational exposure concerns',
                'Pre-operative assessment needs'
            ],
            treatment: 'We perform comprehensive spirometry, lung volume measurements, and diffusion capacity testing using state-of-the-art equipment with experienced technicians.'
        },
        {
            id: 'sleep-related-disorder',
            title: 'Sleep Related Disorder',
            image: 'https://images.pexels.com/photos/4386469/pexels-photo-4386469.jpeg?auto=compress&cs=tinysrgb&w=800',
            description: 'Comprehensive evaluation and treatment of sleep-related breathing disorders.',
            symptoms: [
                'Loud snoring',
                'Witnessed breathing interruptions',
                'Excessive daytime sleepiness',
                'Morning headaches',
                'Difficulty concentrating'
            ],
            treatment: 'We provide overnight sleep studies, CPAP therapy, and comprehensive treatment plans for various sleep-related breathing disorders.'
        },
        {
            id: 'tobacco-and-smoking-cessation',
            title: 'Tobacco & Smoking Cessation',
            image: 'https://images.pexels.com/photos/4386470/pexels-photo-4386470.jpeg?auto=compress&cs=tinysrgb&w=800',
            description: 'Comprehensive smoking cessation program with counseling and support.',
            symptoms: [
                'Desire to quit smoking',
                'Nicotine withdrawal symptoms',
                'Smoking-related health concerns',
                'Repeated failed quit attempts',
                'Need for professional support'
            ],
            treatment: 'Our program includes counseling, nicotine replacement therapy, prescription medications, and ongoing support to help you quit successfully.'
        },
        {
            id: 'tuberculosis-treatment',
            title: 'Tuberculosis Treatment',
            image: 'https://images.pexels.com/photos/4386471/pexels-photo-4386471.jpeg?auto=compress&cs=tinysrgb&w=800',
            description: 'Comprehensive TB diagnosis and treatment following national guidelines.',
            symptoms: [
                'Persistent cough lasting weeks',
                'Blood in sputum',
                'Chest pain',
                'Unexplained weight loss',
                'Night sweats and fever'
            ],
            treatment: 'We provide accurate TB diagnosis using advanced testing methods and comprehensive treatment following national TB guidelines.'
        }
    ];

    return (
        <section className='treatment-section pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <SectionTitle 
                    subTitle="TREATMENTS"
                    title="Comprehensive Treatment Options"
                    description="Explore our complete range of specialized treatments for respiratory and chest conditions. Each treatment is designed to provide personalized care for your specific needs."
                />

                <div className="treatments-container">
                    {treatments.map((treatment, index) => (
                        <div 
                            key={treatment.id} 
                            id={treatment.id}
                            className="treatment-card"
                            data-aos="fade-up" 
                            data-aos-duration="1000"
                            data-aos-delay={index * 50}
                        >
                            <div className="row align-items-center">
                                <div className="col-lg-4 col-md-5">
                                    <div className="treatment-image">
                                        <img src={treatment.image} alt={treatment.title} />
                                        <div className="treatment-number">
                                            {String(index + 1).padStart(2, '0')}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-8 col-md-7">
                                    <div className="treatment-content">
                                        <div className="treatment-header">
                                            <h3>{treatment.title}</h3>
                                            <p className="treatment-description">{treatment.description}</p>
                                        </div>
                                        
                                        <div className="treatment-details">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="symptoms-section">
                                                        <h4>Common Symptoms</h4>
                                                        <ul className="symptoms-list">
                                                            {treatment.symptoms.slice(0, 3).map((symptom, idx) => (
                                                                <li key={idx}>{symptom}</li>
                                                            ))}
                                                            {treatment.symptoms.length > 3 && (
                                                                <li className="more-symptoms">
                                                                    +{treatment.symptoms.length - 3} more symptoms
                                                                </li>
                                                            )}
                                                        </ul>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-lg-6">
                                                    <div className="treatment-approach">
                                                        <h4>Treatment Approach</h4>
                                                        <p>{treatment.treatment}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TreatmentSection;