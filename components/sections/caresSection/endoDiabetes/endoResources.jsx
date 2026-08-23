import { FiExternalLink } from "react-icons/fi";
import resourcesData from "@/content/site-data/endoResources.json"; // Adjust path as needed
import styles from "./endoResources.module.css";

export default function EndoResources() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>Patient Resources & Tools</h2>
        <p className={styles.sectionSubtitle}>
          Download free guides and tracking templates to manage your daily health.
        </p>
      </div>

      <div className={styles.grid}>
        {resourcesData.map((item) => (
          <div key={item.id} className={styles.card}>
            <span className={styles.typeTag}>{item.type}</span>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardDesc}>{item.desc}</p>
            <a 
              href={item.externalUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.downloadBtn}
            >
              <FiExternalLink size={18} /> Access Resource
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}