import React, { useEffect, useRef } from 'react';
import SmoothTyping from '../components/SmoothTyping';
import ProductCard from '../components/ProductCard'; // Import the new card
import WhyChooseUs from '../components/WhyChooseUs'; // Import the new component
import Threads from '../components/Threads'; // Import the new Threads component
import SplitText from '../components/SplitText'; // Import the SplitText component
import { Particles } from '../components/Particles'; // Import the Particles component
import VariableProximity from '../components/VariableProximity'; // Import VariableProximity
import bg2 from '../assets/bg2.jpg';
import offwhiteImage from '../assets/offwhite.jpg';
import whychooseuscenter from '../assets/whychooseuscenter.png';
import copperImg from '../assets/prod1.jpg';
import aluminiumImg from '../assets/prod1.jpg';
import './Home.css';
import { useLocation } from 'react-router-dom';

const Home = () => {
    const location = useLocation();
    const productsContainerRef = useRef(null);
    
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

            {/* Main Content with Particles Background */}
            <div style={{ position: 'relative' }}>
                {/* Particles Background for all sections except hero and footer */}
                <Particles
                    className="fixed inset-0 pointer-events-none"
                    style={{ 
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 10,
                        pointerEvents: 'none'
                    }}
                    quantity={16}
                    ease={40}
                    color="#ffffff"
                    size={2}
                    staticity={30}
                    refresh={false}
                />

                {/* Company Overview Section */}
                <section className="company-overview-section section section-gray" style={{
                    backgroundImage: `url(${offwhiteImage})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                    position: 'relative',
                    zIndex: 2
                }}>
                    <div className="container">
                        <div className="company-content">
                            <div className="company-text">
                                <SplitText
                                    text="ANISHK IMPEX PVT. LTD."
                                    className="company-title"
                                    delay={80}
                                    duration={0.8}
                                    ease="power3.out"
                                    splitType="chars"
                                    from={{ opacity: 0, y: 50, rotationX: -90 }}
                                    to={{ opacity: 1, y: 0, rotationX: 0 }}
                                    threshold={0.2}
                                    rootMargin="-50px"
                                    textAlign="left"
                                    onLetterAnimationComplete={() => console.log('ANISHK IMPEX animation complete!')}
                                />
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
                    backgroundAttachment: 'fixed',
                    position: 'relative',
                    zIndex: 2
                }} ref={productsContainerRef}>
                    <div className="threads-background-container">
                        <Threads
                            color={[0, 0, 0]}
                            amplitude={1}
                            distance={0}
                            enableMouseInteraction={true}
                        />
                    </div>
                    <div className="container">
                        <h2 className="section-title" style={{ color: '#111' }}>
                            <VariableProximity
                                label="Our Products"
                                fromFontVariationSettings="'wght' 400, 'opsz' 8"
                                toFontVariationSettings="'wght' 1000, 'opsz' 50"
                                containerRef={productsContainerRef}
                                radius={150}
                                falloff="exponential"
                            />
                        </h2>
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
                <div style={{ position: 'relative', zIndex: 2 }}>
                    <WhyChooseUs />
                </div>
            </div>
        </div>
    );
};

export default Home;
