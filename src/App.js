import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Copper from './pages/Copper';
import Aluminium from './pages/Aluminium';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
import BodyClassController from './components/BodyClassController';
import './App.css';

const App = () => {
    return (
        <Router>
            <BodyClassController />
            <ScrollToTop />
            <div className="app-container">
                <Navbar />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/copper" element={<Copper />} />
                        <Route path="/aluminium" element={<Aluminium />} />
                    </Routes>
                </main>
                <Footer />
                <WhatsAppButton />
                <ScrollToTopButton />
            </div>
        </Router>
    );
};

export default App;
