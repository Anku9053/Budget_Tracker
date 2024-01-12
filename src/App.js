import './App.css';
import AppBurger from './Burger/AppBurger';
import React, { useEffect, useState } from 'react';
import Nature from './Assets/Video/fall_-_23881 (Original).mp4';
import  MoneyImage from "./Assets/Images/expense-tracker-app-rgb-color-icon-vector-39050843.jpg"
function App() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50); // Adjust the scroll threshold as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`container ${scrolling ? 'navbar-hidden' : 'navbar-visible'}`}>
      <div className='content'>
        

        <video className='video' src={Nature} autoPlay loop id='myVideo'>
          <source src={Nature} type='video/mp4' />
        </video>

        {/* Hamburger Icon Container */}
        <div className='burger-container'>
          <AppBurger />
        </div>
        <div className='navbar'>
          <div className='logo'>
            <img className='Image' src={MoneyImage} alt='logo'/>
          </div>
        </div>

        {/* Content */}
        <div className='scrollable-content'>
          <div className='scrollable-div'><p>Content 1</p></div>
          <div className='scrollable-div'><p>Content 2</p></div>
          <div className='scrollable-div'><p>Content 3</p></div>
          <div className='scrollable-div'><p>Content 4</p></div>
        </div>
      </div>
    </div>
  );
}

export default App;
