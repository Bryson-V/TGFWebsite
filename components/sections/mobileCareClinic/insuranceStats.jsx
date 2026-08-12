"use client"
import React from 'react';
import { FaClipboardList, FaMoneyBillWave, FaBusAlt } from 'react-icons/fa';
import styles from './insuranceStats.module.css';

export default function InsuranceStats() {
  return (
    <section className={styles.statsContainer}>
      <div className={styles.bgPattern}></div>

      <div className={styles.contentWrapper}>
        <div className={styles.heroSection}>
          <div className={styles.textBlock}>
            <span className={styles.eyebrow}>Why We Exist · The Problem</span>
            
            <div className={styles.statGroup}>
              <a 
                href="https://nachc.org/wp-content/uploads/2025/01/State-Fact-Sheet-Guam.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.statLinkWrapper}
              >
                <h2 className={styles.massiveStat}>20%</h2>
              </a>
              <h3 className={styles.statSubtitle}>Of Guam still lacks health insurance today</h3>
            </div>
            
            {/* Problem Cards */}
            <div className={styles.problemGrid}>
              <div className={styles.problemCard}>
                <span className={styles.problemIcon}>
                  <FaClipboardList color="#6366F1" />
                </span>
                <h4 className={styles.problemTitle}>No Coverage</h4>
                <p className={styles.problemDesc}>
                  In 2019, roughly 38,000 Guam residents were uninsured or underinsured — with little to no access to free healthcare.
                </p>
              </div>

              <div className={styles.problemCard}>
                <span className={styles.problemIcon}>
                  <FaMoneyBillWave color="#10B981" />
                </span>
                <h4 className={styles.problemTitle}>Poverty Comes First</h4>
                <p className={styles.problemDesc}>
                  When you can barely afford food and daily needs, healthcare falls off the list entirely. The only choice was to skip it.
                </p>
              </div>

              <div className={styles.problemCard}>
                <span className={styles.problemIcon}>
                  <FaBusAlt color="#F59E0B" />
                </span>
                <h4 className={styles.problemTitle}>Transportation Barrier</h4>
                <p className={styles.problemDesc}>
                  Even when free care exists, getting there isn't always possible. No bus fare, no car — no appointment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}