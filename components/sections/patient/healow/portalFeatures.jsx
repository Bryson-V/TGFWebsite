"use client";

import { useState } from "react";
import { 
  FiCalendar, 
  FiFileText, 
  FiMessageSquare, 
  FiClipboard,
  FiChevronDown
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./portalFeatures.module.css";

const features = [
  {
    id: "appointments",
    icon: <FiCalendar size={28} />,
    title: "Appointments",
    summary: "Schedule & manage visits",
    details: "Schedule, view, or reschedule your upcoming clinic appointments with ease 24/7 without needing to make a phone call."
  },
  {
    id: "records",
    icon: <FiFileText size={28} />,
    title: "Medical Records",
    summary: "View lab results & history",
    details: "Access lab results, doctor visit summaries, vaccination records, and your comprehensive health history in real time."
  },
  {
    id: "messaging",
    icon: <FiMessageSquare size={28} />,
    title: "Messaging & Refills",
    summary: "Direct care team access",
    details: "Send secure messages directly to your care team, ask follow-up questions, or request prescription renewals."
  },
  {
    id: "forms",
    icon: <FiClipboard size={28} />,
    title: "Digital Forms",
    summary: "Pre-visit check-in",
    details: "Complete or update your patient intake forms, medical history, and insurance updates online prior to arriving at the clinic."
  }
];

export default function PortalFeatures() {
  const [activeTab, setActiveTab] = useState("appointments");

  const toggleFeature = (id) => {
    setActiveTab(activeTab === id ? null : id);
  };

  const activeFeature = features.find((f) => f.id === activeTab) || features[0];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>What You Can Do in healow</h2>
        <p className={styles.sectionSubtitle}>
          Select or tap any feature below to explore how the patient portal helps manage your care.
        </p>
      </div>

      <div className={styles.featuresGrid}>
        {features.map((item) => {
          const isActive = activeTab === item.id;

          return (
            <div 
              key={item.id} 
              className={`${styles.featureCard} ${isActive ? styles.activeCard : ""}`}
            >
              {/* Card Header Button */}
              <button
                type="button"
                onClick={() => toggleFeature(item.id)}
                className={styles.cardHeader}
                aria-expanded={isActive}
              >
                <div className={styles.cardHeaderTop}>
                  <div className={styles.iconWrapper}>{item.icon}</div>
                  
                  {/* Badge text switches between Desktop & Mobile phrasing */}
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

                {/* Chevron icon visible only on mobile accordion */}
                <div className={`${styles.chevron} ${isActive ? styles.chevronRotated : ""}`}>
                  <FiChevronDown size={20} />
                </div>
              </button>

              {/* Mobile-Only Inline Expandable Body */}
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

      {/* Desktop-Only Feature Detail Display Box */}
      <div className={styles.desktopDetailBox}>
        <div className={styles.accentLine} />
        <div className={styles.detailContent}>
          <span className={styles.detailTag}>{activeFeature.summary}</span>
          <h3 className={styles.detailTitle}>{activeFeature.title}</h3>
          <p className={styles.detailText}>{activeFeature.details}</p>
        </div>
      </div>
    </section>
  );
}