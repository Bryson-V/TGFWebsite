"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaHandHoldingUsd, FaShieldAlt, FaInfoCircle, FaCheckCircle } from 'react-icons/fa';
import styles from './programOverview.module.css';
import overviewData from '@/content/site-data/slidingFee.json';

const iconMap = {
  FaHandHoldingUsd: FaHandHoldingUsd,
  FaShieldAlt: FaShieldAlt,
  FaInfoCircle: FaInfoCircle,
  FaCheckCircle: FaCheckCircle
};

export default function ProgramOverview() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Program Overview & Key Points</h2>
          <p className={styles.subtitle}>Everything you need to know about the Sliding Fee Discount Program.</p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {overviewData.map((point) => {
            const IconComponent = iconMap[point.iconName] || FaInfoCircle;

            return (
              <motion.div key={point.id} className={styles.card} variants={itemVariants}>
                <div className={styles.iconWrapper}>
                  <IconComponent className={styles.icon} />
                </div>
                <h3 className={styles.cardTitle}>{point.title}</h3>
                <p className={styles.cardDescription}>{point.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}