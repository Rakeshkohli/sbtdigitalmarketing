import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LimitedTime = () => {
  return (
    <section className="section" style={{ padding: '2rem 0' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card"
          style={{
            background: 'linear-gradient(45deg, rgba(74, 222, 128, 0.1), rgba(37, 99, 235, 0.1))',
            border: '1px solid var(--primary)',
            textAlign: 'center',
            padding: '4rem 2rem'
          }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 800 }}>Limited Time Offer!</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Get a comprehensive <strong>Free Digital Marketing Audit</strong> (Worth ₹15,000). Discover untapped opportunities for your business today.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
            Claim Your Free Audit Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default LimitedTime;
