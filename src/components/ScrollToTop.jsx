import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setShow(true);
      else setShow(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`position-fixed bottom-0 end-0 p-4 ${show ? 'd-block' : 'd-none'}`} style={{ zIndex: 1000 }}>
      <button 
        onClick={scrollToTop} 
        className="btn btn-secondary rounded-circle shadow d-flex align-items-center justify-content-center"
        style={{ width: '45px', height: '45px', opacity: '0.8' }}
        aria-label="Scroll To Top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
};

export default ScrollToTop;