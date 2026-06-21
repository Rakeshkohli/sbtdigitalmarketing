import React from 'react';
import { motion } from 'framer-motion';

const allServices = [
  { id: 1, title: 'Lead Generation', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800', desc: 'Targeted strategies to capture and convert high-quality prospects into paying customers.' },
  { id: 2, title: 'Google Ads', img: 'https://images.unsplash.com/photo-1542744094-24638ea0b3b5?auto=format&fit=crop&q=80&w=800', desc: 'Data-driven PPC campaigns designed to maximize ROI and lower cost-per-acquisition.' },
  { id: 3, title: 'SEO Optimization', img: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80&w=800', desc: 'Comprehensive on-page and off-page SEO to dominate search engine rankings.' },
  { id: 4, title: 'SMO (Social Media)', img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800', desc: 'Engaging content and community management across platforms.' },
  { id: 5, title: 'ORM (Reputation)', img: 'https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&q=80&w=800', desc: 'Monitor, manage, and improve your brand reputation across the web.' },
  { id: 6, title: 'Web Development', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800', desc: 'Custom, fast, and SEO-friendly websites that turn visitors into leads.' },
  { id: 7, title: 'Mobile App Dev', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800', desc: 'Native and cross-platform mobile apps providing seamless user experiences.' },
  { id: 8, title: 'Facebook Marketing', img: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=800', desc: 'Hyper-targeted Meta ad campaigns to scale your business predictably.' },
  { id: 9, title: 'Amazon Marketing', img: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&q=80&w=800', desc: 'End-to-end Amazon seller management, SEO, and PPC optimization.' },
  { id: 10, title: 'Graphic Design', img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800', desc: 'Stunning visuals, branding, and creatives that capture attention.' },
  { id: 11, title: 'Flipkart Marketing', img: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800', desc: 'Boost your sales and visibility on India\'s leading e-commerce platform.' },
  { id: 12, title: 'Video Editing', img: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800', desc: 'Professional video production and editing for ads, reels, and YouTube.' },
];

const Services = () => {
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '4rem' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 className="section-title">Our Premium Services</h1>
          <p className="section-subtitle">
            We provide a 360-degree digital marketing approach to help your brand dominate the digital landscape.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem'
        }}>
          {allServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="glass-card"
              style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ height: '200px', overflow: 'hidden' }}>
                <img 
                  src={service.img} 
                  alt={service.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--primary)' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', flexGrow: 1 }}>{service.desc}</p>
                <button className="btn btn-secondary" style={{ marginTop: '1.5rem', width: '100%' }}>Get a Quote</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @media (min-width: 1024px) {
          .container > div:last-child {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}} />
    </div>
  );
};

export default Services;
