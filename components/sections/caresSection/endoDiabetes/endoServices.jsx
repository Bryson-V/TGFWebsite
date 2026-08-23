"use client";

import { useState } from "react";
import { 
  FiActivity, 
  FiCpu, 
  FiHeart, 
  FiShield,
  FiChevronDown 
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import servicesData from "@/content/site-data/servicesData.json"; // Adjust path as needed
import styles from "./endoServices.module.css";

const renderIcon = (iconType) => {
  switch (iconType) {
    case "activity":
      return <FiActivity size={28} />;
    case "cpu":
      return <FiCpu size={28} />;
    case "heart":
      return <FiHeart size={28} />;
    case "shield":
      return <FiShield size={28} />;
    default:
      return <FiActivity size={28} />;
  }
};

export default function EndoServices() {
  const [activeTab, setActiveTab] = useState(servicesData[0]?.id || "");

  const toggleService = (id) => {
    setActiveTab(activeTab === id ? null : id);
  };

  const activeService = servicesData.find((s) => s.id === activeTab) || servicesData[0];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>Services Offered</h2>
        <p className={styles.sectionSubtitle}>
          Select or tap any service to explore our specialized clinical care programs.
        </p>
      </div>

      <div className={styles.servicesGrid}>
        {servicesData.map((item) => {
          const isActive = activeTab === item.id;

          return (
            <div 
              key={item.id} 
              className={`${styles.serviceCard} ${isActive ? styles.activeCard : ""}`}
            >
              <button
                type="button"
                onClick={() => toggleService(item.id)}
                className={styles.cardHeader}
                aria-expanded={isActive}
              >
                <div className={styles.cardHeaderTop}>
                  <div className={styles.iconWrapper}>{renderIcon(item.iconType)}</div>
                  <span className={styles.badge}>
                    <span className={styles.desktopBadgeText}>
                      {isActive ? "VIEWING" : "CLICK TO VIEW"}
                    </span>
                    <span className={styles.mobileBadgeText}>
                      {isActive ? "ACTIVE" : "TAP TO REVEAL"}
                    </span>
                  </span>
                </div>

                <h3 className={styles.cardTitle}>{item.title}</h3>
                <span className={styles.cardSummary}>{item.summary}</span>

                <div className={`${styles.chevron} ${isActive ? styles.chevronRotated : ""}`}>
                  <FiChevronDown size={20} />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className={styles.mobileExpandableWrapper}
                  >
                    <div className={styles.mobileCardBody}>
                      <div className={styles.mobileDivider} />
                      <p className={styles.mobileDetailsText}>{item.details}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {activeService && (
        <div className={styles.desktopDetailBox}>
          <div className={styles.accentLine} />
          <div className={styles.detailContent}>
            <span className={styles.detailTag}>{activeService.summary}</span>
            <h3 className={styles.detailTitle}>{activeService.title}</h3>
            <p className={styles.detailText}>{activeService.details}</p>
          </div>
        </div>
      )}
    </section>
  );
}