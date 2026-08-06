"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import styles from "./doctorCards.module.css";
import doctorsData from "@/content/site-data/doctorsData.json";

// TODO: Fix animation of cards to be the same as the board of directors

function DoctorModal({ doctor, onClose }) {

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.modalOverlay} 
      onClick={onClose}
    >
      <motion.div 
        layoutId={`card-${doctor.id}`} 
        className={styles.modalContent} 
        onClick={(e) => e.stopPropagation()} 
      >
        <div className={styles.modalBanner}>
          <p className={styles.modalEyebrow}>Medical Provider Profile</p>
          <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
            ✕
          </button>
        </div>
        
        <div className={styles.modalBodyContainer}>
          <div className={styles.modalHeader}>
            <motion.div layoutId={`image-container-${doctor.id}`} className={styles.modalAvatarWrapper}>
              <Image
                src={doctor.image}
                alt={doctor.name}
                fill
                sizes="300px"
                className={styles.modalAvatar}
              />
            </motion.div>
            <div className={styles.modalHeaderText}>
              <motion.h4 layoutId={`name-${doctor.id}`} className={styles.modalName}>
                {doctor.name}
              </motion.h4>
              <motion.p layoutId={`specialty-${doctor.id}`} className={styles.modalSpecialty}>
                {doctor.specialty}
              </motion.p>
              
              {/* Email Link */}
              <a href={`mailto:${doctor.email}`} className={styles.modalEmailLink}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                {doctor.email}
              </a>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }} 
            className={styles.modalBody}
          >
            <h5 className={styles.modalBodyTitle}>About Provider</h5>
            <p className={styles.modalDescription}>
              {doctor.bio || "Provider bio details coming soon."}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Main Component
export default function DoctorTeam() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const closeModal = () => setSelectedDoctor(null);

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.heading}>{doctorsData.heading}</h2>
        </header>

        <div className={styles.grid}>
          {doctorsData.doctors.map((doctor, index) => (
            <motion.div 
              key={doctor.id} 
              layoutId={`card-${doctor.id}`} 
              className={styles.card}
              onClick={() => setSelectedDoctor(doctor)}
            >
              <motion.div layoutId={`image-container-${doctor.id}`} className={styles.imageWrapper}>
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority={index < 4}
                  className={styles.image}
                />
                <div className={styles.imageOverlay}>
                  <div className={styles.viewProfilePill}>+ View Profile</div>
                </div>
              </motion.div>
              
              <div className={styles.infoWrapper}>
                <motion.h3 layoutId={`name-${doctor.id}`} className={styles.doctorName}>
                  {doctor.name}
                </motion.h3>
                <motion.p layoutId={`specialty-${doctor.id}`} className={styles.doctorSpecialty}>
                  {doctor.specialty}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedDoctor && (
            <DoctorModal doctor={selectedDoctor} onClose={closeModal} />
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
}