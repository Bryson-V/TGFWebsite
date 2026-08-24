"use client";

import { FiExternalLink } from "react-icons/fi";
import resourcesData from "@/content/site-data/primaryResources.json";
import styles from "./primaryResources.module.css";

export default function PrimaryCareResources() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.subTag}>PATIENT SUPPORT</span>
        <h2 className={styles.sectionTitle}>Resources & Guides</h2>
        <p className={styles.sectionSubtitle}>
          Download free wellness guides and routine screening checklists to stay proactive.
        </p>
      </div>

      <div className={styles.grid}>
        {resourcesData.map((item) => (
          <div key={item.id} className={styles.card}>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardDesc}>{item.desc}</p>
            <a 
              href={item.externalUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.link}
            >
              <FiExternalLink size={18} /> Access Resource
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}