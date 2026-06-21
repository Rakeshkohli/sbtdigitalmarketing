import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Dynamically calculate current local time in GMT offset format
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      const timeString = `${hours.toString().padStart(2, '0')}:${minutes} ${ampm}`;
      
      const offsetMinutes = now.getTimezoneOffset();
      const offsetHours = Math.abs(Math.floor(offsetMinutes / 60));
      const offsetRemainingMinutes = Math.abs(offsetMinutes % 60);
      const offsetSign = offsetMinutes <= 0 ? '+' : '-';
      const timezoneString = `GMT${offsetSign}${offsetHours}:${offsetRemainingMinutes.toString().padStart(2, '0')}`;
      
      setCurrentTime(`${timeString} ${timezoneString}`);
    };
    
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <Link to="/" className="logo">
            <span className="logo-icon">SBT</span>
            <span className="logo-text">Digital Marketing</span>
          </Link>

          <nav className="nav-links">
            <Link to="/" className={location.pathname === '/' ? 'active-link' : ''}>Home</Link>
            <Link to="/services" className={location.pathname === '/services' ? 'active-link' : ''}>Services</Link>
            <Link to="/about" className={location.pathname === '/about' ? 'active-link' : ''}>About Us</Link>
            <Link to="/contact" className={location.pathname === '/contact' ? 'active-link' : ''}>Contact Us</Link>
            <Link to="/contact" className="btn btn-primary get-started-btn">Get Started</Link>
          </nav>
        </div>
      </header>

      {/* Floating Bottom Menu Pill (Visible on mobile/tablet) */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[2000] lg:hidden">
        <div className="flex items-center bg-black/85 border border-white/10 rounded-full py-2.5 px-6 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.5)] gap-4 whitespace-nowrap">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white font-semibold text-xs tracking-wider uppercase hover:text-primary transition-colors cursor-pointer outline-none border-none bg-transparent"
          >
            {isOpen ? 'Close' : 'Menu'}
          </button>
          <div className="h-4 w-[1px] bg-white/20"></div>
          <Link 
            to="/contact" 
            onClick={() => setIsOpen(false)}
            className="text-white font-semibold text-xs tracking-wider uppercase hover:text-primary transition-colors flex items-center gap-1 outline-none"
          >
            Let's Talk <span className="text-[10px] text-primary">↗</span>
          </Link>
        </div>
      </div>

      {/* Slide-up Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-4 z-[1999] lg:hidden bg-[rgba(5,5,5,0.95)] border border-white/10 rounded-[32px] backdrop-blur-[20px] shadow-2xl p-8 flex flex-col justify-between overflow-hidden"
          >
            {/* Top Bar (Logo) */}
            <div className="flex justify-between items-center w-full">
              <div></div>
              <Link to="/" onClick={() => setIsOpen(false)} className="logo">
                <span className="logo-icon">SBT</span>
                <span className="logo-text">Digital Marketing</span>
              </Link>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col gap-6 my-auto pl-4 text-left">
              <Link 
                to="/" 
                onClick={() => setIsOpen(false)}
                className={`text-4xl font-bold tracking-tight font-outfit transition-colors hover:text-primary ${location.pathname === '/' ? 'text-primary' : 'text-white'}`}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                onClick={() => setIsOpen(false)}
                className={`text-4xl font-bold tracking-tight font-outfit transition-colors hover:text-primary ${location.pathname === '/services' ? 'text-primary' : 'text-white'}`}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                onClick={() => setIsOpen(false)}
                className={`text-4xl font-bold tracking-tight font-outfit transition-colors hover:text-primary ${location.pathname === '/about' ? 'text-primary' : 'text-white'}`}
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                onClick={() => setIsOpen(false)}
                className={`text-4xl font-bold tracking-tight font-outfit transition-colors hover:text-primary ${location.pathname === '/contact' ? 'text-primary' : 'text-white'}`}
              >
                Contact Us
              </Link>
            </div>

            {/* Bottom details & Socials */}
            <div className="flex flex-col gap-5 border-t border-white/5 pt-6 pb-12">
              {/* Socials */}
              <div className="flex items-center gap-3 text-xs font-semibold text-text-muted">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">IG</a>
                <span>/</span>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">FB</a>
                <span>/</span>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LI</a>
                <span>/</span>
                <a href="https://whatsapp.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">WA</a>
              </div>

              {/* Email & Local Time */}
              <div className="flex justify-between items-center text-xs text-text-muted">
                <a href="mailto:info@sbtdigital.com" className="hover:text-white transition-colors">info@sbtdigital.com</a>
                <span className="font-mono">{currentTime}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
