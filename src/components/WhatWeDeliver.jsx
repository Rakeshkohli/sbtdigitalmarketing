import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, TrendingUp, MonitorSmartphone } from 'lucide-react';

const deliverables = [
  {
    icon: <TrendingUp size={40} />,
    title: "Increased ROI & Sales",
    desc: "We focus on the metrics that matter. Our strategies are designed to maximize your return on investment and drive actual revenue."
  },
  {
    icon: <BarChart size={40} />,
    title: "Qualified Leads",
    desc: "Stop wasting money on unqualified clicks. We build funnels that attract your ideal customers and convert them into solid leads."
  },
  {
    icon: <MonitorSmartphone size={40} />,
    title: "Powerful Brand Presence",
    desc: "Dominate your industry with a cohesive, professional online presence across search engines, social media, and your website."
  }
];

const WhatWeDeliver = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">What We Deliver</h2>
        <p className="section-subtitle">We don't just offer services; we deliver measurable results that impact your bottom line.</p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2.5rem'
        }}>
          {deliverables.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="glass-card"
              style={{ textAlign: 'center', padding: '3rem 2rem' }}
            >
              <div style={{ display: 'inline-block', color: 'var(--primary)', marginBottom: '1.5rem' }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDeliver;
