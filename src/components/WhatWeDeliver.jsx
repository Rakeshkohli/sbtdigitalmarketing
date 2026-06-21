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
    theme: 'light',
  },
  {
    number: '02',
    title: 'QUALIFIED LEADS',
    desc: 'Stop wasting money on unqualified clicks. We build targeted funnels that attract your ideal customers and convert them into solid, high-value leads.',
    link: 'How we do it',
    theme: 'dark',
  },
  {
    number: '03',
    title: 'POWERFUL BRAND PRESENCE',
    desc: 'Dominate your industry with a cohesive, professional online presence across search engines, social media, and your website — built for long-term dominance.',
    link: 'Our approach',
    theme: 'accent',
  },
  {
    number: '04',
    title: 'DATA-DRIVEN STRATEGY',
    desc: 'Every decision is backed by analytics and real data. We continuously optimize your campaigns based on performance metrics, ensuring consistent growth and efficiency.',
    link: 'View strategy',
    theme: 'light',
  },
  {
    number: '05',
    title: 'RELIABLE DELIVERY',
    desc: 'From the initial idea to the final launch, we focus on clear communication, thoughtful planning, and reliable delivery at every stage. Each project is tested and refined.',
    link: 'How we work',
    theme: 'dark',
  },
];

const WhatWeDeliver = () => {
  const sectionRef = useRef(null);
  const panelsContainerRef = useRef(null);
  const panelRefs = useRef([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const panelsContainer = panelsContainerRef.current;
    const panels = panelRefs.current;

    if (!section || !panelsContainer || panels.length === 0) return;

    const ctx = gsap.context(() => {
      // Each panel gets pinned and stacks on top of the previous
      panels.forEach((panel, i) => {
        if (i === panels.length - 1) return; // last panel doesn't need pinning

        ScrollTrigger.create({
          trigger: panel,
          start: 'top top',
          endTrigger: panelsContainer,
          end: 'bottom bottom',
          pin: true,
          pinSpacing: false,
        });

        // Scale down the panel as the next one comes over it
        gsap.to(panel, {
          scale: 0.93,
          opacity: 0.4,
          filter: 'brightness(0.5)',
          scrollTrigger: {
            trigger: panels[i + 1],
            start: 'top bottom',
            end: 'top top',
            scrub: true,
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="wwd-section" ref={sectionRef}>
      {/* Header */}
      <div className="wwd-header">
        <span className="wwd-label">What We Deliver</span>
        <h2 className="wwd-heading">
          HOW WE DRIVE<br />YOUR GROWTH?
        </h2>
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

      {/* Dot navigation */}
      <div className="wwd-dots">
        {deliverables.map((_, i) => (
          <div key={i} className={`wwd-dot ${i === 0 ? 'wwd-dot--active' : ''}`} />
        ))}
      </div>

      {/* Stacked panels */}
      <div className="wwd-panels" ref={panelsContainerRef}>
        {deliverables.map((item, index) => (
          <div
            key={index}
            className={`wwd-panel wwd-panel--${item.theme}`}
            ref={(el) => (panelRefs.current[index] = el)}
          >
            {/* Vertical grid lines */}
            <div className="wwd-grid-lines">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="wwd-grid-line" />
              ))}
            </div>

            <div className="wwd-panel-inner">
              {/* Left: Title */}
              <div className="wwd-panel-left">
                <h3 className="wwd-panel-title">{item.title}</h3>
              </div>

              {/* Center: Description */}
              <div className="wwd-panel-center">
                <p className="wwd-panel-desc">{item.desc}</p>
                <a href="#" className="wwd-panel-link">
                  {item.link} <span className="wwd-link-arrow">↗</span>
                </a>
              </div>

              {/* Right: Ghost Number */}
              <div className="wwd-panel-right">
                <span className="wwd-panel-number">{item.number}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDeliver;
