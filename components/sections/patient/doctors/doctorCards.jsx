"use client";

import { useState } from "react";
import Image from '@/components/ui/Image';
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import styles from "./doctorCards.module.css";
import doctorsData from "@/content/site-data/doctorsData.json";

function ProfileModal({ director, onClose }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.modalOverlay} 
      onClick={onClose}
    >
      <motion.div 
        className={styles.modalContent} 
        onClick={(e) => e.stopPropagation()} 
      >
        <div className={styles.modalBanner}>
          <p className={styles.modalEyebrow}>Medical Team Profile</p>
          <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
            ✕
          </button>
        </div>
        
        <div className={styles.modalBodyContainer}>
          <div className={styles.modalHeader}>
            <motion.div layoutId={`image-container-${director.id}`} className={styles.modalAvatarWrapper}>
              <Image
                src={director.image}
                alt={director.name}
                fill
                sizes="300px"
                className={styles.modalAvatar}
              />
            </motion.div>
            <div className={styles.modalHeaderText}>
              <motion.h4 layoutId={`name-${director.id}`} className={styles.modalName}>
                {director.name}
              </motion.h4>
              <motion.p layoutId={`specialty-${director.id}`} className={styles.modalspecialty}>
                {director.specialty}
              </motion.p>
              {director.email && (
                <motion.span layoutId={`email-${director.id}`} className={styles.modalEmailTag}>
                  {director.email}
                </motion.span>
              )}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .2 }} 
            className={styles.modalBody}
          >
            {director.education && director.education.length > 0 && (
              <div className={styles.modalSectionGroup}>
                <h5 className={styles.modalBodyTitle}>Education</h5>
                <ul className={styles.detailList}>
                  {director.education.map((item, index) => (
                    <li key={index} className={styles.modalDescription}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {director.certifications && director.certifications.length > 0 && (
              <div className={styles.modalSectionGroup}>
                <h5 className={styles.modalBodyTitle}>Certifications & Credentials</h5>
                <ul className={styles.detailList}>
                  {director.certifications.map((item, index) => (
                    <li key={index} className={styles.modalDescription}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className={styles.modalSectionGroup}>
              <h5 className={styles.modalBodyTitle}>About</h5>
              <div className={styles.paragraphContainer}>
                {Array.isArray(director.bio) ? (
                  director.bio.map((paragraph, index) => (
                    <p key={index} className={styles.modalDescription}>
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p className={styles.modalDescription}>
                    {director.bio || "DESCRIPTION HERE"}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function BoardOfDoctors() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all"); // "all", "general", "specialist"

  const closeModal = () => setSelectedMember(null);

  // Filter the doctors based on the selected button
  const filteredDoctors = doctorsData.doctors.filter((member) => {
    if (activeFilter === "all") return true;
    return member.category === activeFilter;
  });

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.heading}>{doctorsData.heading}</h2>
          
          {/* Filter Buttons */}
          <div className={styles.filterContainer}>
            <button 
              className={`${styles.filterBtn} ${activeFilter === "all" ? styles.activeFilter : ""}`}
              onClick={() => setActiveFilter("all")}
            >
              All Doctors
            </button>
            <button 
              className={`${styles.filterBtn} ${activeFilter === "general" ? styles.activeFilter : ""}`}
              onClick={() => setActiveFilter("general")}
            >
              General Practice
            </button>
            <button 
              className={`${styles.filterBtn} ${activeFilter === "specialist" ? styles.activeFilter : ""}`}
              onClick={() => setActiveFilter("specialist")}
            >
              Specialists
            </button>
          </div>
        </header>

        <div className={styles.listContainer}>
          {filteredDoctors.map((member, index) => {
            const isSelected = selectedMember?.id === member.id;

            return (
              <motion.div 
                key={member.id} 
                layoutId={`card-${member.id}`} 
                className={`${styles.card} ${isSelected ? styles.cardActive : ""}`}
                onClick={() => setSelectedMember(member)}
                animate={{ opacity: isSelected ? 0 : 1 }}
                transition={{ duration: .687 }}
              >
                <motion.div layoutId={`image-container-${member.id}`} className={styles.imageWrapper}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    priority={index < 3}
                    className={styles.image}
                  />
                </motion.div>
                
                <div className={styles.infoWrapper}>
                  <div className={styles.topInfo}>
                    <motion.h3 layoutId={`name-${member.id}`} className={styles.memberName}>
                      {member.name}
                    </motion.h3>
                    <motion.p layoutId={`specialty-${member.id}`} className={styles.modalspecialty}>
                      {member.specialty}
                    </motion.p>
                    {member.email && (
                      <motion.p layoutId={`email-${member.id}`} className={styles.memberemail}>
                        {member.email}
                      </motion.p>
                    )}
                  </div>

                  <ul className={styles.cardBulletList}>
                    {Array.isArray(member.preview) ? (
                      member.preview.map((point, i) => (
                        <li key={i} className={styles.memberPreviewItem}>
                          {point}
                        </li>
                      ))
                    ) : (
                      <li className={styles.memberPreviewItem}>{member.preview}</li>
                    )}
                  </ul>

                  <div className={styles.cardAction}>
                    <span className={styles.ctaText}>Read Full Bio →</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <AnimatePresence>
          {selectedMember && (
            <ProfileModal director={selectedMember} onClose={closeModal} />
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
}