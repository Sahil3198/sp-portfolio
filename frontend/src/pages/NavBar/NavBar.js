import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const MainNavigation = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <nav className="navbar navbar-expand-lg" id="navbar_section">
      <div className="container">
        <NavLink className="navbar-brand" to="/"><span>S</span>ahil</NavLink>
        <button className="navbar-toggler" type="button" onClick={handleMenuToggle}  aria-label="Toggle navigation">
          <span className="oi dropdown-menu"></span> Menu
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="my-nav">
          <ul className="navbar-nav nav ml-auto">
            <li className="nav-item"><NavLink to="/" className="nav-link"><span>Home</span></NavLink></li>
            <li className="nav-item"><NavLink to="about" className="nav-link"><span>About</span></NavLink></li>
            <li className="nav-item"><NavLink to="resume" className="nav-link"><span>Resume</span></NavLink></li>
            <li className="nav-item"><NavLink to="services" className="nav-link"><span>Services</span></NavLink></li>
            <li className="nav-item"><NavLink to="proejects" className="nav-link"><span>Projects</span></NavLink></li>
            <li className="nav-item"><NavLink to="blog" className="nav-link"><span>Blogs</span></NavLink></li>
            <li className="nav-item"><NavLink to="contact" className="nav-link"><span>Contact</span></NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;

