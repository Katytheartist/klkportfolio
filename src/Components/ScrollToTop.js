import React from 'react';
import { FaArrowUp } from 'react-icons/fa'; 

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px', 
        right: '20px',
        cursor: 'pointer',
        backgroundColor: 'teal', 
        color: 'white',
        padding: '10px',
        borderRadius: '50%', 
        zIndex: 1000, 
      }}
      onClick={scrollToTop}
    >
      <FaArrowUp size={30} /> 
    </div>
  );
};

export default ScrollToTop;