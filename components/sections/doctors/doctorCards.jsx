"use client";

import { useState } from "react";
import Image from "next/image";
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
          <p className={styles.modalEyebrow}>Board of Directors Profile</p>
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
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .2 }} 
            className={styles.modalBody}
          >
            <h5 className={styles.modalBodyTitle}>About</h5>
            <p className={styles.modalDescription}>
              {director.bio || director.description || "DESCRIPTION HERE"}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function BoardOfDoctors() {
  const [selectedMember, setSelectedMember] = useState(null);

  const closeModal = () => setSelectedMember(null);

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.heading}>{doctorsData.heading}</h2>
        </header>

        <div className={styles.listContainer}>
          {doctorsData.doctors.map((member, index) => {
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
                  <div>
                    <motion.h3 layoutId={`name-${member.id}`} className={styles.memberName}>
                      {member.name}
                    </motion.h3>
                    <motion.p layoutId={`specialty-${member.id}`} className={styles.doctorspecialty}>
                      {member.specialty}
                    </motion.p>
                  </div>

                  <p className={styles.memberemail}>
                    {member.email || member.bio}
                  </p>

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