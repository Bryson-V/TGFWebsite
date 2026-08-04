"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import styles from "./ApplicationSection.module.css";

export default function ApplicationSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    applicationPdf: null,
    cvFile: null,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ready for your API email endpoint hookup later
    console.log("Submitting files and contact info:", formData);
    setSubmitted(true);
  };

  return (
    <section id="apply" className={styles.section}>
      <Container>
        <SectionHeading title="Submit Your Application" align="center" />
        <div className={styles.wrapper}>
          
          {/* Fillable PDF Download Card */}
          <div className={styles.pdfCard}>
            <div className={styles.pdfIcon}>📄</div>
            <div>
              <h3>Step 1: Download &amp; Complete Fillable PDF</h3>
              <p>Download our official employment application PDF, fill it out on your device or print/scan it, then attach it below alongside your CV.</p>
            </div>
            <a href="/fillForm.pdf" download className={styles.pdfButton}>
              Download PDF
            </a>
          </div>

          {/* Streamlined Submission Form */}
          <div className={styles.formContainer}>
            {submitted ? (
              <div className={styles.successBox}>
                <h4>Application Sent Successfully!</h4>
                <p>Thank you. Your documents have been received and our team will review them shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.row}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="fullName">Full Name *</label>
                    <input 
                      type="text" 
                      id="fullName" 
                      name="fullName" 
                      required 
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Jane Doe" 
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label htmlFor="email">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com" 
                    />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="phone">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required 
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (671) 000-0000" 
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label htmlFor="applicationPdf">Filled Application PDF *</label>
                    <input 
                      type="file" 
                      id="applicationPdf" 
                      name="applicationPdf" 
                      required 
                      accept=".pdf"
                      onChange={handleChange}
                    />
                    <span className={styles.fileHint}>Upload your completed fillable PDF</span>
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="cvFile">Upload Your CV / Resume *</label>
                  <input 
                    type="file" 
                    id="cvFile" 
                    name="cvFile" 
                    required 
                    accept=".pdf,.doc,.docx"
                    onChange={handleChange}
                  />
                  <span className={styles.fileHint}>Accepted formats: PDF, DOC, DOCX</span>
                </div>

                <button type="submit" className={styles.submitButton}>
                  Send Application
                </button>
              </form>
            )}
          </div>

        </div>
      </Container>
    </section>
  );
}