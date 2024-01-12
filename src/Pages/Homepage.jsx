import React from 'react';
import '../Css/Homepage.css';
import Nature from '../Assets/Video/fall_-_23881 (Original).mp4';
import AppBurger from '../Burger/AppBurger';

const Homepage = () => {
  return (
    <div className='container'>
      <div className='content'>
        <video className='video' src={Nature} autoPlay loop id='myVideo'>
          <source  src={Nature} type='video/mp4' />
        </video>

       

        <div className='scrollable-content'>
          <div className='scrollable-div'><p>Content 1</p></div>
          <div className='scrollable-div'><p>Content 2</p></div>
          <div className='scrollable-div'><p>Content 3</p></div>
          <div className='scrollable-div'><p>Content 4</p></div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
