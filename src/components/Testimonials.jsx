import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Quote } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: "Rahul Sharma", role: "CEO, TechInnovate",
    text: "SBT Digital Marketing completely transformed our online presence. Our lead generation increased by 200% within the first 3 months. Highly recommended!"
  },
  {
    name: "Priya Desai", role: "Founder, Bloom Boutique",
    text: "Their team understands social media like no one else. They created a strategy that perfectly aligned with our brand and drove massive sales."
  },
  {
    name: "Amit Patel", role: "Director, BuildCorp",
    text: "Professional, transparent, and results-driven. Their SEO efforts got us ranking on the first page for highly competitive keywords."
  }
];

const Testimonials = () => {
  return (
    <section className="section" style={{ position: 'relative' }}>
      <div className="container">
        <h2 className="section-title">Client Success Stories</h2>
        <p className="section-subtitle">Don't just take our word for it. Here's what our clients have to say.</p>
        
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          style={{ paddingBottom: '3rem' }}
        >
          {testimonials.map((test, index) => (
            <SwiperSlide key={index}>
              <div className="glass-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Quote size={40} style={{ color: 'var(--primary)', opacity: 0.5, marginBottom: '1rem' }} />
                <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '2rem', flexGrow: 1 }}>"{test.text}"</p>
                <div>
                  <h4 style={{ fontWeight: 700 }}>{test.name}</h4>
                  <span style={{ color: 'var(--primary)', fontSize: '0.9rem' }}>{test.role}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .swiper-pagination-bullet { background: var(--text-muted); }
        .swiper-pagination-bullet-active { background: var(--primary); }
      `}} />
    </section>
  );
};

export default Testimonials;
