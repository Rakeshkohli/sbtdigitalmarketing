import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Target } from 'lucide-react';

const badges = [
  { icon: <Award size={32} />, title: "Google Ads Certified", desc: "Expert campaign management" },
  { icon: <Users size={32} />, title: "Happy Clients", desc: "500+ successful projects" },
  { icon: <Clock size={32} />, title: "5+ Years Experience", desc: "Proven track record" },
  { icon: <Target size={32} />, title: "Result-Oriented Team", desc: "Data-driven approach" },
];

const TrustBadges = () => {
  return (
    <section className="section" style={{ paddingTop: '2rem' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card"
              style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem' }}
            >
              <div style={{ color: 'var(--primary)', background: 'rgba(74, 222, 128, 0.1)', padding: '1rem', borderRadius: '50%' }}>
                {badge.icon}
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{badge.title}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{badge.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
