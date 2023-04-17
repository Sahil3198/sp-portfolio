import React, { useContext, useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import MaterialUISwitch from '../../Components/MaterialUISwitch/MaterialUISwitch';
import { ThemeContext } from '../../context/ThemeContext';
import MenuIcon from '@mui/icons-material/Menu';

const MainNavigation = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const linkStyle= ({ isActive }) => {
    return { 
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "#3e64ff" : "", }
  }

  return (
    <div id={theme}>
      <nav className="navbar navbar-expand-lg" id="navbar_section">
        <div className="container">
          <NavLink className="navbar-brand left" to="/"><span>S</span>ahil</NavLink>
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} onClick={() => setIsMenuOpen(false)}>
            <ul className="navbar-nav nav ml-auto">
              <li className="nav-item"><NavLink to="/" className="nav-link" style={linkStyle}><span>Home</span></NavLink></li>
              <li className="nav-item"><NavLink to="about" className="nav-link" style={linkStyle}><span>About</span></NavLink></li>
              <li className="nav-item"><NavLink to="resume" className="nav-link" style={linkStyle}><span>Resume</span></NavLink></li>
              <li className="nav-item"><NavLink to="projects" className="nav-link" style={linkStyle}><span>Projects</span></NavLink></li>
              {/* <li className="nav-item"><NavLink to="blog" className="nav-link" style={linkStyle}><span>Blogs</span></NavLink></li> */}
              <li className="nav-item"><NavLink to="contact" className="nav-link" style={linkStyle}><span>Contact</span></NavLink></li>
            </ul>
          </div>

          <div className="right">
            <div className="theme-icon">
              <MaterialUISwitch sx={{ m: 1 }} onClick={toggleTheme} />
            </div>
            <button className="navbar-toggler" type="button" onClick={handleMenuToggle} aria-label="Toggle navigation" ref={menuRef} >
              <span className="dropdown-menu"><MenuIcon /></span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MainNavigation;

