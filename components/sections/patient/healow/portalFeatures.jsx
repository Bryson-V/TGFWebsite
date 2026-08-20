"use client";

import { useState } from "react";
import { 
  FiCalendar, 
  FiFileText, 
  FiMessageSquare, 
  FiClipboard 
} from "react-icons/fi";
import styles from "./portalFeatures.module.css";

const features = [
  {
    id: "appointments",
    icon: <FiCalendar size={28} />,
    title: "Appointments",
    summary: "Schedule & manage visits",
    details: "Schedule, view, or reschedule your upcoming clinic appointments with ease 24/7."
  },
  {
    id: "records",
    icon: <FiFileText size={28} />,
    title: "Medical Records",
    summary: "View lab results & history",
    details: "Access lab results, doctor visit summaries, and your comprehensive health history."
  },
  {
    id: "messaging",
    icon: <FiMessageSquare size={28} />,
    title: "Messaging & Refills",
    summary: "Direct care team access",
    details: "Send secure messages directly to your care team or request prescription renewals."
  },
  {
    id: "forms",
    icon: <FiClipboard size={28} />,
    title: "Digital Forms",
    summary: "Pre-visit check-in",
    details: "Complete or update your patient intake forms online prior to arriving at the clinic."
  }
];

export default function PortalFeatures() {
  const [activeTab, setActiveTab] = useState("appointments");

  const activeFeature = features.find((f) => f.id === activeTab);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>What You Can Do in healow</h2>
        <p className={styles.sectionSubtitle}>
          Click on any feature below to explore how the patient portal helps manage your care.
        </p>
      </div>

      <div className={styles.tabsGrid}>
        {features.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`${styles.tabCard} ${activeTab === item.id ? styles.activeTab : ""}`}
          >
            <div className={styles.tabIcon}>{item.icon}</div>
            <h3 className={styles.tabTitle}>{item.title}</h3>
            <span className={styles.tabBadge}>
              {activeTab === item.id ? "VIEWING" : "CLICK TO VIEW"}
            </span>
          </button>
        ))}
      </div>

      {/* Feature Detail Display Box */}
      <div className={styles.detailBox}>
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