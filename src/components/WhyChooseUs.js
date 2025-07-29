import React, { useRef } from "react";
import "./WhyChooseUs.css";
import { FaIndustry, FaCogs, FaClock, FaGlobe, FaUsers } from "react-icons/fa";
import containerImg from "../assets/container.jpg";
import VariableProximity from "./VariableProximity";

export default function WhyChooseUs() {
  const containerRef = useRef(null);
  
  return (
    <section className="wcu-section-imglayout" ref={containerRef}>
      <h2 className="wcu-img-title">
        <VariableProximity
          label="Why Choose Us"
          fromFontVariationSettings="'wght' 400, 'opsz' 8"
          toFontVariationSettings="'wght' 1000, 'opsz' 50"
          containerRef={containerRef}
          radius={150}
          falloff="exponential"
        />
      </h2>
      
      <div className="wcu-flex-mainrow">
        {/* Left column */}
        <div className="wcu-flex-col wcu-flex-left">
          <div className="wcu-point wcu-flex-topleft">
            <FaIndustry className="wcu-img-icon" style={{ color: "#FFA726" }} />
            <div>
              <h3>Specialized in Aluminium and Copper Scrap</h3>
              <p>Focused expertise in sourcing and supplying high grade aluminium and copper scrap of highest purity level.</p>
            </div>
          </div>
          
          <div className="wcu-point wcu-flex-bottomleft">
            <FaCogs className="wcu-img-icon" style={{ color: "#2979FF" }} />
            <div>
              <h3>Advanced Processing Facilities</h3>
              <p>Consistent quality control with modern tools for cutting, cleaning, and sorting aluminium and copper.</p>
            </div>
          </div>
        </div>
        
        {/* Center image */}
        <div className="wcu-flex-centerimg">
          <img src={containerImg} alt="ANISHK IMPEX" className="wcu-img-main wcu-img-main-large" />
        </div>
        
        {/* Right column */}
        <div className="wcu-flex-col wcu-flex-right">
          <div className="wcu-point wcu-flex-topright">
            <FaClock className="wcu-img-icon" style={{ color: "#66BB6A" }} />
            <div>
              <h3>Timely Service with Honest Pricing</h3>
              <p>Fast deliveries for low downtime and transparent pricing with no hidden costs.</p>
            </div>
          </div>
          
          <div className="wcu-point wcu-flex-bottomright">
            <FaGlobe className="wcu-img-icon" style={{ color: "#90A4AE" }} />
            <div>
              <h3>Domestic & International Reach</h3>
              <p>Trusted by clients across local and global markets, compliant with import and custom regulations.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom center row */}
      <div className="wcu-flex-bottomrow">
        <div className="wcu-point wcu-flex-bottomcenter">
          <FaUsers className="wcu-img-icon" style={{ color: "#8BC34A" }} />
          <div>
            <h3>Customer Focused Approach</h3>
            <p>Custom solutions based on metal specifications and volume needed. Professionals ready to support with orders, logistics and any other queries.</p>
          </div>
        </div>
      </div>
    </section>
  );
}