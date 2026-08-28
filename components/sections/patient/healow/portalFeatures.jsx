"use client";

import { useState } from "react";
import { 
  FiCalendar, 
  FiFileText, 
  FiMessageSquare, 
  FiClipboard
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./portalFeatures.module.css";

const features = [
  {
    id: "appointments",
    icon: <FiCalendar size={24} />,
    title: "Appointments",
    summary: "Schedule & manage visits",
    details: "Schedule, view, or reschedule your upcoming clinic appointments with ease 24/7 without needing to make a phone call."
  },
  {
    id: "records",
    icon: <FiFileText size={24} />,
    title: "Medical Records",
    summary: "View lab results & history",
    details: "Access lab results, doctor visit summaries, vaccination records, and your comprehensive health history in real time."
  },
  {
    id: "messaging",
    icon: <FiMessageSquare size={24} />,
    title: "Messaging & Refills",
    summary: "Direct care team access",
    details: "Send secure messages directly to your care team, ask follow-up questions, or request prescription renewals."
  },
  {
    id: "forms",
    icon: <FiClipboard size={24} />,
    title: "Digital Forms",
    summary: "Pre-visit check-in",
    details: "Complete or update your patient intake forms, medical history, and insurance updates online prior to arriving at the clinic."
  }
];

export default function PortalFeatures() {
  const [activeTab, setActiveTab] = useState("appointments");

  const activeFeature = features.find((f) => f.id === activeTab) || features[0];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>What You Can Do in healow</h2>
        <p className={styles.sectionSubtitle}>
          Explore how the patient portal helps you manage your healthcare efficiently.
        </p>
      </div>

      {/* Feature Selector Tabs */}
      <div className={styles.featuresGrid}>
        {features.map((item) => {
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveTab(item.id)}
              className={`${styles.featureCard} ${isActive ? styles.activeCard : ""}`}
            >
              <div className={styles.iconWrapper}>{item.icon}</div>
              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <span className={styles.cardSummary}>{item.summary}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Desktop Feature Detail Panel */}
      <div className={styles.desktopDetailBox}>
        <div className={styles.detailHeader}>
          <span className={styles.detailTag}>{activeFeature.summary}</span>
          <h3 className={styles.detailTitle}>{activeFeature.title}</h3>
        </div>
        <p className={styles.detailText}>{activeFeature.details}</p>
      </div>

      {/* Mobile Card List Display */}
      <div className={styles.mobileList}>
        {features.map((item) => (
          <div key={item.id} className={styles.mobileCard}>
            <div className={styles.mobileCardHeader}>
              <div className={styles.mobileIconWrapper}>{item.icon}</div>
              <div>
                <h3 className={styles.mobileCardTitle}>{item.title}</h3>
                <span className={styles.mobileCardSummary}>{item.summary}</span>
              </div>
            </div>
            <p className={styles.mobileDetailsText}>{item.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}