"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import styles from "./requestLocation.module.css";
import { FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from "react-icons/fa";

export default function RequestLocationSection() {
  const [formData, setFormData] = useState({ name: "", email: "", location: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Insert your backend submission logic, Formspree, or EmailJS action here
    setSubmitted(true);
  };

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.card}>
          <div className={styles.headerContent}>
            <div className={styles.iconWrapper}>
              <FaMapMarkerAlt className={styles.mainIcon} />
            </div>
            <div className={styles.textGroup}>
              <span className={styles.badge}>Can't find us near you?</span>
              <h3 className={styles.title}>Request a New Outreach Location</h3>
              <p className={styles.description}>
                We are constantly expanding our mobile health clinics across Guam. Fill out the form below to let us know where you would like to see us next!
              </p>
            </div>
          </div>

          {submitted ? (
            <div className={styles.successMessage}>
              <FaCheckCircle className={styles.successIcon} />
              <h4>Thank you for your request!</h4>
              <p>We've received your suggestion for <strong>{formData.location}</strong> and will keep it in mind as we expand our outreach routes.</p>
              <button 
                type="button" 
                onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", location: "" }); }}
                className={styles.resetButton}
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputRow}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name" className={styles.label}>Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="Enter your full name" 
                    required 
                    className={styles.input}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="email" className={styles.label}>Email Address</label>
                  <input 
                    type="email"
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="Enter your email" 
                    required 
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="location" className={styles.label}>Requested Location / Village</label>
                <input 
                  type="text" 
                  id="location" 
                  name="location" 
                  value={formData.location} 
                  onChange={handleChange} 
                  placeholder="e.g., Dededo neighborhood center, Yigo park, etc." 
                  required 
                  className={styles.input}
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                <FaPaperPlane className={styles.btnIcon} />
                Submit Location Request
              </button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}