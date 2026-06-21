import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully! We'll get back to you shortly.");
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '4rem' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 className="section-title">Let's Work Together</h1>
          <p className="section-subtitle">
            Ready to take your business to the next level? Drop us a message and our experts will connect with you.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Contact Information</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <div style={{ background: 'rgba(74, 222, 128, 0.1)', padding: '1rem', borderRadius: '50%', color: 'var(--primary)', height: 'max-content' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Our Office</h4>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>123 Tech Park, Phase 1<br />Digital City, India 400001</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <div style={{ background: 'rgba(74, 222, 128, 0.1)', padding: '1rem', borderRadius: '50%', color: 'var(--primary)', height: 'max-content' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Call Us</h4>
                  <p style={{ color: 'var(--text-muted)' }}>+91 98765 43210</p>
                  <p style={{ color: 'var(--text-muted)' }}>+91 91234 56789</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <div style={{ background: 'rgba(74, 222, 128, 0.1)', padding: '1rem', borderRadius: '50%', color: 'var(--primary)', height: 'max-content' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Email Us</h4>
                  <p style={{ color: 'var(--text-muted)' }}>info@sbtdigital.com</p>
                  <p style={{ color: 'var(--text-muted)' }}>sales@sbtdigital.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card"
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Send us a Message</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <input 
                  type="text" name="name" placeholder="Your Name" required
                  value={formData.name} onChange={handleChange}
                  style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', borderRadius: '0.5rem', color: '#fff' }}
                />
                <input 
                  type="email" name="email" placeholder="Your Email" required
                  value={formData.email} onChange={handleChange}
                  style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', borderRadius: '0.5rem', color: '#fff' }}
                />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <input 
                  type="tel" name="phone" placeholder="Phone Number"
                  value={formData.phone} onChange={handleChange}
                  style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', borderRadius: '0.5rem', color: '#fff' }}
                />
                <select 
                  name="service" value={formData.service} onChange={handleChange}
                  style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', borderRadius: '0.5rem', color: '#fff' }}
                >
                  <option value="" style={{ color: '#000' }}>Interested Service</option>
                  <option value="seo" style={{ color: '#000' }}>SEO</option>
                  <option value="ads" style={{ color: '#000' }}>Google Ads</option>
                  <option value="social" style={{ color: '#000' }}>Social Media</option>
                  <option value="web" style={{ color: '#000' }}>Web Development</option>
                </select>
              </div>
              <textarea 
                name="message" rows="5" placeholder="Your Message" required
                value={formData.message} onChange={handleChange}
                style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', borderRadius: '0.5rem', color: '#fff', resize: 'vertical' }}
              ></textarea>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html:`
        @media (max-width: 992px) {
          .container > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
          form > div {
            grid-template-columns: 1fr !important;
          }
        }
        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: var(--primary) !important;
        }
      `}} />
    </div>
  );
};

export default Contact;
