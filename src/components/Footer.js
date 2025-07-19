import React from 'react';
import './Footer.css';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin, Award, Shield, Recycle } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/Gemini_Generated_Image_ljsew6ljsew6ljse.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            icon: <Mail size={20} />,
            name: "Email",
            url: "mailto:anishkimpex@gmail.com"
        },
        {
            icon: <Phone size={20} />,
            name: "Call",
            url: "tel:+919887973000"
        },
        {
            icon: <Linkedin size={20} />,
            name: "LinkedIn",
            url: "https://linkedin.com/your-profile"
        },
        {
            icon: <Instagram size={20} />,
            name: "Instagram",
            url: "https://instagram.com/your-profile"
        }
    ];

    const quickLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "Aluminium", path: "/aluminium" },
        { name: "Copper", path: "/copper" }
    ];

    const highlights = [
        {
            icon: <Recycle size={20} />,
            text: "Driven by sustainability"
        },
        {
            icon: <Shield size={20} />,
            text: "Powered by trust"
        },
        {
            icon: <Award size={20} />,
            text: "Certified for quality"
        }
    ];

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    {/* Footer Brand */}
                    <div className="footer-section">
                        <div className="footer-brand">
                            <div className="footer-logo">
                                <img src={logoImage} alt="Anishk Impex" className="footer-logo-img" />
                            </div>
                            <p>
                                We are leading providers of aluminium and copper scrap solutions, dedicated to ethical recycling and consistent quality. Driven by sustainability. Powered by trust. Certified for quality. Serving industries across India and beyond.
                            </p>
                        </div>
                        <div className="footer-social">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-social-link"
                                    title={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link to={link.path}>{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="footer-section">
                        <h4>Services</h4>
                        <ul className="footer-links">
                            <li><span>Aluminium Scrap Trading</span></li>
                            <li><span>Copper Scrap Trading</span></li>
                            <li><span>Recycling Solutions</span></li>
                            <li><span>Industrial Materials</span></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-section contact-section">
                        <h4>Get In Touch</h4>
                        <div className="footer-contact">
                            <p>
                                <Mail size={16} />
                                <span>anishkimpex@gmail.com</span>
                            </p>
                            <p>
                                <Phone size={16} />
                                <span>+91-9887973000</span>
                            </p>
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                                <span>Mon-Sat, 9am to 6pm</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="footer-copyright">
                        <p>© {currentYear} ANISHK IMPEX PVT. LTD. All rights reserved.</p>
                    </div>
                    <div className="footer-legal">
                        <a href="#privacy">Privacy Policy</a>
                        <a href="#terms">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
