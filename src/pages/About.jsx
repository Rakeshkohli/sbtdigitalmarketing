import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award } from 'lucide-react';

const About = () => {
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '4rem' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 className="section-title">About SBT Digital Marketing</h1>
          <p className="section-subtitle">
            Your growth partners in the digital era. We blend creativity with data to deliver unmatched results.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', marginBottom: '6rem' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
              alt="Our Team" 
              style={{ width: '100%', borderRadius: '1rem', border: '1px solid var(--glass-border)' }}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Who We Are</h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              SBT Digital Marketing is a premier digital agency based in India, dedicated to helping businesses scale through innovative marketing strategies. Founded with a vision to bring transparency and ROI-focused marketing to the forefront.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '2rem' }}>
              With over 5 years of industry experience and a team of certified professionals, we have successfully managed millions in ad spend and generated phenomenal returns for startups and established enterprises alike.
            </p>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <div>
                <h4 style={{ fontSize: '2rem', color: 'var(--primary)', fontWeight: 800 }}>500+</h4>
                <span style={{ color: 'var(--text-muted)' }}>Projects Delivered</span>
              </div>
              <div>
                <h4 style={{ fontSize: '2rem', color: 'var(--primary)', fontWeight: 800 }}>$10M+</h4>
                <span style={{ color: 'var(--text-muted)' }}>Revenue Generated</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div className="glass-card" style={{ textAlign: 'center' }}>
            <Target size={40} style={{ color: 'var(--primary)', margin: '0 auto 1rem' }} />
            <h3 style={{ marginBottom: '1rem' }}>Our Mission</h3>
            <p style={{ color: 'var(--text-muted)' }}>To empower businesses with data-driven marketing strategies that foster sustainable growth and maximize return on investment.</p>
          </div>
          <div className="glass-card" style={{ textAlign: 'center' }}>
            <Eye size={40} style={{ color: 'var(--primary)', margin: '0 auto 1rem' }} />
            <h3 style={{ marginBottom: '1rem' }}>Our Vision</h3>
            <p style={{ color: 'var(--text-muted)' }}>To be the most trusted digital marketing agency globally, known for innovation, transparency, and exceptional client success.</p>
          </div>
          <div className="glass-card" style={{ textAlign: 'center' }}>
            <Award size={40} style={{ color: 'var(--primary)', margin: '0 auto 1rem' }} />
            <h3 style={{ marginBottom: '1rem' }}>Our Values</h3>
            <p style={{ color: 'var(--text-muted)' }}>Integrity, excellence, continuous learning, and an unwavering commitment to delivering tangible results for our partners.</p>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html:`
        @media (max-width: 992px) {
          .container > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />
    </div>
  );
};

export default About;
