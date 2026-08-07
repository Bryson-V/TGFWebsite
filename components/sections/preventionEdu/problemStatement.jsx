"use client";

import { motion } from "framer-motion";
import styles from "./problemStatement.module.css";

export default function ProblemStatement() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Left Side: Image with floating badge */}
        <motion.div
          className={styles.imageColumn}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className={styles.imageWrapper}>
            <img
              src="/images/preventionEdu/EduPic.webp"
              alt="Todu Guam Foundation team at a Let's Talk outreach event"
              className={styles.image}
            />
            {/* The teal badge overlapping the image from the Figma design */}
            <div className={styles.imageBadge}>
              <strong>LET'S TALK</strong>
              <span>Medical Education Outreach</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Text Content */}
        <motion.div
          className={styles.textColumn}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <h4 className={styles.subtitle}>THE PROBLEM</h4>
          
          <p className={styles.paragraph}>
            As of 2019, the top three causes of death in Guam are ischemic heart disease, stroke, and lung cancer — all non-communicable diseases (NCDs). It's worth noting that NCDs are largely caused by unhealthy behaviors: poor diet, tobacco use, and lack of physical activity. With a proper lifestyle and the right attitude toward health, these risk factors can be significantly reduced.
          </p>
          
          <h3 className={styles.highlightText}>
            TGF's Prevention and Education program encourages Guamanians to take charge of their health and focus on disease prevention rather than a late-stage reaction.
          </h3>
          
          <p className={styles.paragraph}>
            Through our “Let's Talk” forums and preventive healthcare services, we encourage positive lifestyle changes — covering topics that encompass our overall health, conducted in different parts of our community.
          </p>
        </motion.div>
        
      </div>
    </section>
  );
}