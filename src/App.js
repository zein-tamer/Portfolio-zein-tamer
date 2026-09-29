import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import About from './pages/About';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="custom-bg-dark min-vh-100 d-flex flex-column">
        
        {/* الـ Navbar يظهر في كل الصفحات */}
        <Navbar />
        
        {/* المحتوى يتغير بناءً على الرابط */}
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Projects />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        {/* الـ Footer يظهر في كل الصفحات */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;