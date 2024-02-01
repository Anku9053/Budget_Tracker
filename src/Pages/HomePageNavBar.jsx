// Navbar.js
import React from 'react';
import "../Css/HomePageNavBar.css"

const HomePageNavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Budget Tracker</div>
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Transactions</a>
        <a href="#">Categories</a>
        <a href="#">Leaderboard</a>
        
       
      </div>
      <div className='Login_Button'>
          
          <p>Login</p>

        </div>
    </nav>
  );
};

export default HomePageNavBar;
