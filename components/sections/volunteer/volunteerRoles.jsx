"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import styles from "./volunteerRoles.module.css";

const roles = [
  {
    id: "medical",
    title: "Medical Professionals",
    role: "Clinical & Field Care",
    description: "Doctors, nurses, and allied health workers who provide direct care at our Mobile Clinic and outreach missions.",
    requirements: (
      <>
        <strong>Does need TB testing from past 12 months.</strong>
        <br /><br />
        Active medical credentials, professional licensure, and a commitment to serving community healthcare needs.
      </>
    ),
    applyUrl: "https://forms.monday.com/forms/37cb3c07215ccc1525588f4ad4a2d0d9?r=use1",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00A89E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
        <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
        <circle cx="20" cy="10" r="2" />
      </svg>
    ),
  },
  {
    id: "outreach",
    title: "Community Outreach",
    role: "Event & Engagement Coordination",
    description: "Help coordinate events, connect residents with services, and spread awareness of TGF programs across the island.",
    requirements: (
      <>
        <strong>Does NOT need TB testing from past 12 months.</strong>
        <br /><br />
        Strong communication skills, reliable transportation, and enthusiasm for community engagement.
      </>
    ),
    applyUrl: "https://forms.monday.com/forms/37cb3c07215ccc1525588f4ad4a2d0d9?r=use1",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F56565" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
  {
    id: "admin",
    title: "Administrative Support",
    role: "Operations & Logistics",
    description: "Help with data entry, scheduling, communications, and behind-the-scenes operations that keep our programs running.",
    requirements: (
      <>
        <strong>Does NOT need TB testing from past 12 months.</strong>
        <br /><br />
        Attention to detail, basic proficiency with office tools, and organizational capabilities.
      </>
    ),
    applyUrl: "https://forms.monday.com/forms/37cb3c07215ccc1525588f4ad4a2d0d9?r=use1",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
        <path d="M9 14h6"></path>
        <path d="M9 18h6"></path>
        <path d="M9 10h.01"></path>
      </svg>
    ),
  },
  {
    id: "education",
    title: "Health Education",
    role: "Workshops & School Programs",
    description: "Teach prevention workshops, lead school programs, and help communities understand how to stay healthy.",
    requirements: (
      <>
        <strong>Does NOT need TB testing from past 12 months.</strong>
        <br /><br />
        requirements: "Passion for public health education, comfortable public speaking, and mentoring abilities.
      </>
    ),
    applyUrl: "https://forms.monday.com/forms/37cb3c07215ccc1525588f4ad4a2d0d9?r=use1",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
      </svg>
    ),
  }
];

export default function VolunteerRoles() {
  const [selectedRole, setSelectedRole] = useState(null);

  const closeModal = () => setSelectedRole(null);

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <p className={styles.eyebrow}>HOW YOU CAN HELP</p>
          <h2 className={styles.title}>We need people with all kinds of skills</h2>
          <p className={styles.subtitle}>
            Whether you're a medical professional or just want to give back to your community, there's a meaningful role for you at Todu Guam.
          </p>
        </div>

        <div className={styles.grid}>
          {roles.map((role) => (
            <div
              key={role.id}
              className={styles.card}
              onClick={() => setSelectedRole(role)}
            >
              <div className={styles.iconWrapper}>
                {role.icon}
              </div>
              <div className={styles.textContent}>
                <h3 className={styles.cardTitle}>{role.title}</h3>
                <p className={styles.cardDescription}>{role.description}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedRole && (
          <div className={styles.modalOverlay} onClick={closeModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeButton} onClick={closeModal} aria-label="Close modal">
                ✕
              </button>

              <p className={styles.modalEyebrow}>Volunteer Role Information</p>

              <div className={styles.modalHeader}>
                <div className={styles.modalAvatarWrapper}>
                  {selectedRole.icon}
                </div>
                <div>
                  <h4 className={styles.modalName}>{selectedRole.title}</h4>
                  <p className={styles.modalRole}>{selectedRole.role}</p>
                </div>
              </div>

              <div className={styles.modalBody}>
                <h5 className={styles.descriptionLabel}>Overview</h5>
                <div className={styles.descriptionBox}>
                  <p>{selectedRole.description}</p>
                </div>

                <h5 className={`${styles.descriptionLabel} ${styles.requirementsLabel}`}>Key Requirements / Focus</h5>
                <div className={styles.descriptionBox}>
                  <div>{selectedRole.requirements}</div>
                </div>

                <div className={styles.modalActionWrapper}>
                  <a
                    href={selectedRole.applyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.modalApplyButton}
                  >
                    Apply for this Role &rarr;
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