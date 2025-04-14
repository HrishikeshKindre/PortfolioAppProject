// Created by Hrishikesh Kindre for PortfolioAppProject

import React, { useState } from "react";
import "../styles/contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      toast.success("Thanks for reaching out!");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    }
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-left fade-in">
        <h1>Let’s Work Together</h1>
        <p>
          I’m open to freelance work, collaborations, or full-time
          opportunities. Drop me a line — let’s build something awesome.
        </p>

        <div className="section-title">Contact Information</div>
        <div className="contact-details">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:hrishikesh@example.com">hrishikesh@example.com</a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+1234567890">+1 (234) 567-890</a>
          </p>
          <p>
            <strong>Location:</strong> Milton, Ontario
          </p>
        </div>

        <div className="section-title">Find Me Online</div>
        <div className="social-icons">
          <a
            href="https://github.com/rishikesh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.93.58.1.79-.25.79-.55v-2.14c-3.2.7-3.87-1.54-3.87-1.54-.53-1.33-1.29-1.68-1.29-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.04 1.77 2.74 1.26 3.4.97.1-.76.41-1.27.74-1.56-2.55-.29-5.24-1.27-5.24-5.63 0-1.24.45-2.25 1.19-3.05-.12-.3-.52-1.53.11-3.18 0 0 .97-.31 3.17 1.18.92-.26 1.91-.39 2.89-.4.98 0 1.97.13 2.89.4 2.2-1.49 3.17-1.18 3.17-1.18.63 1.65.23 2.88.11 3.18.74.8 1.19 1.81 1.19 3.05 0 4.38-2.7 5.33-5.26 5.61.42.36.79 1.08.79 2.18v3.24c0 .3.2.65.8.54A10.998 10.998 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
            </svg>
          </a>

          <a
            href="https://linkedin.com/in/rishikesh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5C3.34 3.5 2 4.84 2 6.48s1.34 2.98 2.98 2.98S7.96 8.12 7.96 6.48 6.62 3.5 4.98 3.5zM2.4 21h5.16V9.24H2.4V21zM10.66 21h5.16v-5.6c0-3.12-3.36-2.88-3.36 0v5.6h-1.8V9.24h1.8v1.68c1.2-2.22 5.28-2.4 5.28 2.16V21H22V9.24h-5.16v1.2c-1.08-2.1-5.28-2.28-5.28 2.16V21z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="contact-right fade-in">
        <h2>Connect with Me</h2>
        <p className="subtext">
          I'm always looking forward to new challenges and conversations.
        </p>

        <form
          className="contact-form slide-up"
          onSubmit={handleSubmit}
          noValidate
        >
          {["name", "email", "message"].map((field) => (
            <div className="form-group" key={field}>
              {field === "message" ? (
                <textarea
                  name={field}
                  placeholder=" "
                  value={formData[field]}
                  onChange={handleChange}
                  className={errors[field] ? "error" : ""}
                  rows="5"
                />
              ) : (
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  placeholder=" "
                  value={formData[field]}
                  onChange={handleChange}
                  className={errors[field] ? "error" : ""}
                />
              )}
              <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
              {errors[field] && (
                <span className="error-message">{errors[field]}</span>
              )}
            </div>
          ))}

          <button type="submit" className="submit-btn">
            <span>Send Message</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
            </svg>
          </button>
        </form>
      </div>

      <ToastContainer position="top-right" />
    </div>
  );
}

export default Contact;