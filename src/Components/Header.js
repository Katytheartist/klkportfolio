import React from 'react';
import './Header.css';  
import Navbar from './Navbar';
import colorful from './pix/colorful-2174045_1280.png'

const Header = () => {
  return (
    <section className="hero"
    style={{ backgroundImage: `url(${colorful})`}}
    >
        <div className="header-container">
            <nav className="navbar-container">
                <Navbar />
            </nav>
            <div className="hero-content">
                <h1 className="hero-title">KATY L. KANE</h1>
                <h2 className="job-title">FULL STACK DEVELOPER</h2>
            </div>
        </div>
    </section>
  );
}

export default Header;
