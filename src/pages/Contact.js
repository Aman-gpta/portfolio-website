import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import BackButton from '../components/BackButton';
import contactHeroImage from '../assets/gif.gif';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, company, message } = formData;
        const subject = encodeURIComponent(`Quote Request from ${name}`);
        const body = encodeURIComponent(
            `Name: ${name}\n` +
            `Email: ${email}\n` +
            `Company: ${company}\n\n` +
            `Message:\n${message}`
        );
        window.location.href = `mailto:anishkimpex@gmail.com?subject=${subject}&body=${body}`;
    };

    const contactInfo = [
        {
            icon: <Mail size={24} />,
            title: "Email",
            info: "anishkimpex@gmail.com",
            link: "mailto:anishkimpex@gmail.com"
        },
        {
            icon: <Phone size={24} />,
            title: "Phone",
            info: "+91-9887973000",
            link: "tel:+91-9887973000"
        },
        {
            icon: <MapPin size={24} />,
            title: "Working Office",
            info: "1st Floor,  SB-10, Narayan Sagar, Narayan Vihar, Gopalpura Bypass, Ajmer, Road, Jaipur, Rajasthan 302020",
            link: "https://maps.app.goo.gl/2bZWAUnjr52NWi9W6?g_st=iwb"
        }
    ];

    return (
        <div className="contact">
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="container">
                    <BackButton />
                    <div className="contact-hero-content">
                        <div className="hero-text">
                            <h1>Contact Us</h1>
                            <p className="hero-subtitle">Do you have a question regarding aluminium products or need help?</p>
                            <p className="hero-description">
                                We're here to help! Our aluminium experts are ready to provide you with the 
                                knowledge and help you need to make informed decisions about aluminium and copper scrap, 
                                sourcing, and other metal equipment. Contact us today to get started 
                                on your metal sourcing journey.
                            </p>
                        </div>
                        <div className="hero-image">
                            <img src={contactHeroImage} alt="Contact Us" className="contact-hero-img" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-main section">
                <div className="container contact-page-container">
                    <div className="contact-content">
                        {/* Contact Form */}
                        <div className="contact-form-container">
                            <h2>Request Quote</h2>
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Your full name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="company">Company</label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            placeholder="Your company name (optional)"
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="6"
                                        placeholder="Please describe your requirements, timeline, and any specific details..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="submit-btn"
                                >
                                    <Send size={20} />
                                    Get Quote
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="contact-info">
                            <h2>Contact Information</h2>
                            <div className="contact-details">
                                {contactInfo.map((item, index) => (
                                    <a key={index} href={item.link} className="contact-item">
                                        <div className="contact-icon">
                                            {item.icon}
                                        </div>
                                        <div className="contact-text">
                                            <h4>{item.title}</h4>
                                            <p>{item.info}</p>
                                        </div>
                                    </a>
                                ))}
                                <div className="contact-item-static">
                                    <div className="contact-icon">
                                        <MapPin size={24} />
                                    </div>
                                    <div className="contact-text">
                                        <h4>Registered Office</h4>
                                        <p>201, Shree Ram Residency, P.No. 3-4, Sankhla Colony, Tonk Road, Jaipur (Raj.)
Pincode- 302015</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="map-section">
                <div className="container">
                    <h2 className="map-title">Find Our Working Office</h2>
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3557.8!2d75.719403!3d26.862778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDUxJzQ2LjAiTiA3NcKwNDMnMDkuOSJF!5e0!3m2!1sen!2sin!4v1640995200000!5m2!1sen!2sin"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Anishk Impex Working Office Location"
                        ></iframe>
                    </div>
                    <div className="map-info">
                        <div className="office-details">
                            <h3>Working Office Address</h3>
                            <p>1st Floor, SB-10, Narayan Sagar, Narayan Vihar, Gopalpura Bypass, Ajmer Road, Jaipur, Rajasthan 302020</p>
                            <a 
                                href="https://maps.app.goo.gl/2bZWAUnjr52NWi9W6?g_st=iwb" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="directions-btn"
                            >
                                Get Directions
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
