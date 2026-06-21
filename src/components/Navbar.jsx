import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

/* ── Social Media SVG Icons ─────────────────────────────────────── */
const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#f09433"/>
        <stop offset="25%" stopColor="#e6683c"/>
        <stop offset="50%" stopColor="#dc2743"/>
        <stop offset="75%" stopColor="#cc2366"/>
        <stop offset="100%" stopColor="#bc1888"/>
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="url(#ig-grad)" strokeWidth="2" fill="none"/>
    <circle cx="12" cy="12" r="4.5" stroke="url(#ig-grad)" strokeWidth="2" fill="none"/>
    <circle cx="17.5" cy="6.5" r="1.2" fill="url(#ig-grad)"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="4" fill="#1877F2"/>
    <path d="M15.5 8H13.5C13.2 8 13 8.2 13 8.5V10H15.5L15.1 12.5H13V19H10.5V12.5H9V10H10.5V8.5C10.5 6.6 11.8 5 13.5 5H15.5V8Z" fill="white"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="4" fill="#0A66C2"/>
    <path d="M7 10H9.5V17H7V10ZM8.25 9C7.56 9 7 8.44 7 7.75C7 7.06 7.56 6.5 8.25 6.5C8.94 6.5 9.5 7.06 9.5 7.75C9.5 8.44 8.94 9 8.25 9Z" fill="white"/>
    <path d="M11 10H13.3V11.1C13.6 10.5 14.4 10 15.5 10C17.4 10 18 11.2 18 13.1V17H15.5V13.6C15.5 12.7 15.2 12 14.3 12C13.4 12 13 12.7 13 13.6V17H11V10Z" fill="white"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#25D366"/>
    <path d="M17.5 14.4c-.3-.1-1.7-.9-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.2-.5 0-.2-.1-.4-.2-.6-.1-.2-.7-1.7-.9-2.3-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1 2.7 1.1 2.9.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.7.1.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.3-.2-.5-.3z" fill="white"/>
  </svg>
);

/* ── Animation variants ─────────────────────────────────────────── */

// Panel: clips from the bottom edge upward (like amardenvox)
const panelVariants = {
  hidden: {
    clipPath: 'inset(100% 0% 0% 0% round 32px)',
    opacity: 1,
  },
  visible: {
    clipPath: 'inset(0% 0% 0% 0% round 32px)',
    opacity: 1,
    transition: {
      clipPath: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  exit: {
    clipPath: 'inset(100% 0% 0% 0% round 32px)',
    opacity: 1,
    transition: {
      clipPath: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

// Individual link items slide + fade up
const linkVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.25, ease: 'easeIn' },
  },
};

// Bottom section fades in slightly later
const bottomVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut', delay: 0.45 },
  },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

/* ── Nav links data ─────────────────────────────────────────────── */
const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact Us' },
];

/* ── Component ──────────────────────────────────────────────────── */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <>
      {/* ── Desktop / Top Navbar ─────────────────────────────────── */}
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <Link to="/" className="logo">
            <span className="logo-icon">SBT</span>
            <span className="logo-text">Digital Marketing</span>
          </Link>
          <nav className="nav-links">
            {navLinks.map(({ to, label }) => (
              <Link key={to} to={to} className={location.pathname === to ? 'active-link' : ''}>{label}</Link>
            ))}
            <Link to="/contact" className="btn btn-primary get-started-btn">Get Started</Link>
          </nav>
        </div>
      </header>

      {/* ── Floating Bottom Pill ─────────────────────────────────── */}
      <div className="fixed bottom-7 left-1/2 -translate-x-1/2 z-[2000] lg:hidden">
        <div className="flex items-center bg-[rgba(8,8,8,0.92)] border border-white/10 rounded-full py-3 px-7 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.6)] gap-5 whitespace-nowrap">
          <button
            onClick={() => setIsOpen(prev => !prev)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="text-white font-semibold text-[11px] tracking-[0.15em] uppercase hover:text-[var(--primary)] transition-colors cursor-pointer outline-none border-none bg-transparent select-none"
          >
            {isOpen ? 'Close' : 'Menu'}
          </button>
          <div className="h-4 w-px bg-white/15" />
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="text-white font-semibold text-[11px] tracking-[0.15em] uppercase hover:text-[var(--primary)] transition-colors flex items-center gap-1.5 outline-none select-none"
          >
            Let&apos;s Talk
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>

      {/* ── Mobile Menu Overlay ──────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-3 bottom-3 z-[1999] lg:hidden flex flex-col justify-between overflow-hidden"
            style={{
              background: 'rgba(5, 5, 5, 0.97)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '32px',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              boxShadow: '0 30px 80px rgba(0,0,0,0.7)',
              padding: '2rem 2rem 1.5rem',
            }}
          >
            {/* Top: Logo */}
            <div className="flex justify-end items-center w-full">
              <Link to="/" onClick={() => setIsOpen(false)} className="logo">
                <span className="logo-icon">SBT</span>
                <span className="logo-text">Digital Marketing</span>
              </Link>
            </div>

            {/* Middle: Nav Links with stagger */}
            <motion.nav className="flex flex-col gap-1 pl-2 mt-8 mb-auto">
              {navLinks.map(({ to, label }) => (
                <motion.div key={to} variants={linkVariants}>
                  <Link
                    to={to}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 text-[2.6rem] font-bold leading-tight tracking-tight hover:text-[var(--primary)] transition-colors duration-200"
                    style={{
                      fontFamily: 'Outfit, sans-serif',
                      color: location.pathname === to ? 'var(--primary)' : '#ffffff',
                    }}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}

              {/* Get Started button */}
              <motion.div variants={linkVariants} className="mt-4">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn btn-primary inline-flex items-center gap-2 py-3 px-7 text-sm font-semibold rounded-full"
                >
                  Get Started
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </motion.div>
            </motion.nav>

            {/* Bottom: Social icons + Phone */}
            <motion.div
              variants={bottomVariants}
              className="mt-8 pt-5 border-t border-white/[0.07] flex flex-col gap-4"
              style={{ paddingBottom: '5rem' }} // space above floating pill
            >
              {/* Social Icons */}
              <div className="flex items-center gap-4">
                <a href="https://instagram.com" target="_blank" rel="noreferrer"
                  className="opacity-70 hover:opacity-100 transition-opacity hover:scale-110 transform duration-200"
                  aria-label="Instagram">
                  <InstagramIcon />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer"
                  className="opacity-70 hover:opacity-100 transition-opacity hover:scale-110 transform duration-200"
                  aria-label="Facebook">
                  <FacebookIcon />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer"
                  className="opacity-70 hover:opacity-100 transition-opacity hover:scale-110 transform duration-200"
                  aria-label="LinkedIn">
                  <LinkedInIcon />
                </a>
                <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer"
                  className="opacity-70 hover:opacity-100 transition-opacity hover:scale-110 transform duration-200"
                  aria-label="WhatsApp">
                  <WhatsAppIcon />
                </a>
              </div>

              {/* Email & Phone */}
              <div className="flex justify-between items-center">
                <a
                  href="mailto:info@sbtdigital.com"
                  className="text-xs text-[rgba(255,255,255,0.45)] hover:text-white transition-colors"
                >
                  info@sbtdigital.com
                </a>
                <a
                  href="tel:+919876543210"
                  className="text-xs font-mono text-[rgba(255,255,255,0.45)] hover:text-white transition-colors"
                >
                  +91 98765 43210
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
