import React from "react";
import "./WhyChooseUs.css";
import { FaClock, FaBolt, FaLeaf, FaLightbulb, FaMoneyBillWave, FaWrench } from "react-icons/fa";
import containerImg from "../assets/container.jpg";

export default function WhyChooseUs() {
  return (
    <section className="wcu-section-imglayout">
      <h2 className="wcu-img-title">Why Choose Us</h2>
      <div className="wcu-img-grid">
        {/* Top Left */}
        <div className="wcu-img-feature wcu-img-feature-topleft">
          <FaClock className="wcu-img-icon" style={{ color: "#FFA726" }} />
          <div>
            <h3>Leading the Way in Power</h3>
            <p>Experience excellence with our high-quality, affordable products</p>
          </div>
        </div>
        {/* Top Right */}
        <div className="wcu-img-feature wcu-img-feature-topright">
          <FaMoneyBillWave className="wcu-img-icon" style={{ color: "#66BB6A" }} />
          <div>
            <h3>Customer Satisfaction is Our Priority</h3>
            <p>We go above and beyond to ensure our customers are fully satisfied with our products</p>
          </div>
        </div>
        {/* Bottom Left */}
        <div className="wcu-img-feature wcu-img-feature-bottomleft">
          <FaBolt className="wcu-img-icon" style={{ color: "#2979FF" }} />
          <div>
            <h3>Unmatched Quality and Affordability</h3>
            <p>We deliver top-notch products that won’t break the bank, ensuring value for your investment</p>
          </div>
        </div>
        {/* Bottom Right */}
        <div className="wcu-img-feature wcu-img-feature-bottomright">
          <FaWrench className="wcu-img-icon" style={{ color: "#90A4AE" }} />
          <div>
            <h3>Reliable Performance You Can Trust</h3>
            <p>Count on our power electronics solutions for consistent performs and long-term reliability</p>
          </div>
        </div>
        {/* Bottom Center */}
        <div className="wcu-img-feature wcu-img-feature-bottomcenter">
          <FaLeaf className="wcu-img-icon" style={{ color: "#8BC34A" }} />
          <FaLightbulb className="wcu-img-icon" style={{ color: "#FFD600", marginLeft: 8 }} />
          <div>
            <h3>Innovation Driving Sustainable Power</h3>
          </div>
        </div>
        {/* Center Image */}
        <div className="wcu-img-center wcu-img-center-mobile-last">
          <img src={containerImg} alt="ANISHK IMPEX" className="wcu-img-main" />
        </div>
      </div>
    </section>
  );
}