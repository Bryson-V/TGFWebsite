"use client";

import { useState, useEffect, useRef } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import jobsData from "@/content/site-data/jobsData.json";
import styles from "./ApplicationSection.module.css";

const DocumentIcon = () => (
  <svg className={styles.documentSvg} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const UploadIcon = () => (
  <svg className={styles.uploadSvg} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </svg>
);

export default function ApplicationSection() {
  const [selectedPosition, setSelectedPosition] = useState("");
  const pdfInputRef = useRef(null);
  const cvInputRef = useRef(null);

  // State for document preview modal
  const [previewFile, setPreviewFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    const handleJobSelect = (e) => {
      setSelectedPosition(e.detail);
    };

    window.addEventListener("selectJobPosition", handleJobSelect);
    return () => {
      window.removeEventListener("selectJobPosition", handleJobSelect);
    };
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    applicationPdf: null,
    cvFile: null,
  });

  const [submitted, setSubmitted] = useState(false);

  const openJobPositions = jobsData.filter(
    (item) => item.type !== "event" && item.type !== "outreach"
  );

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "selectedPosition") {
      setSelectedPosition(value);
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: files ? files[0] : value,
      }));
    }
  };

  const handleDrop = (e, fieldName) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFormData((prev) => ({
        ...prev,
        [fieldName]: e.dataTransfer.files[0],
      }));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleRemoveFile = (fieldName) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: null,
    }));
    if (fieldName === "applicationPdf" && pdfInputRef.current) {
      pdfInputRef.current.value = "";
    }
    if (fieldName === "cvFile" && cvInputRef.current) {
      cvInputRef.current.value = "";
    }
  };

  const openPreview = (file) => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    setPreviewFile(file);
  };

  const closePreview = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setPreviewUrl(null);
    setPreviewFile(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="apply" className={styles.section}>
      <Container>
        <SectionHeading title="Submit Your Application" align="center" />
        <div className={styles.wrapper}>
          
          <div className={styles.pdfCard}>
            <div className={styles.pdfIcon}>
              <DocumentIcon />
            </div>
            <div>
              <h3>Download &amp; Complete Fillable PDF</h3>
              <p>Download our official application PDF, fill it out on your device or print/scan it, then attach it below alongside your CV.</p>
            </div>
            <a href="/resources/ApplicationForm.pdf" download className={styles.pdfButton}>
              Download PDF
            </a>
          </div>

          <div className={styles.formContainer}>
            {submitted ? (
              <div className={styles.successBox}>
                <h4>Application Sent Successfully!</h4>
                <p>Thank you. Your documents have been received and our team will follow up shortly.</p>
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
                    <label htmlFor="selectedPosition">Applying For / Position *</label>
                    <select 
                      id="selectedPosition" 
                      name="selectedPosition" 
                      required 
                      value={selectedPosition}
                      onChange={handleChange}
                      className={styles.selectDropdown}
                    >
                      <option value="" disabled>Select a position...</option>
                      {openJobPositions.map((item, idx) => (
                        <option key={idx} value={item.title}>
                          {item.title} ({item.category})
                        </option>
                      ))}
                      <option value="General Submission">General Application / Not Listed</option>
                    </select>
                  </div>
                </div>

                <div className={styles.row}>
                  {/* Filled Application PDF Upload */}
                  <div className={styles.inputGroup}>
                    <label>Filled Application PDF *</label>
                    {!formData.applicationPdf ? (
                      <div 
                        className={styles.dropZone}
                        onDrop={(e) => handleDrop(e, "applicationPdf")}
                        onDragOver={handleDragOver}
                      >
                        <UploadIcon />
                        <span className={styles.dropText}>Drag &amp; drop PDF here, or click to browse</span>
                        <input 
                          type="file" 
                          id="applicationPdf" 
                          name="applicationPdf" 
                          ref={pdfInputRef}
                          required={!formData.applicationPdf} 
                          accept=".pdf"
                          className={styles.fileInputHidden}
                          onChange={handleChange}
                        />
                      </div>
                    ) : (
                      <div className={styles.filePreviewCard}>
                        <div 
                          className={styles.fileInfo} 
                          onClick={() => openPreview(formData.applicationPdf)}
                          title="Click to preview file"
                        >
                          <svg className={styles.fileIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                          </svg>
                          <span className={styles.fileName}>{formData.applicationPdf.name}</span>
                        </div>
                        <button 
                          type="button" 
                          onClick={() => handleRemoveFile("applicationPdf")} 
                          className={styles.removeIconButton}
                          aria-label="Remove file"
                        >
                          ✕
                        </button>
                      </div>
                    )}
                  </div>

                  {/* CV / Resume Upload */}
                  <div className={styles.inputGroup}>
                    <label>Upload Your CV / Resume *</label>
                    {!formData.cvFile ? (
                      <div 
                        className={styles.dropZone}
                        onDrop={(e) => handleDrop(e, "cvFile")}
                        onDragOver={handleDragOver}
                      >
                        <UploadIcon />
                        <span className={styles.dropText}>Drag &amp; drop CV (PDF, DOC), or click</span>
                        <input 
                          type="file" 
                          id="cvFile" 
                          name="cvFile" 
                          ref={cvInputRef}
                          required={!formData.cvFile} 
                          accept=".pdf,.doc,.docx"
                          className={styles.fileInputHidden}
                          onChange={handleChange}
                        />
                      </div>
                    ) : (
                      <div className={styles.filePreviewCard}>
                        <div 
                          className={styles.fileInfo} 
                          onClick={() => openPreview(formData.cvFile)}
                          title="Click to preview file"
                        >
                          <svg className={styles.fileIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                          </svg>
                          <span className={styles.fileName}>{formData.cvFile.name}</span>
                        </div>
                        <button 
                          type="button" 
                          onClick={() => handleRemoveFile("cvFile")} 
                          className={styles.removeIconButton}
                          aria-label="Remove file"
                        >
                          ✕
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <button type="submit" className={styles.submitButton}>
                  Submit Application
                </button>
              </form>
            )}
          </div>

        </div>
      </Container>

      {/* Document Preview Modal */}
      {previewFile && (
        <div className={styles.modalOverlay} onClick={closePreview}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3>Preview: {previewFile.name}</h3>
              <button type="button" onClick={closePreview} className={styles.closeModalButton}>✕</button>
            </div>
            <div className={styles.modalBody}>
              {previewFile.type === "application/pdf" ? (
                <iframe src={previewUrl} title="PDF Preview" className={styles.previewIframe} />
              ) : (
                <div className={styles.previewFallback}>
                  <p>Preview is not available directly in browser for this file format ({previewFile.name}).</p>
                  <a href={previewUrl} download={previewFile.name} className={styles.downloadPreviewButton}>
                    Download to View
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}