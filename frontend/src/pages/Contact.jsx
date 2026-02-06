import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Button from "../components/ui/Button";
import "../styles/contact.css";

export default function Contact() {
  const containerRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

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
      value: "+234 XXX XXX XXXX",
      link: "tel:+234XXXXXXXXX"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Awka, Nigeria",
      link: null
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      // Option 1: Using your own backend API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      /* Option 2: Using EmailJS (see setup instructions below)
      const response = await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'officialwomeninpower@gmail.com'
        },
        'YOUR_PUBLIC_KEY'
      );
      */

      /* Option 3: Using Formspree
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      */

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again or email us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" ref={containerRef}>
      <div className="contact__hero">
        <motion.div 
          className="contact__hero-content"
          style={{ y: textY }}
        >
          <motion.h1
            className="contact__title"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Let's Connect
          </motion.h1>
          <motion.p
            className="contact__subtitle"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Have questions? Want to partner with us? We'd love to hear from you.
          </motion.p>
        </motion.div>
      </div>

      <div className="contact__container">
        <div className="contact__wrapper">
          {/* Contact Info */}
          <motion.div 
            className="contact__info"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="contact__info-title">Get in Touch</h2>
            <p className="contact__info-text">
              Whether you're interested in our programs, seeking partnership opportunities, or have general inquiries, we're here to help.
            </p>

            <div className="contact__info-list">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                const content = (
                  <motion.div
                    key={item.label}
                    className="contact__info-item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="contact__info-icon">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <div className="contact__info-details">
                      <span className="contact__info-label">{item.label}</span>
                      <span className="contact__info-value">{item.value}</span>
                    </div>
                  </motion.div>
                );

                return item.link ? (
                  <a href={item.link} key={item.label} className="contact__info-link">
                    {content}
                  </a>
                ) : (
                  content
                );
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form 
            className="contact__form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {status.message && (
              <motion.div
                className={`contact__form-status contact__form-status--${status.type}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {status.message}
              </motion.div>
            )}

            <div className="contact__form-group">
              <label htmlFor="name" className="contact__form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="contact__form-input"
                placeholder="Your full name"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="contact__form-group">
              <label htmlFor="email" className="contact__form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="contact__form-input"
                placeholder="your.email@example.com"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="contact__form-group">
              <label htmlFor="subject" className="contact__form-label">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="contact__form-input"
                placeholder="What's this about?"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="contact__form-group">
              <label htmlFor="message" className="contact__form-label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="contact__form-textarea"
                placeholder="Tell us more..."
                rows="6"
                required
                disabled={isSubmitting}
              />
            </div>

            <Button 
              type="submit"
              className="contact__form-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="contact__form-spinner"></span>
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}