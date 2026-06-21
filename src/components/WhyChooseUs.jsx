import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  return (
    <section className="section">
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center'
        }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title" style={{ textAlign: 'left' }}>Why Choose Us</h2>
            <p className="section-subtitle" style={{ textAlign: 'left', marginLeft: 0 }}>
              We don't do guesswork. Our methodology is rooted in data, creativity, and relentless optimization.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2rem' }}>
              <div style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '1.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Data-Driven Strategies</h3>
                <p style={{ color: 'var(--text-muted)' }}>Every campaign we launch is backed by rigorous research and real-time data analysis to ensure maximum performance.</p>
              </div>
              <div style={{ borderLeft: '4px solid #3b82f6', paddingLeft: '1.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Transparent Reporting</h3>
                <p style={{ color: 'var(--text-muted)' }}>No vanity metrics. We provide clear, concise reports showing exactly where your budget is going and the ROI it's generating.</p>
              </div>
              <div style={{ borderLeft: '4px solid #f59e0b', paddingLeft: '1.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Dedicated Experts</h3>
                <p style={{ color: 'var(--text-muted)' }}>You get a specialized team of marketers, not generalists, working on your account to deliver industry-leading results.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative' }}
          >
            <div style={{
              position: 'absolute',
              top: '-5%', left: '-5%', width: '110%', height: '110%',
              background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
              filter: 'blur(50px)', opacity: 0.2, zIndex: -1, borderRadius: '50%'
            }}></div>
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800" 
              alt="Team working" 
              style={{ width: '100%', borderRadius: '2rem', border: '1px solid var(--glass-border)' }}
            />
          </motion.div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 992px) {
          .section .container > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />
    </section>
  );
};

export default WhyChooseUs;
