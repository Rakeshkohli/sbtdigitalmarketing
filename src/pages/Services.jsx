import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Compass, Target, Cpu, TrendingUp, Sparkles, Award, ShieldAlert, BarChart3, Users } from 'lucide-react';

const allServices = [
  {
    id: '01',
    title: 'Lead Generation',
    tag: 'B2B & B2C Acquisition',
    desc: 'Targeted strategies to capture and convert high-quality prospects into paying customers.',
    features: [
      'B2B & B2C acquisition funnel',
      'Landing page optimization',
      'Email outreach campaigns',
      'High-intent lead scoring'
    ],
    pricing: 'From $499 / mo',
    color: '#10B981', // emerald
    href: '/contact'
  },
  {
    id: '02',
    title: 'Google Ads',
    tag: 'Google · SEM · PPC',
    desc: 'Data-driven PPC campaigns designed to maximize ROI and lower cost-per-acquisition.',
    features: [
      'Search & Display campaigns',
      'Performance Max setups',
      'Bid management & audit',
      'Conversions & CPA tracking'
    ],
    pricing: 'From $799 / mo',
    color: '#F97316', // orange
    href: '/contact'
  },
  {
    id: '03',
    title: 'SEO Optimization',
    tag: 'Google · ChatGPT · Perplexity · SGE',
    desc: 'Comprehensive on-page and off-page SEO to dominate search engine rankings.',
    features: [
      'Technical SEO audits & fixes',
      'Keyword & competitor research',
      'High-quality link building',
      'AI Search Engines optimization'
    ],
    pricing: 'From $599 / mo',
    color: '#0EA5E9', // sky
    href: '/contact'
  },
  {
    id: '04',
    title: 'SMO (Social Media)',
    tag: 'SMM · Content Strategy',
    desc: 'Engaging content and community management across Facebook, Instagram, LinkedIn, and YouTube.',
    features: [
      'Content strategy & calendar',
      'Organic growth strategy',
      'High-engagement video reels',
      'Community & inbox monitoring'
    ],
    pricing: 'From $399 / mo',
    color: '#EC4899', // pink
    href: '/contact'
  },
  {
    id: '05',
    title: 'ORM (Reputation)',
    tag: 'ORM · Brand Safety',
    desc: 'Monitor, manage, and improve your brand reputation across the web and search results.',
    features: [
      'Reviews & feedback monitoring',
      'Brand mention response management',
      'Negative result mitigation',
      'Positive brand asset building'
    ],
    pricing: 'From $299 / mo',
    color: '#F59E0B', // amber
    href: '/contact'
  },
  {
    id: '06',
    title: 'Web Development',
    tag: 'React · Vite · Custom Code',
    desc: 'Custom, fast, and SEO-friendly websites that turn visitors into paying customers.',
    features: [
      'Clean custom React/Vite builds',
      'Fast & mobile-responsive layout',
      'SEO-first semantic structure',
      'UI/UX conversion rate optimization'
    ],
    pricing: 'From $1,499 / project',
    color: '#7C3AED', // violet
    href: '/contact'
  },
  {
    id: '07',
    title: 'Mobile App Dev',
    tag: 'iOS · Android · Flutter',
    desc: 'Native and cross-platform mobile apps providing seamless, intuitive user experiences.',
    features: [
      'iOS & Android native apps',
      'Cross-platform Flutter builds',
      'App Store Optimization (ASO)',
      'Secure API & CRM integration'
    ],
    pricing: 'From $2,499 / project',
    color: '#06B6D4', // cyan
    href: '/contact'
  },
  {
    id: '08',
    title: 'Facebook Marketing',
    tag: 'Meta Ads · FB & IG',
    desc: 'Hyper-targeted Meta ad campaigns designed to scale your ecommerce or local brand.',
    features: [
      'Meta Ads Manager setup',
      'Pixel & Conversions API workflow',
      'Ad creative testing & templates',
      'Custom & lookalike targeting'
    ],
    pricing: 'From $599 / mo',
    color: '#3B82F6', // blue
    href: '/contact'
  },
  {
    id: '09',
    title: 'Amazon Marketing',
    tag: 'Amazon PPC · Store SEO',
    desc: 'End-to-end Amazon seller store management, SEO, and advertising campaign optimization.',
    features: [
      'Product listing SEO & keywords',
      'Amazon PPC & DSP advertising',
      'Storefront & A+ content styling',
      'FBA seller account management'
    ],
    pricing: 'From $799 / mo',
    color: '#F59E0B', // amber
    href: '/contact'
  },
  {
    id: '10',
    title: 'Graphic Design',
    tag: 'Branding · Layout · Assets',
    desc: 'Stunning visual assets, brand identity guidelines, and marketing collateral.',
    features: [
      'Logo & brand guidelines book',
      'Custom marketing ad templates',
      'High-quality social templates',
      'Print & banner asset layouts'
    ],
    pricing: 'From $299 / project',
    color: '#EF4444', // red
    href: '/contact'
  },
  {
    id: '11',
    title: 'Flipkart Marketing',
    tag: 'Flipkart Ads · Store Setup',
    desc: 'Boost your sales, product ranking, and search placement on India\'s leading ecommerce marketplace.',
    features: [
      'Catalog list optimization',
      'Product listing ads (PLA) setup',
      'Deals & coupons setup management',
      'Performance audit & analytics'
    ],
    pricing: 'From $499 / mo',
    color: '#F43F5E', // rose
    href: '/contact'
  },
  {
    id: '12',
    title: 'Video Editing',
    tag: 'Reels · TikToks · Ad Video',
    desc: 'Professional editing and visual production for high-performing video ads, YouTube, and reels.',
    features: [
      'High-retention social content reels',
      'PPC video ad creation',
      'Sound design & color grading',
      'Dynamic captions & animations'
    ],
    pricing: 'From $399 / project',
    color: '#8B5CF6', // purple
    href: '/contact'
  }
];

const processSteps = [
  {
    step: '01',
    week: 'Week 1 · Free Audit',
    title: 'Discovery',
    desc: 'Deep dive into your business, target audience, competitors, and technical setup.',
    color: '#A78BFA', // Violet
    icon: <Compass className="w-6 h-6 text-[#A78BFA]" />
  },
  {
    step: '02',
    week: 'Week 2 · Roadmap',
    title: 'Strategy',
    desc: 'Custom digital marketing and channel blueprints prioritizing your highest-ROI growth pathways.',
    color: '#38BDF8', // Sky
    icon: <Target className="w-6 h-6 text-[#38BDF8]" />
  },
  {
    step: '03',
    week: 'Weeks 3-8 · Launch',
    title: 'Execution',
    desc: 'High-speed setup, content creation, web builds, and search/paid ad campaign launches.',
    color: '#34D399', // Emerald
    icon: <Cpu className="w-6 h-6 text-[#34D399]" />
  },
  {
    step: '04',
    week: 'Ongoing · Compound',
    title: 'Optimize',
    desc: 'Continuous analytical checking, testing, conversion rate adjustments, and scale optimization.',
    color: '#BFFF00', // Lime
    icon: <TrendingUp className="w-6 h-6 text-[#BFFF00]" />
  }
];

const stats = [
  { value: '8 Wks', label: 'Average launch time', color: '#A78BFA' },
  { value: '24/7', label: 'Campaign monitoring', color: '#38BDF8' },
  { value: '14 Days', label: 'Feedback & review cycle', color: '#34D399' },
  { value: '100%', label: 'Result-oriented approach', color: '#BFFF00' }
];

const Services = () => {
  return (
    <div className="bg-[#050507] text-white min-h-screen pt-28 pb-20 relative overflow-hidden font-sans">
      {/* Import Serif web font inline */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@1,9..144,300;1,9..144,400;1,9..144,700&display=swap');
        .font-fraunces {
          font-family: 'Fraunces', serif;
        }
      `}} />

      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[20%] w-[600px] h-[600px] rounded-full bg-purple-600/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HERO SECTION */}
        <section className="relative pt-12 pb-24 text-center">
          {/* Outlined backdrop word */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
            <span className="text-[12vw] font-black leading-none uppercase tracking-widest text-transparent opacity-[0.03]" style={{ WebkitTextStroke: '1.5px white' }}>
              SERVICES
            </span>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-primary text-xs font-black tracking-[0.5em] uppercase mb-6 flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" /> WHAT WE OFFER
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight mb-8">
              FULL-STACK <br />
              <span className="font-fraunces italic font-light text-transparent" style={{ WebkitTextStroke: '1.5px white' }}>
                SOLUTIONS.
              </span>
            </h1>
            <p className="text-white/50 text-base md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              Everything you need to acquire customers, amplify traffic, and grow your brand — styled to perform and engineered to convert.
            </p>
            <div>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-black font-black rounded-full uppercase tracking-wider hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(74,222,128,0.25)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)]"
              >
                Get a Free Audit <ArrowRight className="w-5 h-5 text-black" />
              </Link>
            </div>
          </motion.div>
        </section>

        {/* SERVICES STACK STACK */}
        <section className="py-8 space-y-12">
          {allServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="group rounded-3xl border border-white/[0.05] overflow-hidden transition-all duration-500 hover:border-white/[0.12]"
              style={{
                background: `linear-gradient(135deg, ${service.color}12 0%, rgba(5,5,7,0) 65%), #0c0c0e`
              }}
            >
              <div className="p-8 md:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Side: Details & features */}
                <div className="lg:col-span-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span 
                      className="text-4xl md:text-5xl font-black leading-none tabular-nums select-none opacity-50"
                      style={{ 
                        WebkitTextStroke: `1.5px ${service.color}`,
                        color: 'transparent'
                      }}
                    >
                      {service.id}
                    </span>
                    <div className="space-y-1">
                      <p 
                        className="text-[0.65rem] md:text-xs font-black tracking-[0.35em] uppercase"
                        style={{ color: service.color }}
                      >
                        {service.tag}
                      </p>
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-2xl">
                    {service.desc}
                  </p>

                  {/* Bullet checklist grid */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 pt-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3 text-sm text-white/70">
                        <span 
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: service.color, boxShadow: `0 0 10px ${service.color}` }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Side: Pricing & CTA block */}
                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end justify-between lg:justify-start gap-6 border-t lg:border-t-0 lg:border-l border-white/5 pt-6 lg:pt-0 lg:pl-8 min-w-[200px]">
                  
                  {/* Price info */}
                  <div className="lg:text-right">
                    <p className="text-[0.62rem] font-black tracking-[0.3em] uppercase text-white/30 mb-1">
                      INVESTMENT
                    </p>
                    <p className="text-white font-bold text-lg md:text-xl">
                      {service.pricing}
                    </p>
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-col gap-3 w-full sm:max-w-xs lg:w-full">
                    <Link
                      to={service.href}
                      className="w-full text-center px-6 py-3.5 rounded-full font-black text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105"
                      style={{ 
                        backgroundColor: service.color, 
                        color: '#000',
                        boxShadow: `0 0 25px ${service.color}35`
                      }}
                    >
                      Get Started →
                    </Link>
                    <Link
                      to="/contact"
                      className="w-full text-center px-6 py-3 rounded-full font-black text-[10px] uppercase tracking-wider transition-all duration-300 border hover:scale-105"
                      style={{ 
                        borderColor: `${service.color}40`,
                        color: service.color,
                        backgroundColor: `${service.color}08`
                      }}
                    >
                      Enquire Now
                    </Link>
                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </section>

        {/* TIMELINE SECTION */}
        <section className="py-24 relative">
          <div className="mb-16 text-center lg:text-left relative">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-5">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
              <span className="text-primary text-xs font-black tracking-[0.3em] uppercase">HOW WE WORK · 4 STEPS</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-none tracking-tight">
              THE <br className="hidden md:block lg:hidden" />
              <span className="font-fraunces italic font-light text-transparent" style={{ WebkitTextStroke: '1.5px white' }}>
                Process.
              </span>
            </h2>
            <p className="text-white/50 text-sm md:text-base max-w-xl mt-5 mx-auto lg:mx-0">
              From discovery to compounding results — a proven 4-step framework built to deliver and optimize performance campaigns.
            </p>
          </div>

          {/* Timeline Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {processSteps.map((step, stepIndex) => (
              <motion.div
                key={stepIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: stepIndex * 0.1 }}
                className="group relative p-8 rounded-3xl bg-[#0c0c0e] border border-white/[0.04] hover:-translate-y-2 hover:border-white/[0.1] hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-500 overflow-hidden"
              >
                {/* Decorative step color background glow */}
                <div 
                  className="absolute -top-16 -right-16 w-32 h-32 rounded-full opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 pointer-events-none" 
                  style={{ backgroundColor: step.color }}
                />

                <div className="relative mb-6 flex justify-between items-center">
                  <div className="p-3 bg-white/[0.03] border border-white/5 rounded-2xl">
                    {step.icon}
                  </div>
                  <span 
                    className="text-4xl font-black opacity-25 select-none"
                    style={{ WebkitTextStroke: `1px ${step.color}`, color: 'transparent' }}
                  >
                    {step.step}
                  </span>
                </div>

                <p 
                  className="text-[0.65rem] font-black tracking-[0.25em] uppercase mb-2"
                  style={{ color: step.color }}
                >
                  {step.week}
                </p>
                <h3 className="text-white font-black text-xl mb-3 leading-tight">{step.title}</h3>
                <p className="text-white/50 text-xs md:text-sm leading-relaxed">{step.desc}</p>
                
                {/* Accent bottom border highlight */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-[2px] origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" 
                  style={{ background: `linear-gradient(90deg, transparent, ${step.color}, transparent)` }}
                />
              </motion.div>
            ))}
          </div>

          {/* SVG Connector Track for desktop layout */}
          <div className="hidden lg:block absolute top-[280px] left-0 right-0 h-[1.5px] bg-white/[0.03] -z-0 pointer-events-none">
            <div className="h-full bg-gradient-to-r from-purple-500 via-sky-500 to-lime-400 w-full opacity-30" />
          </div>
        </section>

        {/* TRUST STATS SECTION */}
        <section className="py-12 border-t border-white/[0.05]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
            {stats.map((stat, statIndex) => (
              <motion.div
                key={statIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: statIndex * 0.05 }}
                className="p-6 md:p-8 rounded-3xl bg-white/[0.01] border border-white/[0.03] text-center"
              >
                <p 
                  className="text-3xl md:text-5xl font-black tracking-tight mb-2"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </p>
                <p className="text-white/40 text-xs md:text-sm uppercase tracking-wider leading-snug">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Final Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-r from-[#0d0d0f] via-[#121217] to-[#0d0d0f] border border-white/[0.06] text-center max-w-4xl mx-auto shadow-[0_30px_70px_rgba(0,0,0,0.5)]"
          >
            <h3 className="text-2xl md:text-4xl font-black text-white mb-4">
              Ready to Accelerate Your Brand Growth?
            </h3>
            <p className="text-white/50 text-sm md:text-base max-w-lg mx-auto mb-8">
              Get an actionable audit of your website, search ranking, and advertising performance completely free.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-black font-black rounded-full uppercase tracking-wider hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_35px_rgba(74,222,128,0.2)]"
              >
                Claim Free Audit <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 rounded-full font-black text-xs uppercase tracking-wider text-white border border-white/10 hover:border-white/30 hover:bg-white/[0.03] hover:scale-105 transition-all duration-300"
              >
                Talk to our Experts
              </Link>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
};

export default Services;

