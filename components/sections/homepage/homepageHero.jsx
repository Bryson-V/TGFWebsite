"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './homepageHero.module.css';

const CAROUSEL_ITEMS = [
  {
    id: 0,
    tag: 'Youth & Outreach',
    title: 'Protecting Our Next Generation',
    description: 'Over 10,000 children across Guam have received essential care packs and preventive health screenings.',
    image: '/images/hero-child.jpg',
  },
  {
    id: 1,
    tag: 'Wellness on Wheels',
    title: 'Mobile Care Clinic Services',
    description: 'Bringing free checkups, immunizations, and medical consultations directly to underserved villages.',
    image: '/images/mobile-clinic.jpg',
  },
  {
    id: 2,
    tag: 'Hinemlo’ Program',
    title: "Empowering Women's Health",
    description: 'Expanding access to specialized OB-GYN, preventive screenings, and community support.',
    image: '/images/hero-women.jpg',
  },
  {
    id: 3,
    tag: 'MindCare Initiative',
    title: 'Accessible Behavioral Health',
    description: 'Providing dedicated therapy, psychiatry, and mental wellness resources island-wide.',
    image: '/images/behavioral-health.jpg',
  },
];

export default function HeroBanner() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Slow continuous rotation through the chamber
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CAROUSEL_ITEMS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const totalItems = CAROUSEL_ITEMS.length;

  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        
        {/* Left Side: Active Item Text Content */}
        <div className={styles.textContent}>
          <div className={styles.organicTag}>
            <span className={styles.leafIcon}>🌿</span>
            <span>501(c)(3) Community Non-Profit</span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className={styles.dynamicNarrative}
            >
              <span className={styles.itemTag}>{CAROUSEL_ITEMS[activeIndex].tag}</span>
              <h1 className={styles.mainHeading}>
                {CAROUSEL_ITEMS[activeIndex].title}
              </h1>
              <p className={styles.leadText}>
                {CAROUSEL_ITEMS[activeIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className={styles.actionRow}>
            <motion.a 
              href="#appointment" 
              className={styles.btnPrimaryWarm}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <span>Book Appointment</span>
              <span className={styles.arrowIcon}>→</span>
            </motion.a>

            <motion.a 
              href="#story" 
              className={styles.btnOrganicLink}
              whileHover={{ x: 3 }}
            >
              <span>Explore Our Story</span>
            </motion.a>
          </div>

          {/* Chamber Controls / Indicators */}
          <div className={styles.chamberNav}>
            {CAROUSEL_ITEMS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`${styles.navDot} ${activeIndex === idx ? styles.activeDot : ''}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right Side: 3D Cylindrical Chamber Stage */}
        <div className={styles.stage3D}>
          <div className={styles.rotatorChamber}>
            {CAROUSEL_ITEMS.map((item, index) => {
              // Calculate offset relative to active index
              let offset = (index - activeIndex + totalItems) % totalItems;
              
              // Normalize offset around center: -1, 0, 1, 2
              if (offset > totalItems / 2) offset -= totalItems;

              // Apply 3D Cylindrical Cylinder Math
              const translateY = offset * 110; // Vertical spacing along the arc
              const translateZ = -Math.abs(offset) * 120; // Depth recession
              const rotateX = offset * -28; // Angular tilt forward/backward
              const rotateY = offset * 12; // Slight right-hand angling (revolver effect)
              const opacity = 1 - Math.abs(offset) * 0.35; // Dim inactive cards

              return (
                <motion.div
                  key={item.id}
                  className={styles.chamberCard}
                  animate={{
                    y: translateY,
                    z: translateZ,
                    rotateX: rotateX,
                    rotateY: rotateY,
                    opacity: opacity,
                    scale: offset === 0 ? 1 : 0.88,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.25, 1, 0.5, 1],
                  }}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className={styles.cardInner}>
                    <img src={item.image} alt={item.title} className={styles.cardImage} />
                    <div className={styles.cardOverlay} />
                    <div className={styles.cardTitleBadge}>{item.tag}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}