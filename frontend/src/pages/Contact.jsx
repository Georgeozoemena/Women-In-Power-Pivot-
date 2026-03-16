import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import "../styles/contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "officialwomeninpower@gmail.com",
      link: "mailto:officialwomeninpower@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+234 816 408 2120",
      link: "tel:+2348164082120"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Awka, Nigeria",
      link: null
    }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({ type: 'error', message: 'Email service is not configured.' });
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }, publicKey);

      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Background Blobs */}
      <div className="mesh-blob mesh-blob-1" style={{ top: '0', right: '-10%' }} />
      <div className="mesh-blob mesh-blob-2" style={{ bottom: '0', left: '-10%' }} />

      <div className="container section-padding">
        <header className="contact-hero">
          <span className="section-label">CONTACT US</span>
          <motion.h1
            className="contact-hero__title contact-head"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Let's <br />Connect.
          </motion.h1>
          <p className="contact-hero__subtitle">
            Have questions? Want to partner? We'd love to hear from you.
          </p>
        </header>

        <div className="contact-layout">
          {/* Form Side - Primary Focus */}
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {status.message && (
              <div className={`form-status ${status.type}`}>{status.message}</div>
            )}
            <div className="form-group-row">
              <div className="form-group">
                <label className="form-label">Name</label>
                <input type="text" name="name" className="form-input" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input type="email" name="email" className="form-input" value={formData.email} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Subject</label>
              <input type="text" name="subject" className="form-input" value={formData.subject} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea name="message" className="form-textarea" rows="6" value={formData.message} onChange={handleChange} required />
            </div>
            <button type="submit" className="btn-contact-submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </motion.form>

          {/* Info Side - Simple Integrated Flow */}
          <div className="contact-info-list">
            {contactInfo.map((item, idx) => {
              const Icon = item.icon;
              const content = (
                <motion.div
                  key={item.label}
                  className="info-item-flat"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="info-icon-small"><Icon size={18} /></div>
                  <div className="info-text-group">
                    <span className="info-label-small">{item.label}</span>
                    <h3 className="info-value-small">
                      {item.value}
                      {item.link && <ArrowUpRight size={14} className="link-arrow-icon" />}
                    </h3>
                  </div>
                </motion.div>
              );
              return item.link ? <a href={item.link} key={item.label} className="info-link-wrapper">{content}</a> : content;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}