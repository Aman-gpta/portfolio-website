import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './BackButton.css';

const BackButton = ({ className = '' }) => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div className="back-button-container">
            <button 
                onClick={handleGoBack}
                className={`back-button ${className}`}
                aria-label="Go back to previous page"
            >
                <ArrowLeft className="back-button-icon" size={20} />
                <span className="back-button-text">Back</span>
            </button>
        </div>
    );
};

export default BackButton;