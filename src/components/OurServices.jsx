import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import './OurServices.css';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    title: 'Lead Generation',
    subtitle: '( turning clicks into clients )',
    desc: 'We craft data-driven campaigns that attract and convert your ideal customers into high-quality leads, building a reliable pipeline for consistent business growth and long-term success.',
    link: 'Learn more',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 2,
    title: 'Google Ads',
    subtitle: '( every rupee optimized )',
    desc: 'High ROI PPC campaigns precisely targeting users with intent to buy. Every rupee of your budget is optimized for maximum conversion, delivering measurable returns at scale.',
    link: 'Learn more',
    img: 'https://images.unsplash.com/photo-1542744094-24638ea0b3b5?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 3,
    title: 'SEO',
    subtitle: '( organic growth engine )',
    desc: 'Rank higher on Google and drive organic, sustainable traffic to your website. We build authority through technical excellence, strategic content, and proven optimization techniques.',
    link: 'Learn more',
    img: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 4,
    title: 'Social Media',
    subtitle: '( building real communities )',
    desc: 'Build brand loyalty and engage your audience on Meta, Instagram, and LinkedIn. We create content strategies that resonate, grow your following, and convert followers into customers.',
    link: 'Learn more',
    img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 5,
    title: 'Web Dev',
    subtitle: '( built for performance )',
    desc: 'Modern, fast, and high-converting websites built for performance and user experience — your digital storefront designed to impress, convert, and scale with your business.',
    link: 'Learn more',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 6,
    title: 'Video',
    subtitle: '( stories that sell )',
    desc: 'Captivating visual stories that boost engagement and stop the scroll. From reels to brand films, we craft videos that leave a lasting impression and drive action.',
    link: 'Learn more',
    img: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1200',
  },
];

const OurServices = () => {
  const sectionRef = useRef(null);
  const scrollerRef = useRef(null);
  const cardRefs = useRef([]);
  const endRef = useRef(null);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    const cards = cardRefs.current.filter(Boolean);
    const endEl = endRef.current;

    if (!scroller || cards.length === 0 || !endEl) return;

    const ctx = gsap.context(() => {
      cards.forEach((card, i) => {
        const innerCard = card.querySelector('.os-card-inner');
        const overlay = card.querySelector('.os-card-darken');

        // Every card except the last gets pinned
        if (i < cards.length - 1) {
          ScrollTrigger.create({
            trigger: card,
            start: 'top top',
            endTrigger: endEl,
            end: 'top bottom',
            pin: true,
            pinSpacing: false,
          });

          // Darken this card as the next one scrolls over it
          if (overlay) {
            gsap.to(overlay, {
              opacity: 0.7,
              scrollTrigger: {
                trigger: cards[i + 1],
                start: 'top bottom',
                end: 'top top',
                scrub: true,
              },
            });
          }

          // Scale down this card slightly
          gsap.to(card, {
            scale: 0.92,
            scrollTrigger: {
              trigger: cards[i + 1],
              start: 'top bottom',
              end: 'top top',
              scrub: true,
            },
          });
        }

        // Rotate the inner card from tilted → straight as it enters
        if (innerCard) {
          gsap.fromTo(
            innerCard,
            { rotate: 3 },
            {
              rotate: 0,
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                end: 'top top',
                scrub: true,
              },
            }
          );
        }
      });
    }, scroller);

    return () => ctx.revert();
  }, []);

  return (
    <section className="os-section" ref={sectionRef}>
      {/* Section Header */}
      <div className="os-header">
        <span className="os-header-label">Services</span>
        <h2 className="os-header-heading">
          WHAT YOU<br />GET
        </h2>
      </div>

      {/* Stacking & Rotating Cards */}
      <div className="os-scroller" ref={scrollerRef}>
        <div className="os-scroller-inner">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`os-card os-card--${index % 3 === 0 ? 'dark' : index % 3 === 1 ? 'green' : 'light'}`}
              ref={(el) => (cardRefs.current[index] = el)}
            >
              <div className="os-card-inner">
                {/* Dark overlay for stacking */}
                <div className="os-card-darken" />

                {/* Top-right image */}
                <div className="os-card-image-wrap">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="os-card-image"
                    loading="lazy"
                  />
                </div>

                <div className="os-card-content">
                  {/* Top row: title link with arrow */}
                  <div className="os-card-top">
                    <Link to="/services" className="os-card-title-link">
                      <span className="os-card-title-text">{service.title}</span>
                      <span className="os-card-arrow">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </span>
                    </Link>
                  </div>

                  {/* Bottom: large title + description */}
                  <div className="os-card-bottom">
                    <h3 className="os-card-big-title">{service.title}</h3>
                    <div className="os-card-info">

                      {/* ✨ यहाँ प्रत्येक कार्ड का Description रेंडर हो रहा है */}
                      <p className="os-card-desc">{service.desc}</p>

                      <Link to="/services" className="os-card-learn-link">
                        {service.link}
                        <span className="os-card-learn-arrow">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="7" y1="17" x2="17" y2="7" />
                            <polyline points="7 7 17 7 17 17" />
                          </svg>
                        </span>
                      </Link>
                      <span className="os-card-subtitle">{service.subtitle}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="os-end" ref={endRef} />
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
