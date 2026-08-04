"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import styles from "./CareerCategories.module.css";

const careerCategoriesData = {
  heading: "Explore Career & Internship Tracks",
  categories: [
    {
      id: "provider",
      name: "Medical Providers",
      role: "Physicians, NPs & PNs",
      icon: "🩺",
      description: "Join our primary care and clinical teams. As an NHSC-accredited facility, qualified medical providers may be eligible for loan repayment programs while delivering essential care to underserved populations in Guam.",
      requirements: "Valid medical license, board certification (or eligibility), and a passion for community health."
    },
    {
      id: "ma",
      name: "Medical Assistants (MA)",
      role: "Clinical Support",
      icon: "📋",
      description: "Work hand-in-hand with our doctors and nurse practitioners managing patient intake, vital signs, clinic organization, and direct patient support during daily visits.",
      requirements: "CMA certification preferred, CPR/BLS certification, and strong communication skills."
    },
    {
      id: "intern",
      name: "Internships & Students",
      role: "Clinical & Administrative Paths",
      icon: "🎓",
      description: "Gain hands-on professional development and healthcare experience in Guam. Our structured internships cover clinical rotations, public health logistics, and community outreach coordination.",
      requirements: "Enrolled in an accredited undergraduate, graduate, or medical/nursing training program."
    },
    {
      id: "backend",
      name: "Operations & Backend",
      role: "Billers, Accountants, IT & Admin",
      icon: "💻",
      description: "Keep our foundation running seamlessly behind the scenes. This track includes medical billing specialists, financial accountants, IT support, and administrative logistics coordinators.",
      requirements: "Relevant professional experience in healthcare administration, finance, or information technology."
    }
  ]
};

export default function CareerCategories() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const closeModal = () => setSelectedCategory(null);

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
                <span className={styles.cardIcon}>{cat.icon}</span>
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
                  <span className={styles.modalIconLarge}>{selectedCategory.icon}</span>
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
                  <a href="#apply" onClick={closeModal} className={styles.modalApplyButton}>
                    Apply for this Track &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

      </Container>
    </section>
  );
}