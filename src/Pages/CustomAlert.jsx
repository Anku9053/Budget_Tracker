// CustomAlert.js
import React, { useEffect } from 'react';
import '../Css/CustomAlert.css';

const CustomAlert = ({ message, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'; 

    return () => {
      document.body.style.overflow = ''; 
    };
  }, []);

  return (
    <div className="custom-alert-container">
      <div className="custom-alert show">
        <div className="alert-content">
          <p>{message}</p>
          <button className='buttonalert' onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default CustomAlert;
