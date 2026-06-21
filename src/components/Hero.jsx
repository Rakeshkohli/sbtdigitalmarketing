import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, PhoneCall, CheckCircle, BarChart3, Target, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const TiltCard = () => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Calculate rotation (-15 to +15 degrees)
    const xPct = (mouseX / width - 0.5) * 2;
    const yPct = (mouseY / height - 0.5) * 2;
    
    x.set(xPct * 15);
    y.set(yPct * -15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: mouseYSpring,
        rotateY: mouseXSpring,
        transformStyle: "preserve-3d",
      }}
      className="w-full max-w-[420px] md:max-w-none h-auto md:h-[450px] min-h-[300px] md:min-h-0 bg-[rgba(20,20,20,0.6)] border border-[rgba(255,255,255,0.1)] rounded-[20px] md:rounded-[24px] backdrop-blur-[20px] relative shadow-2xl shadow-black/50 flex items-center justify-center cursor-grab active:cursor-grabbing"
    >
      <div 
        className="w-full md:w-[90%] h-full md:h-[85%] bg-[rgba(10,10,10,0.8)] border border-[rgba(255,255,255,0.05)] rounded-2xl flex flex-col p-5 md:p-6 shadow-xl shadow-black/50" 
        style={{ transform: "translateZ(50px)" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(74,222,128,0.2),transparent_50%)] rounded-[20px] md:rounded-[24px] pointer-events-none"></div>
        <div className="flex items-center gap-4 mb-5 md:mb-8 border-b border-[rgba(255,255,255,0.05)] pb-3 md:pb-4">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#eab308]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]"></span>
          </div>
          <span className="text-text-muted text-[0.9rem] font-semibold tracking-wider uppercase">Performance Overview</span>
        </div>
        
        <div className="flex flex-col gap-5 md:gap-8 grow">
          <div className="flex justify-between gap-2 md:gap-4">
            <div className="bg-white/[0.03] p-3 md:p-4 rounded-xl flex-1 flex flex-col gap-1 md:gap-2 border border-white/[0.02]">
              <BarChart3 size={24} color="#4ade80" />
              <div>
                <h5 className="text-text-muted font-medium text-[0.75rem] md:text-[0.85rem]">Traffic</h5>
                <strong className="text-[1.15rem] md:text-2xl font-bold text-white">+245%</strong>
              </div>
            </div>
            <div className="bg-white/[0.03] p-3 md:p-4 rounded-xl flex-1 flex flex-col gap-1 md:gap-2 border border-white/[0.02]">
              <Target size={24} color="#3b82f6" />
              <div>
                <h5 className="text-text-muted font-medium text-[0.75rem] md:text-[0.85rem]">Leads</h5>
                <strong className="text-[1.15rem] md:text-2xl font-bold text-white">1,204</strong>
              </div>
            </div>
            <div className="bg-white/[0.03] p-3 md:p-4 rounded-xl flex-1 flex flex-col gap-1 md:gap-2 border border-white/[0.02]">
              <Zap size={24} color="#f59e0b" />
              <div>
                <h5 className="text-text-muted font-medium text-[0.75rem] md:text-[0.85rem]">ROI</h5>
                <strong className="text-[1.15rem] md:text-2xl font-bold text-white">3.8x</strong>
              </div>
            </div>
          </div>
          
          <div className="grow rounded-xl bg-white/[0.02] border border-white/[0.02] p-2 md:p-4 h-[90px] md:h-auto flex items-end">
            <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full overflow-visible">
              <path d="M0 40 L0 30 L20 25 L40 35 L60 15 L80 20 L100 5 L100 40 Z" fill="rgba(74, 222, 128, 0.2)" />
              <path d="M0 30 L20 25 L40 35 L60 15 L80 20 L100 5" fill="none" stroke="#4ade80" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section className="min-h-fit md:min-h-screen flex items-center pt-[130px] md:pt-20 relative overflow-hidden">
      <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-[radial-gradient(circle,rgba(74, 222, 128, 0.15)_0%,rgba(37, 99, 235, 0.1)_30%,rgba(0, 0, 0, 0)_70%)] z-0 pointer-events-none"></div>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center pb-8 md:pb-0">
        <div className="max-w-[650px] z-10 mx-auto md:mx-0 text-center md:text-left min-[576px]:max-[992px]:text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30, rotateX: -20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-[1.8rem] md:text-[3.5rem] font-extrabold leading-[1.2] md:leading-[1.1] mt-4 md:mt-0 mb-4 md:mb-6"
          >
            Result-Driven Digital Marketing Agency in India | <span className="text-gradient">SBT Digital Marketing</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-xl text-text-muted mb-8 md:mb-10 leading-relaxed"
          >
            We help businesses generate qualified leads, increase sales, and build powerful online presence through Meta Ads, SEO, Social Media & Website Development.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-row gap-2.5 md:gap-6 justify-center md:justify-start mb-8 md:mb-10 w-full"
          >
            <Link to="/contact" className="btn btn-primary flex-1 max-w-[200px] md:max-w-none md:flex-initial py-2 px-3 md:py-3.5 md:px-7 text-xs md:text-base justify-center whitespace-nowrap">
              <PhoneCall className="w-4 h-4 md:w-5 md:h-5" /> 
              <span className="hidden sm:inline">Get Free Strategy Call</span>
              <span className="inline sm:hidden">Strategy Call</span>
            </Link>
            <Link to="/services" className="btn btn-secondary flex-1 max-w-[200px] md:max-w-none md:flex-initial py-2 px-3 md:py-3.5 md:px-7 text-xs md:text-base justify-center whitespace-nowrap">
              <span className="hidden sm:inline">Start Growing Today</span>
              <span className="inline sm:hidden">Start Growing</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center md:justify-start gap-3 text-text-muted text-[0.95rem]"
          >
            <CheckCircle size={18} className="text-primary" />
            <p>Helping startups & local businesses scale with proven marketing systems.</p>
          </motion.div>
        </div>
        
        <div className="relative w-full h-auto md:h-[600px] min-h-[340px] mt-6 md:mt-0 flex items-center justify-center" style={{ perspective: "1000px" }}>
          <TiltCard />
        </div>
      </div>
    </section>
  );
};

export default Hero;
