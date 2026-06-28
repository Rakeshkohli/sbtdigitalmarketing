import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './WhatWeDeliver.css';

gsap.registerPlugin(ScrollTrigger);

const deliverables = [
  {
    number: '01',
    title: 'INCREASED ROI & SALES',
    desc: 'We focus on the metrics that matter. Our strategies are designed to maximize your return on investment and drive actual revenue growth for your business.',
    link: 'See our results',
    linkHref: '#',
  },
  {
    number: '02',
    title: 'QUALIFIED LEADS',
    desc: 'Stop wasting money on unqualified clicks. We build targeted funnels that attract your ideal customers and convert them into solid, high-value leads.',
    link: 'How we do it',
    linkHref: '#',
  },
  {
    number: '03',
    title: 'POWERFUL BRAND PRESENCE',
    desc: 'Dominate your industry with a cohesive, professional online presence across search engines, social media, and your website — built for long-term dominance.',
    link: 'Our approach',
    linkHref: '#',
  },
  {
    number: '04',
    title: 'DATA-DRIVEN STRATEGY',
    desc: 'Every decision is backed by analytics and real data. We continuously optimize your campaigns based on performance metrics, ensuring consistent growth and efficiency.',
    link: 'View strategy',
    linkHref: '#',
  },
  {
    number: '05',
    title: 'RELIABLE DELIVERY',
    desc: 'From the initial idea to the final launch, we focus on clear communication, thoughtful planning, and reliable delivery at every stage. Each project is tested and refined.',
    link: 'How we work',
    linkHref: '#',
  },
];

const WhatWeDeliver = () => {
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
        // Pin every card except the last one
        if (i < cards.length - 1) {
          ScrollTrigger.create({
            trigger: card,
            start: 'top top',
            endTrigger: endEl,
            end: 'top bottom',
            pin: true,
            pinSpacing: false,
          });

          // Scale down + blur as next card scrolls over
          gsap.to(card, {
            scale: 0.88,
            filter: 'blur(4px) brightness(0.4)',
            scrollTrigger: {
              trigger: cards[i + 1],
              start: 'top bottom',
              end: 'top top',
              scrub: true,
            },
          });
        }
      });
    }, scroller);

    return () => ctx.revert();
  }, []);

  return (
    <section className="wwd-section" ref={sectionRef}>
      {/* Section Header */}
      <div className="wwd-header">
        <div className="wwd-header-inner">
          <span className="wwd-label">What We Deliver</span>
          <h2 className="wwd-heading">
            HOW WE DRIVE<br />YOUR GROWTH?
          </h2>
        </div>
        {/* Spinning badge */}
        <div className="wwd-badge">
          <svg viewBox="0 0 100 100" className="wwd-badge-svg">
            <defs>
              <path id="circlePath" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
            </defs>
            <text>
              <textPath href="#circlePath" className="wwd-badge-text">
                SBT DIGITAL • MARKETING • AGENCY •
              </textPath>
            </text>
            <circle cx="50" cy="50" r="18" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="50" cy="50" r="2" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Stacking Cards Scroller */}
      <div className="wwd-scroller" ref={scrollerRef}>
        <div className="wwd-scroller-inner">
          {deliverables.map((item, index) => (
            <div
              key={index}
              className={`wwd-card wwd-card--${index % 3 === 0 ? 'dark' : index % 3 === 1 ? 'accent' : 'light'}`}
              ref={(el) => (cardRefs.current[index] = el)}
            >
              {/* Dark overlay element for stacking effect */}
              <div className="wwd-card-overlay" />

              <div className="wwd-card-content">
                {/* Top bar with number and label */}
                <div className="wwd-card-topbar">
                  <span className="wwd-card-number">{item.number}</span>
                  <span className="wwd-card-label">What We Deliver</span>
                </div>

                {/* Main content */}
                <div className="wwd-card-body">
                  <h3 className="wwd-card-title">{item.title}</h3>
                  <div className="wwd-card-meta">
                    <p className="wwd-card-desc">{item.desc}</p>
                    <a href={item.linkHref} className="wwd-card-link">
                      {item.link}
                      <span className="wwd-card-link-arrow">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* End trigger for pin calculation */}
        <div className="wwd-end" ref={endRef} />
      </div>
    </section>
  );
};

export default WhatWeDeliver;
