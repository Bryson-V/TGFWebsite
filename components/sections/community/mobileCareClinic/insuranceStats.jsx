"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { FaClipboardList, FaMoneyBillWave, FaBusAlt } from 'react-icons/fa';

import GuamOutline from '@/public/assets/GuamOutlined.jsx';
import styles from './insuranceStats.module.css';

const cardData = [
  {
    id: 0,
    percent: 20,
    color: '#00A3E0',
    icon: FaClipboardList,
    title: 'No Coverage',
    desc: 'With 20% of the health center population uninsured and 72% relying on Medicaid, access to consistent care remains a critical challenge.',
    subtitle: "Of Guam's Health Center Population is Uninsured, making healthcare seem out of reach.",
    legend: "Uninsured"
  },
  {
    id: 1,
    percent: 76,
    color: '#10B981',
    icon: FaMoneyBillWave,
    title: 'Poverty Comes First',
    desc: '76% of health center patients live below the poverty level. When affording daily needs is a struggle, healthcare is often delayed or skipped.',
    subtitle: "Of patients live below the poverty level, making out-of-pocket costs almost impossible.",
    legend: "Below Poverty Level"
  },
  {
    id: 2,
    percent: 100,
    color: '#F59E0B',
    icon: FaBusAlt,
    title: 'Transportation Barrier',
    desc: "100% of Guam's health center delivery sites are considered rural. Even when care exists, reaching a clinic isn't always possible without a ride.",
    subtitle: "Of Guam's health center service sites are considered rural and hard to reach.",
    legend: "Rural & Hard to Reach"
  }
];

export default function InsuranceStats() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const [activeIndex, setActiveIndex] = useState(0);
  const activeData = cardData[activeIndex];

  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (isInView) {
      animate(count, activeData.percent, { duration: 1.2, ease: "easeOut" });
    }
  }, [isInView, activeData.percent, count]);

  const mapInset = useTransform(count, (v) => `inset(${100 - v}% 0 0 0)`);

  return (
    <section className={styles.statsContainer} ref={containerRef}>
      <div className={styles.bgPattern}></div>

      <div className={styles.contentWrapper}>
        <div className={styles.heroSection}>
          <div className={styles.textBlock}>
            <span className={styles.eyebrow}>Why We Exist · The Problem</span>
            
            <div className={styles.statGroup}>
              
              <div className={styles.mapWrapper}>
                <GuamOutline 
                  className={styles.mapSvgBase} 
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                />

                <motion.div 
                  className={styles.mapOverlay}
                  style={{ 
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    clipPath: mapInset,
                    color: activeData.color 
                  }} 
                >
                  <GuamOutline className={styles.mapSvgDynamic} style={{ width: '100%', height: '100%' }} />
                </motion.div>
              </div>

              <div className={styles.statContent}>
                <a 
                  href="https://nachc.org/wp-content/uploads/2025/01/State-Fact-Sheet-Guam.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.statLinkWrapper}
                  style={{ textDecoration: 'none' }}
                >
                  <motion.h2 
                    className={styles.massiveStat}
                    animate={{ 
                      color: activeData.color,
                      filter: `drop-shadow(0 10px 15px ${activeData.color}33)`
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.span>{rounded}</motion.span>%
                  </motion.h2>
                </a>
                
                <div className={styles.legendContainer}>
                  <div className={styles.legendItem}>
                    <motion.span 
                      className={styles.dotDynamic} 
                      animate={{ backgroundColor: activeData.color }}
                      transition={{ duration: 0.4 }}
                      style={{ 
                        display: "inline-block",
                        width: "12px",
                        height: "12px",
                        borderRadius: "50%",
                        marginRight: "8px"
                      }}
                    />
                    {activeData.legend}
                  </div>
                </div>

                <motion.h3 
                  key={activeData.subtitle}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={styles.statSubtitle}
                >
                  {activeData.subtitle}
                </motion.h3>
              </div>
            </div>
            
            <div className={styles.problemGrid}>
              {cardData.map((item, index) => {
                const IconComponent = item.icon;
                const isActive = activeIndex === index;

                return (
                  <div 
                    key={item.id}
                    className={styles.problemCard}
                    onClick={() => setActiveIndex(index)}
                    style={{ 
                      borderColor: isActive ? item.color : '#E2E8F0',
                      borderWidth: isActive ? '2px' : '1px',
                      transform: isActive ? 'translateY(-4px)' : 'none'
                    }}
                  >
                    <span className={styles.problemIcon}>
                      <IconComponent color={item.color} size={48} />
                    </span>
                    <h4 className={styles.problemTitle}>{item.title}</h4>
                    <p className={styles.problemDesc}>{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}