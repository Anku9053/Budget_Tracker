import React, { useState } from 'react';
import '../Css/Navbar.css'; // Import your CSS file for styling

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <div className={`navbar ${navbarOpen ? 'open' : ''}`}>
      <div className="burger-menu" onClick={handleToggle}>
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>
      <div className="navbar-content">
        {/* Your navbar content goes here */}
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
