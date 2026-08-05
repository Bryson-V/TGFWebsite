"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import styles from "./CareerCategories.module.css";

const StethoscopeIcon = () => (
  <svg className={styles.svgIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/>
    <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/>
    <circle cx="20" cy="10" r="2"/>
  </svg>
);

const ClipboardIcon = () => (
  <svg className={styles.svgIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <path d="m9 14 2 2 4-4" />
  </svg>
);

const GraduationIcon = () => (
  <svg className={styles.svgIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

const LaptopIcon = () => (
  <svg className={styles.svgIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="12" x="3" y="4" rx="2" ry="2" />
    <line x1="2" x2="22" y1="20" y2="20" />
  </svg>
);

const careerCategoriesData = {
  heading: "Explore Career & Internship Tracks",
  categories: [
    {
      id: "provider",
      name: "Medical Providers",
      role: "Physicians, NPs & PNs",
      icon: <StethoscopeIcon />,
      description: "Join our primary care and clinical teams. As an NHSC-accredited facility, qualified medical providers may be eligible for loan repayment programs while delivering essential care to underserved populations in Guam.",
      requirements: "Valid medical license, board certification (or eligibility), and a passion for community health."
    },
    {
      id: "ma",
      name: "Medical Assistants (MA)",
      role: "Clinical Support",
      icon: <ClipboardIcon />,
      description: "Work hand-in-hand with our doctors and nurse practitioners managing patient intake, vital signs, clinic organization, and direct patient support during daily visits.",
      requirements: "CMA certification preferred, CPR/BLS certification, and strong communication skills."
    },
    {
      id: "intern",
      name: "Internships & Students",
      role: "Clinical & Administrative Paths",
      icon: <GraduationIcon />,
      description: "Gain hands-on professional development and healthcare experience in Guam. Our structured internships cover clinical rotations, public health logistics, and community outreach coordination.",
      requirements: "Enrolled in an accredited undergraduate, graduate, or medical/nursing training program."
    },
    {
      id: "backend",
      name: "Operations & Backend",
      role: "Billers, Accountants, IT & Admin",
      icon: <LaptopIcon />,
      description: "Keep our foundation running seamlessly behind the scenes. This track includes medical billing specialists, financial accountants, IT support, and administrative logistics coordinators.",
      requirements: "Relevant professional experience in healthcare administration, finance, or information technology."
    }
  ]
};

export default function CareerCategories() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const closeModal = () => setSelectedCategory(null);

  const handleApplyClick = () => {
    closeModal();

    // Dispatch the custom event that your ApplicationSection is already listening for
    const event = new CustomEvent("selectJobPosition", { detail: "General Submission" });
    window.dispatchEvent(event);

    // Scroll smoothly down to the form
    const applySection = document.getElementById("apply");
    if (applySection) {
      applySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.heading}>{careerCategoriesData.heading}</h2>
        </header>

        <div className={styles.grid}>
          {careerCategoriesData.categories.map((cat) => (
            <div 
              key={cat.id} 
              className={styles.card}
              onClick={() => setSelectedCategory(cat)}
            >
              <div className={styles.cardIconWrapper}>
                {cat.icon}
              </div>
              <div className={styles.infoWrapper}>
                <h3 className={styles.categoryName}>{cat.name}</h3>
                <p className={styles.categoryRole}>{cat.role}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedCategory && (
          <div className={styles.modalOverlay} onClick={closeModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeButton} onClick={closeModal} aria-label="Close modal">
                ✕
              </button>
              
              <p className={styles.modalEyebrow}>Career Track Information</p>
              
              <div className={styles.modalHeader}>
                <div className={styles.modalAvatarWrapper}>
                  {selectedCategory.icon}
                </div>
                <div>
                  <h4 className={styles.modalName}>{selectedCategory.name}</h4>
                  <p className={styles.modalRole}>{selectedCategory.role}</p>
                </div>
              </div>

              <div className={styles.modalBody}>
                <h5 className={styles.descriptionLabel}>Overview</h5>
                <div className={styles.descriptionBox}>
                  <p>{selectedCategory.description}</p>
                </div>

                <h5 className={`${styles.descriptionLabel} ${styles.requirementsLabel}`}>Key Requirements / Focus</h5>
                <div className={styles.descriptionBox}>
                  <p>{selectedCategory.requirements}</p>
                </div>

                <div className={styles.modalActionWrapper}>
                  <button onClick={handleApplyClick} className={styles.modalApplyButton}>
                    Apply for this Track &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </Container>
    </section>
  );
}