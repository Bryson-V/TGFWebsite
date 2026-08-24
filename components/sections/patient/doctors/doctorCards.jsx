"use client";

import { useState, useEffect, useMemo, Suspense } from "react";
import Image from "@/components/ui/Image";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import Container from "@/components/ui/Container";
import styles from "./doctorCards.module.css";
import doctorsData from "@/content/site-data/doctorsData.json";

// Category mappings with clean labels for UI display
const FILTER_MAP = {
  all: "All Doctors",
  primaryCare: "Primary Care",
  endocrinology: "Endocrinology",
  obgyn: "OB/GYN",
  mindCare: "MindCare",
};

function ProfileModal({ director, onClose }) {
  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

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
        role="dialog"
        aria-modal="true"
        aria-labelledby={`modal-name-${director.id}`}
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
              <motion.h4
                layoutId={`name-${director.id}`}
                className={styles.modalName}
                id={`modal-name-${director.id}`}
              >
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
            transition={{ delay: 0.2 }}
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
                    {director.bio || "Profile details coming soon."}
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

function BoardOfDoctorsContent({ defaultCategory = "all" }) {
  const router = useRouter();
  const pathname = usePathname(); // Dynamic route preservation (fixes 404)
  const searchParams = useSearchParams();
  const [selectedMember, setSelectedMember] = useState(null);

  // Read URL search param first, fallback to defaultCategory prop if param doesn't exist
  const currentCategoryParam = searchParams.get("category");
  const activeFilter =
    currentCategoryParam && currentCategoryParam in FILTER_MAP
      ? currentCategoryParam
      : defaultCategory;

  const closeModal = () => setSelectedMember(null);

  // Filter list based on selected category key
  const filteredDoctors = useMemo(() => {
    if (activeFilter === "all") return doctorsData.doctors;
    return doctorsData.doctors.filter((member) => member.category === activeFilter);
  }, [activeFilter]);

  // Handle URL updates on filter click
  const handleFilterChange = (categoryKey) => {
    const params = new URLSearchParams(searchParams.toString());

    if (categoryKey === "all") {
      params.delete("category");
    } else {
      params.set("category", categoryKey);
    }

    const queryString = params.toString();
    const targetUrl = queryString ? `${pathname}?${queryString}` : pathname;

    router.push(targetUrl, { scroll: false });
  };

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.heading}>{doctorsData.heading}</h2>

          {/* Dynamic Filter Buttons */}
          <div className={styles.filterContainer}>
            {Object.entries(FILTER_MAP).map(([key, label]) => (
              <button
                key={key}
                className={`${styles.filterBtn} ${activeFilter === key ? styles.activeFilter : ""}`}
                onClick={() => handleFilterChange(key)}
              >
                {label}
              </button>
            ))}
          </div>
        </header>

        {/* Doctor Cards Grid */}
        <div className={styles.listContainer} role="list">
          {filteredDoctors.map((member, index) => {
            const isSelected = selectedMember?.id === member.id;

            return (
              <motion.div
                key={member.id}
                layoutId={`card-${member.id}`}
                className={`${styles.card} ${isSelected ? styles.cardActive : ""}`}
                onClick={() => setSelectedMember(member)}
                animate={{ opacity: isSelected ? 0 : 1 }}
                transition={{ duration: 0.687 }}
                role="listitem"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedMember(member);
                  }
                }}
              >
                <motion.div layoutId={`image-container-${member.id}`} className={styles.imageWrapper}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100%, 300px"
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

        {/* Bio Modal */}
        <AnimatePresence>
          {selectedMember && (
            <ProfileModal director={selectedMember} onClose={closeModal} />
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
}

// Wrapped in Suspense as required by Next.js when using `useSearchParams`
export default function BoardOfDoctors({ defaultCategory = "all" }) {
  return (
    <Suspense fallback={<div className={styles.section}>Loading Doctors...</div>}>
      <BoardOfDoctorsContent defaultCategory={defaultCategory} />
    </Suspense>
  );
}