"use client";

import { useState } from "react";
import Image from "@/components/ui/Image";
import { 
  FiCalendar, 
  FiFileText, 
  FiMessageSquare, 
  FiClipboard, 
  FiChevronDown 
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import servicesData from "@/content/site-data/endoServices.json";
import styles from "./endoServices.module.css";

const renderIcon = (iconType) => {
  switch (iconType) {
    case "calendar":
      return <FiCalendar size={22} />;
    case "file":
      return <FiFileText size={22} />;
    case "message":
      return <FiMessageSquare size={22} />;
    case "clipboard":
      return <FiClipboard size={22} />;
    default:
      return <FiFileText size={22} />;
  }
};

export default function EndoServices() {
  const [activeTab, setActiveTab] = useState(servicesData[0]?.id || "");

  // Fallback to first item if nothing selected
  const activeService = servicesData.find((s) => s.id === activeTab) || servicesData[0];

  const toggleAccordion = (id) => {
    setActiveTab(activeTab === id ? null : id);
  };

  return (
    <section className={styles.section} id="endo-services">
      <div className={styles.layoutGrid}>
        
        {/* Dynamic Image Container (Top on Mobile, Floating Sticky on PC) */}
        <div className={styles.imageColumn}>
          <div className={styles.imageWrapper}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className={styles.animatedImageContainer}
              >
                <Image
                  src={activeService.image}
                  alt={activeService.title}
                  fill
                  className={styles.clinicImage}
                  priority
                />
                <div className={styles.imageOverlay}>
                  <span className={styles.overlayTag}>PATIENT CARE</span>
                  <h4 className={styles.overlayTitle}>{activeService.title}</h4>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Accordion Cards Column */}
        <div className={styles.accordionColumn}>
          {servicesData.map((item) => {
            const isActive = activeTab === item.id;

            return (
              <div
                key={item.id}
                className={`${styles.card} ${isActive ? styles.activeCard : ""}`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  className={styles.cardHeader}
                  aria-expanded={isActive}
                >
                  <div className={styles.iconBox}>
                    {renderIcon(item.iconType)}
                  </div>

                  <span className={`${styles.badge} ${isActive ? styles.badgeActive : ""}`}>
                    {isActive ? "ACTIVE" : "TAP TO REVEAL"}
                  </span>

                  <div className={styles.titleGroup}>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <span className={styles.cardSummary}>{item.summary}</span>
                  </div>

                  <div className={`${styles.chevron} ${isActive ? styles.chevronRotated : ""}`}>
                    <FiChevronDown size={22} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className={styles.expandableWrapper}
                    >
                      <div className={styles.cardBody}>
                        <div className={styles.divider} />
                        <p className={styles.detailsText}>{item.details}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}