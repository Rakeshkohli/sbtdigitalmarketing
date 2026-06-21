import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import './OurServices.css';

const services = [
  {
    id: 1,
    title: 'LEAD GENERATION',
    subtitle: '( turning clicks into clients )',
    desc: 'We craft data-driven campaigns that attract and convert your ideal customers into high-quality leads, building a reliable pipeline for consistent business growth and long-term success.',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    title: 'GOOGLE ADS',
    subtitle: '( every rupee optimized )',
    desc: 'High ROI PPC campaigns precisely targeting users with intent to buy. Every rupee of your budget is optimized for maximum conversion, delivering measurable returns at scale.',
    img: 'https://images.unsplash.com/photo-1542744094-24638ea0b3b5?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    title: 'SEO',
    subtitle: '( organic growth engine )',
    desc: 'Rank higher on Google and drive organic, sustainable traffic to your website. We build authority through technical excellence, strategic content, and proven optimization techniques.',
    img: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 4,
    title: 'SOCIAL MEDIA',
    subtitle: '( building real communities )',
    desc: 'Build brand loyalty and engage your audience on Meta, Instagram, and LinkedIn. We create content strategies that resonate, grow your following, and convert followers into customers.',
    img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 5,
    title: 'WEB DEV',
    subtitle: '( built for performance )',
    desc: 'Modern, fast, and high-converting websites built for performance and user experience — your digital storefront designed to impress, convert, and scale with your business.',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 6,
    title: 'VIDEO',
    subtitle: '( stories that sell )',
    desc: 'Captivating visual stories that boost engagement and stop the scroll. From reels to brand films, we craft videos that leave a lasting impression and drive action.',
    img: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800',
  },
];

const ServiceRow = ({ service, isOpen, onToggle }) => {
  const rowRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ['start end', 'end start'],
  });
  const titleX = useTransform(scrollYProgress, [0, 1], ['4%', '-2%']);

  return (
    <motion.div
      ref={rowRef}
      className={`os-row ${isOpen ? 'os-row--open' : ''}`}
      onMouseEnter={() => onToggle(service.id)}
      onMouseLeave={() => onToggle(null)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
    >
      {/* Expanded content — shows on hover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="os-row-expanded"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="os-row-expanded-inner">
              <div className="os-row-meta">
                <span className="os-row-num">0{service.id}</span>
                <p className="os-row-desc">{service.desc}</p>
                <Link to="/services" className="os-row-link">
                  Learn more <span className="os-row-link-arrow">↗</span>
                </Link>
              </div>
              <div className="os-row-img-wrap">
                <motion.img
                  src={service.img}
                  alt={service.title}
                  className="os-row-img"
                  initial={{ scale: 1.15, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 1.15, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Big title row — always visible */}
      <div className="os-row-title-wrap">
        <Link to="/services" className="os-row-title-link">
          <motion.h3 className="os-row-big-title" style={{ x: titleX }}>
            {service.title}
          </motion.h3>
        </Link>
        <span className="os-row-subtitle">{service.subtitle}</span>
      </div>
    </motion.div>
  );
};

const OurServices = () => {
  const [openId, setOpenId] = useState(null);
  const sectionRef = useRef(null);

  return (
    <section className="os-section" ref={sectionRef}>
      {/* Section Header */}
      <div className="os-header">
        <span className="os-header-label">Services</span>
        <h2 className="os-header-heading">OUR SERVICES</h2>
      </div>

      {/* Service rows */}
      <div className="os-rows">
        {services.map((service) => (
          <ServiceRow
            key={service.id}
            service={service}
            isOpen={openId === service.id}
            onToggle={setOpenId}
          />
        ))}
      </div>

      {/* CTA */}
      <div className="os-footer">
        <Link to="/services" className="os-footer-btn">
          View All Services ↗
        </Link>
      </div>
    </section>
  );
};

export default OurServices;
