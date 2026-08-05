"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import styles from "./directorCards.module.css";
import boardData from "@/content/site-data/boardData.json";

function ProfileModal({ director, onClose }) {
  
  // Lock scroll when popup is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

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
              <motion.p layoutId={`role-${director.id}`} className={styles.modalRole}>
                {director.role}
              </motion.p>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }} 
            className={styles.modalBody}
          >
            <h5 className={styles.modalBodyTitle}>About</h5>
            <p className={styles.modalDescription}>
              {director.description || "DESCRIPTION HERE"}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Main Component
export default function BoardOfDirectors() {
  const [selectedMember, setSelectedMember] = useState(null);

  const closeModal = () => setSelectedMember(null);

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.heading}>{boardData.heading}</h2>
        </header>

        <div className={styles.grid}>
          {boardData.members.map((member, index) => (
            <motion.div 
              key={member.id} 
              layoutId={`card-${member.id}`} 
              className={styles.card}
              onClick={() => setSelectedMember(member)}
            >
              <motion.div layoutId={`image-container-${member.id}`} className={styles.imageWrapper}>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority={index < 3}
                  className={styles.image}
                />
                <div className={styles.imageOverlay}>
                  <div className={styles.viewProfilePill}>+ View Profile</div>
                </div>
              </motion.div>
              
              <div className={styles.infoWrapper}>
                <motion.h3 layoutId={`name-${member.id}`} className={styles.memberName}>
                  {member.name}
                </motion.h3>
                <motion.p layoutId={`role-${member.id}`} className={styles.memberRole}>
                  {member.role}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reverse scaling automatically */}
        <AnimatePresence>
          {selectedMember && (
            <ProfileModal director={selectedMember} onClose={closeModal} />
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
}