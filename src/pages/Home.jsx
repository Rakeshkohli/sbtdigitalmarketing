import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from '../components/Hero';
import TrustBadges from '../components/TrustBadges';
import WhatWeDeliver from '../components/WhatWeDeliver';
import OurServices from '../components/OurServices';
import WhyChooseUs from '../components/WhyChooseUs';
import Clients from '../components/Clients';
import WhyTrustUs from '../components/WhyTrustUs';
import Testimonials from '../components/Testimonials';
import LimitedTime from '../components/LimitedTime';

const Section3DWrapper = ({ children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Apply subtle 3D transformations based on scroll position
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -10]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5]);

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        scale,
        opacity,
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
      transition={{ type: "spring", stiffness: 100, damping: 30 }}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  return (
    <div style={{ perspective: "1500px", overflowX: "hidden" }}>
      <Hero />
      <Section3DWrapper><TrustBadges /></Section3DWrapper>
      <Section3DWrapper><WhatWeDeliver /></Section3DWrapper>
      <Section3DWrapper><OurServices /></Section3DWrapper>
      <Section3DWrapper><WhyChooseUs /></Section3DWrapper>
      <Section3DWrapper><Clients /></Section3DWrapper>
      <Section3DWrapper><WhyTrustUs /></Section3DWrapper>
      <Section3DWrapper><Testimonials /></Section3DWrapper>
      <Section3DWrapper><LimitedTime /></Section3DWrapper>
    </div>
  );
};

export default Home;
