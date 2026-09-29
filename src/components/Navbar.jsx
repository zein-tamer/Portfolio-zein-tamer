import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    // 1. أزلنا 'mt-2' و 'py-2' لتقليل المسافة العلوية وجعل الناف بار يلتصق بالأعلى تقريباً.
    // 2. استخدمنا 'py-3' لإعطاء مسافة مريحة داخلية للناف بار.
    <nav className="navbar navbar-expand-lg bg-transparent py-3">
      {/* 3. استخدمنا px-0 لإزالة المسافات الجانبية الافتراضية للحاوية لكي تحاذي كلمة Projects تماماً */}
      <div className="container px-0 d-flex justify-content-between align-items-center" style={{ maxWidth: '960px' }}>
        
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img 
            src="/static/images/logo1.png"
            alt="Zein Tamer Logo" 
            style={{ width: '150px', height: '110px', objectFit: 'contain' }} 
          />
          {/* 4. استخدمنا الهامش السلبي لتقريب النص من الشعار، مع الحفاظ على الشعار في أقصى اليسار */}
          <span 
            className="fw-bold fs-4 text-navbar" 
            style={{ letterSpacing: '1px', marginLeft: '-25px' }}
          >
            ZEIN TAMER
          </span>
        </Link>

        <div className="d-flex align-items-center">
          <Link 
            to="/projects" 
            className={`nav-link fw-semibold me-4 nav-item-hover ${location.pathname === '/projects' || location.pathname === '/' ? 'active-link' : 'text-secondary'}`}
          >
            Projects
          </Link>
          <Link 
            to="/about" 
            className={`nav-link fw-semibold me-4 nav-item-hover ${location.pathname === '/about' ? 'active-link' : 'text-secondary'}`}
          >
            About
          </Link>
          
          <span onClick={toggleTheme} className="text-navbar fs-5 theme-toggle-hover" style={{ cursor: 'pointer' }}>
            {theme === 'dark' ? '☀️' : '🌙'}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;