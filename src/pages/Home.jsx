import React from 'react';
import Hero from '../components/Hero';
import TrustBadges from '../components/TrustBadges';
import WhatWeDeliver from '../components/WhatWeDeliver';
import OurServices from '../components/OurServices';
import WhyChooseUs from '../components/WhyChooseUs';
import Clients from '../components/Clients';
import WhyTrustUs from '../components/WhyTrustUs';
import Testimonials from '../components/Testimonials';
import LimitedTime from '../components/LimitedTime';

const Home = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Hero />
      <TrustBadges />
      <WhatWeDeliver />
      <OurServices />
      <WhyChooseUs />
      <Clients />
      <WhyTrustUs />
      <Testimonials />
      <LimitedTime />
    </div>
  );
};

export default Home;
