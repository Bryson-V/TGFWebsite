"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'; 
import { FaShieldAlt } from "react-icons/fa";
import styles from './insurances.module.css';

const insuranceData = [
  { id: 1, name: 'Medicaid', top: '10%', left: '22%', size: '120px', image: '/images/PatientResources/insurance/MedicaidLogo.png' },
  { id: 2, name: 'Medicare', top: '15%', left: '62%', size: '115px', image: '/images/PatientResources/insurance/MedicareLogo.png' },
  { id: 3, name: 'NetCare', top: '42%', left: '10%', size: '100px', image: '/images/PatientResources/insurance/NetcareLogo.png' },
  { id: 4, name: 'SelectCare', top: '42%', left: '72%', size: '100px', image: '/images/PatientResources/insurance/SelectCareLogo.png' },
  { id: 5, name: 'Staywell', top: '70%', left: '22%', size: '100px', image: '/images/PatientResources/insurance/StayWellLogo.png' },
  { id: 6, name: 'Tricare', top: '68%', left: '55%', size: '110px', image: '/images/PatientResources/insurance/TricareLogo.png' },
  { id: 7, name: 'Most Major Insurances', top: 'calc(50% - 65px)', left: 'calc(50% - 65px)', size: '130px', isSpecial: true, Icon: FaShieldAlt },
];

export default function Insurances() {
  const [activeId, setActiveId] = useState(null);

  return (
    <div className={styles.sectionWrapper}>
      
      {/* LEFT SIDE: Orbital Pool (Slides in from the right) */}
      <motion.div 
        className={styles.poolContainer}
        initial={{ opacity: 0, x: 100 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1, type: "spring", bounce: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className={styles.orbitalRing}>
          
          {/* Static Decorative Ring with Colored Accents */}
          <div className={styles.giantStaticRing}>
            <div className={styles.accentDot1} />
            <div className={styles.accentDot2} />
            <div className={styles.accentDot3} />
          </div>

          {insuranceData.map((provider) => {
            const isActive = activeId === provider.id;
            
            return (
              <motion.div
                key={provider.id}
                className={`
                  ${styles.insuranceBubble} 
                  ${provider.isSpecial ? styles.specialBubble : ''} 
                  ${isActive ? styles.activeBubble : ''}
                `}
                style={{ 
                  top: provider.top, 
                  left: provider.left,
                  width: provider.size,
                  height: provider.size,
                }}
                whileHover={{ scale: 1.15 }}
                onMouseEnter={() => setActiveId(provider.id)}
                onMouseLeave={() => setActiveId(null)}
              >
                {provider.image ? (
                  <Image 
                    src={provider.image} 
                    alt={provider.name}
                    width={100} 
                    height={100}
                    className={styles.bubbleImage}
                  />
                ) : provider.Icon && (
                  <div className={styles.iconWrapper}>
                    <provider.Icon className={styles.bubbleIcon} />
                    <span className={styles.iconText}>Major<br/>Insurances</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* RIGHT SIDE: Interactive List (Fades and slides up slightly) */}
      <motion.div 
        className={styles.listContainer}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className={styles.listTitle}>Accepted Insurances</h2>
        <p className={styles.listSubtitle}>
          We accept a wide range of insurance providers to ensure accessible care across Guam.
        </p>
        
        <ul className={styles.insuranceList}>
          {insuranceData.map((provider) => (
            <motion.li
              key={`list-${provider.id}`}
              className={`
                ${styles.listItem} 
                ${activeId === provider.id ? styles.activeListItem : ''}
              `}
              whileHover={{ x: 8 }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
              onMouseEnter={() => setActiveId(provider.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              <div className={styles.listItemLeft}>
                <span className={styles.bulletPoint}>•</span>
                {provider.name}
              </div>
              
              {provider.image ? (
                <Image 
                  src={provider.image} 
                  alt={`${provider.name} logo`}
                  width={60} 
                  height={60}
                  className={styles.listIcon}
                />
              ) : provider.Icon && (
                <provider.Icon className={styles.listReactIcon} />
              )}
            </motion.li>
          ))}
        </ul>
      </motion.div>

    </div>
  );
}