import React from 'react';
import './About.css';
import aboutUsImage from '../assets/aboutusimage.png';
import manishImage from '../assets/manish.png.jpg';
import sangeetaImage from '../assets/sangeeta.png.jpg';
import komalImage from '../assets/komal.png.jpg';

const About = () => {

    const directors = [
        {
            name: "Manish Vijay",
            position: "Managing Director",
            image: manishImage,
            description: "With over 15 years of experience in manufacturing and distribution within the minerals and pharmaceutical industries, Mr. Manish Vijay provides valuable strategic direction to the company. His deep industry insight and practical knowledge ensure strong foundations and steady growth for the organization."
        },
        {
            name: "Komal Vijay",
            position: "Director",
            image: komalImage,
            description: "A B.Tech graduate with a forward-thinking approach, Ms. Komal Vijay brings energy and innovation to Anishk Impex Pvt. Ltd. She leads the company's import operations with a sharp focus on quality and efficiency, helping position the business as a trusted name in the aluminium scrap industry across India."
        },
        {
            name: "Sangeeta Gupta",
            position: "Director",
            image: sangeetaImage,
            description: "At this advanced stage of life, Ms. Sangeeta Gupta brings wisdom and a steady presence to the leadership team. While she does not have a business background, her guidance and support contribute to the company's values of integrity, responsibility, and long-term vision."
        }
    ];

    return (
        <div className="about">
            {/* Hero Section */}
            <section className="about-hero section section-dark">
                {/* Dark overlay for better text readability */}
                <div className="hero-overlay"></div>

                {/* Decorative background elements */}
                <div className="diagonal-lines"></div>
                <div className="about-background-curves">
                    <div className="curve-1"></div>
                    <div className="curve-2"></div>
                    <div className="curve-3"></div>
                    <div className="curve-4"></div>
                </div>

                {/* Decorative background elements */}
                <div className="diagonal-lines"></div>
                <div className="about-background-curves">
                    <div className="curve-1"></div>
                    <div className="curve-2"></div>
                    <div className="curve-3"></div>
                    <div className="curve-4"></div>
                </div>

                <div className="container">
                    <div className="about-hero-content">
                        <div className="about-image">
                            <div className="about-image-container">
                                <img src={aboutUsImage} alt="About Us" className="about-img company-logo" />
                            </div>
                        </div>
                        <div className="about-text">
                            <h1>About Us</h1>
                            <p className="about-intro">
                                At Anishk Impex Pvt. Ltd. we specialize in the import and distribution of high-quality aluminium scrap. As a newly established company, we bring fresh energy, integrity, and efficiency to the metal recycling and supply industry. Our goal is to support manufacturers, recyclers, and industries by providing reliable, sustainable, and cost-effective aluminium scrap sourced from trusted global partners.
                            </p>
                            <p>
                                We are committed to building long-term relationships through transparent business practices, timely delivery, and a customer-first approach. With a clear focus on quality and environmental responsibility, we aim to contribute to a greener future while meeting the growing demands of the metal industry.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission and Vision Section */}
            <section className="mission-vision section section-light">
                <div className="container">
                    <div className="mission-vision-content">
                        <div className="vision-section">
                            <h3 className="section-heading">Vision:</h3>
                            <p className="section-text">
                                Our vision is to become a leading force in India's sustainable industrial growth by becoming a reliable importer of high-quality aluminium and copper scrap, connecting global resources with local manufacturing needs. We aspire to support cleaner production, and promote a circular economy that benefits both business and environment.
                            </p>
                        </div>

                        <div className="mission-section">
                            <h3 className="section-heading">Mission:</h3>
                            <p className="section-text">
                                To support sustainable manufacturing, reduce environmental impact, and foster long term partnerships built on trust, transparency and efficiency. To focus on regular and bulk supply options for our clients. We aim to bridge the gap between international suppliers and domestic industries.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Directors Section */}
            <section className="directors section section-gray">
                {/* Subtle diagonal background pattern */}
                <div className="diagonal-lines"></div>

                <div className="container">
                    <h2 className="section-title">Our Directors</h2>
                    <div className="directors-grid">
                        {directors.map((director, index) => (
                            <div key={index} className="director-card">
                                <div className="director-image">
                                    {director.name === "Manish Vijay" ? (
                                        <img
                                            src={manishImage}
                                            alt={director.name}
                                            className="director-img"
                                        />
                                    ) : director.name === "Komal Vijay" ? (
                                        <img
                                            src={komalImage}
                                            alt={director.name}
                                            className="director-img"
                                        />
                                    ) : director.name === "Sangeeta Gupta" ? (
                                        <img
                                            src={sangeetaImage}
                                            alt={director.name}
                                            className="director-img"
                                        />
                                    ) : (
                                        <div className="director-placeholder">
                                            {/* Using initials for placeholder images */}
                                            {director.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                    )}
                                </div>
                                <div className="director-content">
                                    <h3>{director.name}</h3>
                                    <h4>{director.position}</h4>
                                    <p>{director.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
