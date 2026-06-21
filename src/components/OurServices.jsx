import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const services = [
  { id: 1, title: 'Lead Generation', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800', desc: 'Attract and convert your ideal customers into high-quality leads.' },
  { id: 2, title: 'Google Ads', img: 'https://images.unsplash.com/photo-1542744094-24638ea0b3b5?auto=format&fit=crop&q=80&w=800', desc: 'High ROI PPC campaigns targeting users with intent to buy.' },
  { id: 3, title: 'SEO Optimization', img: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80&w=800', desc: 'Rank higher on Google and drive organic, sustainable traffic.' },
  { id: 4, title: 'Social Media', img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800', desc: 'Build brand loyalty and engage audiences on Meta, IG, LinkedIn.' },
  { id: 5, title: 'Web Development', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800', desc: 'Modern, fast, and high-converting websites.' },
  { id: 6, title: 'Video Editing', img: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800', desc: 'Captivating visual stories that boost engagement.' },
];

const OurServices = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section className="section" ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '0.5rem' }}>Our Services</h2>
            <p className="section-subtitle" style={{ textAlign: 'left', margin: '0' }}>Comprehensive solutions to scale your brand.</p>
          </div>
          <Link to="/services" className="btn btn-secondary">
            View All Services <ArrowRight size={18} />
          </Link>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="service-card"
              style={{
                position: 'relative',
                borderRadius: '1rem',
                overflow: 'hidden',
                aspectRatio: '4/3',
                cursor: 'pointer'
              }}
            >
              <img 
                src={service.img} 
                alt={service.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                className="service-img"
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '2rem'
              }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#fff' }}>{service.title}</h3>
                <p style={{ color: '#ccc', fontSize: '0.9rem', marginBottom: '1rem', opacity: 0.8 }}>{service.desc}</p>
                <Link to="/services" style={{ color: 'var(--primary)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .service-card:hover .service-img {
          transform: scale(1.1);
        }
      `}} />
    </section>
  );
};

export default OurServices;
