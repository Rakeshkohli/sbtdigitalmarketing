import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, PhoneCall, CheckCircle, BarChart3, Target, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css';

const TiltCard = () => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Calculate rotation (-15 to +15 degrees)
    const xPct = (mouseX / width - 0.5) * 2;
    const yPct = (mouseY / height - 0.5) * 2;
    
    x.set(xPct * 15);
    y.set(yPct * -15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: mouseYSpring,
        rotateY: mouseXSpring,
        transformStyle: "preserve-3d",
      }}
      className="interactive-tilt-card"
    >
      <div 
        className="tilt-card-inner" 
        style={{ transform: "translateZ(50px)" }}
      >
        <div className="card-glass-glow"></div>
        <div className="dashboard-header">
          <div className="dots"><span></span><span></span><span></span></div>
          <span className="dashboard-title">Performance Overview</span>
        </div>
        
        <div className="dashboard-body">
          <div className="dash-stat-row">
            <div className="dash-stat">
              <BarChart3 size={24} color="#4ade80" />
              <div>
                <h5>Traffic</h5>
                <strong>+245%</strong>
              </div>
            </div>
            <div className="dash-stat">
              <Target size={24} color="#3b82f6" />
              <div>
                <h5>Leads</h5>
                <strong>1,204</strong>
              </div>
            </div>
            <div className="dash-stat">
              <Zap size={24} color="#f59e0b" />
              <div>
                <h5>ROI</h5>
                <strong>3.8x</strong>
              </div>
            </div>
          </div>
          
          <div className="dash-graph">
            <svg viewBox="0 0 100 40" preserveAspectRatio="none">
              <path d="M0 40 L0 30 L20 25 L40 35 L60 15 L80 20 L100 5 L100 40 Z" fill="rgba(74, 222, 128, 0.2)" />
              <path d="M0 30 L20 25 L40 35 L60 15 L80 20 L100 5" fill="none" stroke="#4ade80" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg-glow"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 30, rotateX: -20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="hero-title"
          >
            Result-Driven Digital Marketing Agency in India | <span className="text-gradient">SBT Digital Marketing</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-subtitle"
          >
            We help businesses generate qualified leads, increase sales, and build powerful online presence through Meta Ads, SEO, Social Media & Website Development.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-ctas"
          >
            <Link to="/contact" className="btn btn-primary">
              <PhoneCall size={20} /> Get Free Strategy Call
            </Link>
            <Link to="/services" className="btn btn-secondary">
              Start Growing Today <ArrowRight size={20} />
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hero-trust"
          >
            <CheckCircle size={18} className="trust-icon" />
            <p>Helping startups & local businesses scale with proven marketing systems.</p>
          </motion.div>
        </div>
        
        <div className="hero-visual" style={{ perspective: "1000px" }}>
          <TiltCard />
        </div>
      </div>
    </section>
  );
};

export default Hero;
