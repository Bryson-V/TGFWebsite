"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaHandHoldingHeart } from 'react-icons/fa';
import styles from './noInsurance.module.css';

export default function NoInsurance() {
  return (
    <section className={styles.sectionWrapper}>
      <motion.div
        className={styles.contentContainer}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className={styles.iconWrapper}>
          <FaHandHoldingHeart className={styles.icon} />
        </div>
        
        <h2 className={styles.title}>No insurance? No problem!</h2>
        
        <p className={styles.description}>
          At the Todu Guam Foundation, we believe everyone deserves access to quality healthcare. 
          If you are uninsured or underinsured, we are here for you. We offer programs designed 
          to help you get the care you need without the financial stress.
        </p>
        
        {/* Next.js Link routing to your Financial Assistance page */}
        <Link href="/patient/financialAssistance" className={styles.ctaButton}>
          Explore Financial Assistance
        </Link>
      </motion.div>
    </section>
  );
}