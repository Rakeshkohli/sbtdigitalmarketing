import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, HeartHandshake, Headphones } from 'lucide-react';

const reasons = [
  { icon: <ShieldCheck size={28} />, title: "Proven Track Record", desc: "Over 500+ successful projects and happy clients." },
  { icon: <Zap size={28} />, title: "Fast Execution", desc: "We implement strategies quickly to get you faster results." },
  { icon: <HeartHandshake size={28} />, title: "Transparent Pricing", desc: "No hidden fees. You know exactly what you're paying for." },
  { icon: <Headphones size={28} />, title: "24/7 Support", desc: "Our dedicated support team is always ready to assist you." }
];

const WhyTrustUs = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Why Trust Us</h2>
        <p className="section-subtitle">We build long-term partnerships based on trust and performance.</p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                padding: '2rem',
                borderLeft: '1px solid var(--glass-border)',
              }}
            >
              <div style={{ color: 'var(--primary)' }}>{item.icon}</div>
              <h3 style={{ fontSize: '1.25rem' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTrustUs;
