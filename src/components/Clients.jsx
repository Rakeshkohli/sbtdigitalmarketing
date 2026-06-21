import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const clients = [
  "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=200&h=100&q=80",
  "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=200&h=100&q=80",
  "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=200&h=100&q=80",
  "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&w=200&h=100&q=80",
  "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=200&h=100&q=80",
  "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=200&h=100&q=80",
];

const Clients = () => {
  return (
    <section className="section" style={{ padding: '4rem 0', background: 'rgba(255,255,255,0.02)' }}>
      <div className="container">
        <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '3rem' }}>Trusted by Industry Leaders</h2>
        
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          style={{ transitionTimingFunction: 'linear' }}
        >
          {clients.map((logo, index) => (
            <SwiperSlide key={index}>
              <div style={{
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                filter: 'grayscale(100%) opacity(0.6)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.filter = 'grayscale(0%) opacity(1)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.filter = 'grayscale(100%) opacity(0.6)'; }}
              >
                <img src={logo} alt="Client logo" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain', borderRadius: '8px' }} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <style dangerouslySetInnerHTML={{__html:`
        .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}} />
    </section>
  );
};

export default Clients;
