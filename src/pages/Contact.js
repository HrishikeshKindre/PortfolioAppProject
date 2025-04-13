// Created by Hrishikesh Kindre for PortfolioAppProject

import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import '../styles/contact.css'; // Updated CSS file

function Contact() {
  const [loading, setLoading] = useState(false);
  const [toastMsg, setToastMsg] = useState('');
  const [showToast, setShowToast] = useState(false);
  const formRef = useRef();

  const showTemporaryToast = (message) => {
    setToastMsg(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  const validateEmail = (email) => 
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const email = formData.get('email');

    if (!validateEmail(email)) {
      showTemporaryToast('Please enter a valid email address.');
      return;
    }

    setLoading(true);

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formRef.current,
      process.env.REACT_APP_EMAILJS_USER_ID
    ).then(
      () => {
        showTemporaryToast('Message sent successfully!');
        formRef.current.reset();
      },
      () => {
        showTemporaryToast('Something went wrong. Please try again later.');
      }
    ).finally(() => setLoading(false));
  };

  return (
    <div className="contact-page">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>

        <div className="contact-card">
          <form onSubmit={handleSubmit} ref={formRef}>
            <div className="form-grid">
              <div className="form-field">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  required 
                />
              </div>
              <div className="form-field">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  required 
                />
              </div>
              <div className="form-field span-2">
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="Subject" 
                  required 
                />
              </div>
              <div className="form-field span-2">
                <textarea 
                  name="message" 
                  placeholder="Your Message" 
                  rows="5" 
                  required 
                />
              </div>
            </div>
            
            <button type="submit" disabled={loading}>
              {loading ? (
                <>
                  <span className="spinner"></span>
                  Sending...
                </>
              ) : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      {/* Toast Notification - CSS animated */}
      <div className={`toast ${showToast ? 'visible' : ''}`}>
        <div className="toast-content">
          <p>{toastMsg}</p>
          <button onClick={() => setShowToast(false)}>
            &times;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;