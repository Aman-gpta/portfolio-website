import React from 'react';
import { ShieldCheck, Package, Handshake } from 'lucide-react';
import containerImage from '../assets/container.jpg';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    return (
        <section className="wcu-section-new">
            <div className="wcu-container-new">
                <div className="wcu-content-column">
                    <h2 className="wcu-main-heading">What Sets Us Apart ?</h2>
                    <p className="wcu-paragraph">
                        We are a fast-growing company in the metal import and trading industry.
                    </p>
                    <p className="wcu-paragraph">
                        At Anishk Impex, we are committed to delivering high-quality aluminium scrap sourced from across the globe.
                    </p>
                    <p className="wcu-paragraph">
                        Our product line includes aluminium ingots and cooper CR coils, ensuring reliable solutions for industrial manufacturers across India.
                    </p>
                    
                    <div className="wcu-features-container">
                        <div className="wcu-feature-item-new">
                            <div className="wcu-icon-wrapper-new">
                                <ShieldCheck size={32} />
                            </div>
                            <div className="wcu-feature-text">
                                <h3>Quality & Assurance</h3>
                                <p>Every shipment is thoroughly inspected to maintain international standards and consistent quality.</p>
                            </div>
                        </div>
                        <div className="wcu-feature-item-new">
                            <div className="wcu-icon-wrapper-new">
                                <Package size={32} />
                            </div>
                            <div className="wcu-feature-text">
                                <h3>Diverse Product Portfolio</h3>
                                <p>From raw aluminum scrap to refined ingots and copper CCR coils--we serve your every metal need.</p>
                            </div>
                        </div>
                        <div className="wcu-feature-item-new">
                            <div className="wcu-icon-wrapper-new">
                                <Handshake size={32} />
                            </div>
                            <div className="wcu-feature-text">
                                <h3>Trusted Service & Support</h3>
                                <p>We value long-term business relationships by providing transparent deals and dependable delivery schedules.</p>
                            </div>
                        </div>
                    </div>

                    <div className="wcu-button-wrapper">
                        <button className="wcu-know-more-btn">Know More</button>
                    </div>
                </div>
                <div className="wcu-image-column">
                    <img src={containerImage} alt="Shipping container with Aluminium text" className="wcu-container-image" />
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs; 