"use client";

import { useState } from "react";
import Image from "@/components/ui/Image";
import { motion, AnimatePresence } from "framer-motion";
import { FiCalendar, FiFileText, FiCheckSquare, FiActivity, FiChevronDown } from "react-icons/fi";
import servicesData from "@/content/site-data/primaryServices.json";
import styles from "./primaryServices.module.css";

const iconsMap = [FiCalendar, FiFileText, FiCheckSquare, FiActivity];

export default function PrimaryCareServices() {
  const [activeId, setActiveId] = useState(servicesData[0]?.id || "");

  const activeService = servicesData.find((item) => item.id === activeId) || servicesData[0];

  const activeIndex = servicesData.findIndex((item) => item.id === activeId);
  const ActiveIcon = iconsMap[activeIndex >= 0 ? activeIndex % iconsMap.length : 0];

  return (
    <section className={styles.section} id="services">
      <div className={styles.layoutGrid}>
        {/* Accordion Column */}
        <div className={styles.accordionColumn}>
          {servicesData.map((item, index) => {
            const isActive = item.id === activeId;
            const IconComponent = iconsMap[index % iconsMap.length];

            return (
              <div
                key={item.id}
                className={`${styles.card} ${isActive ? styles.activeCard : ""}`}
              >
                <button
                  type="button"
                  className={styles.cardHeader}
                  onClick={() => setActiveId(isActive ? "" : item.id)}
                  aria-expanded={isActive}
                >
                  <div className={styles.iconBox}>
                    <IconComponent size={22} />
                  </div>

                  <span className={`${styles.badge} ${isActive ? styles.badgeActive : ""}`}>
                    {isActive ? "ACTIVE" : "TAP TO REVEAL"}
                  </span>

                  <div className={styles.titleGroup}>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <span className={styles.cardSummary}>{item.subtitle}</span>
                  </div>

                  <div className={`${styles.chevron} ${isActive ? styles.chevronRotated : ""}`}>
                    <FiChevronDown size={20} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      className={styles.expandableWrapper}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className={styles.cardBody}>
                        <div className={styles.divider} />
                        <p className={styles.detailsText}>{item.description}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Sticky Image Column */}
        <div className={styles.imageColumn}>
          <div className={styles.imageWrapper}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                className={styles.animatedImageContainer}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
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
      </div>
    </section>
  );
}