import React, { useEffect } from 'react';
import SmoothTyping from '../components/SmoothTyping';
import ProductCard from '../components/ProductCard'; // Import the new card
import WhyChooseUs from '../components/WhyChooseUs'; // Import the new component
import Threads from '../components/Threads'; // Import the new Threads component
import bg2 from '../assets/bg2.jpg';
import offwhiteImage from '../assets/offwhite.jpg';
import whychooseuscenter from '../assets/whychooseuscenter.png';
import copperImg from '../assets/prod1.jpg';
import aluminiumImg from '../assets/prod1.jpg';
import './Home.css';
import { useLocation } from 'react-router-dom';

const Home = () => {
    const location = useLocation();
    useEffect(() => {
        if (location.hash === '#products') {
            const section = document.getElementById('products');
            if (section) {
                setTimeout(() => {
                    section.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    return (
        <div className="home">
            {/* Hero Section */}
            <section
                className="hero section section-dark"
                style={{
                    backgroundImage: `url(${bg2})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                    backgroundRepeat: 'no-repeat',
                    height: '100vh', // Full viewport height
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    padding: '0 5%'
                }}
            >
                <div className="hero-text">
                    <SmoothTyping />
                </div>
            </section>

            {/* Company Overview Section */}
            <section className="company-overview-section section section-gray" style={{
                backgroundImage: `url(${offwhiteImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}>
                <div className="container">
                    <div className="company-content">
                        <div className="company-text">
                            <h1 className="company-title">ANISHK IMPEX PVT. LTD.</h1>
                            <p className="company-description">
                                Welcome to Anishk Impex Pvt. Ltd., a newly established venture in the global metal trade. We specialize in importing high-quality aluminum and copper scrap from around the world. Our offerings include premium aluminum ingots and copper CCR coils to meet diverse industrial needs. Trust us for reliable sourcing and committed service. We are Licensed and compliant with all environmental and trade regulations.
                            </p>

                            <div className="company-features">
                                <div className="feature-item">
                                    <div className="feature-icon">
                                        <span style={{ fontSize: '2rem' }}>♻️</span>
                                    </div>
                                    <div className="feature-content">
                                        <h3>Quality and sustainability</h3>
                                        <p>We ensure top-grade aluminium and copper scrap sourced from verified suppliers, supporting sustainable industry practices.</p>
                                    </div>
                                </div>

                                <div className="feature-item">
                                    <div className="feature-icon">
                                        <span style={{ fontSize: '2rem' }}>🚢</span>
                                    </div>
                                    <div className="feature-content">
                                        <h3>Wide import capability</h3>
                                        <p>Taint Tabor, Tense, UBC, and Mixed Aluminium Scrap available for various manufacturing and recycling industries.</p>
                                    </div>
                                </div>

                                <div className="feature-item">
                                    <div className="feature-icon">
                                        <span style={{ fontSize: '2rem' }}>🤝</span>
                                    </div>
                                    <div className="feature-content">
                                        <h3>Reliable partnerships</h3>
                                        <p>On-time delivery, transparent pricing, and a customer-first approach define our global trade relationships.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="company-image">
                            <img src={whychooseuscenter} alt="Global Trade Network" className="company-img" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section id="products" className="products-section section section-gray" style={{
                backgroundImage: `url(${offwhiteImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}>
                <div className="threads-background-container">
                    <Threads
                        color={[0, 0, 0]}
                        amplitude={1}
                        distance={0}
                        enableMouseInteraction={true}
                    />
                </div>
                <div className="container">
                    <h2 className="section-title" style={{ color: '#111' }}>Our Products</h2>
                    <div className="products-grid">
                        <ProductCard
                            image={copperImg}
                            title="Copper Products"
                            linkTo="/copper"
                            linkText="View Copper Products"
                        />
                        <ProductCard
                            image={aluminiumImg}
                            title="Aluminium Products"
                            linkTo="/aluminium"
                            linkText="View Aluminium Products"
                        />
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <WhyChooseUs />

        </div>
    );
};

export default Home;
