"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from '@/components/ui/Image';
import { FaShieldAlt } from "react-icons/fa";
import styles from './insurances.module.css';

const insuranceData = [
  { id: 1, name: 'Medicaid', top: '10%', left: '22%', size: '120px', image: '/images/PatientResources/insurance/MedicaidLogo.png', link: 'https://www.medicaid.gov/' },
  { id: 2, name: 'Medicare', top: '15%', left: '62%', size: '115px', image: '/images/PatientResources/insurance/MedicareLogo.png', link: 'https://www.medicare.gov/' },
  { id: 3, name: 'NetCare', top: '42%', left: '10%', size: '100px', image: '/images/PatientResources/insurance/NetcareLogo.png', link: 'https://www.netcare.co.za/' },
  { id: 4, name: 'SelectCare', top: '42%', left: '72%', size: '100px', image: '/images/PatientResources/insurance/SelectCareLogo.png', link: 'https://www.calvos.net/Home.aspx' },
  { id: 5, name: 'Staywell', top: '70%', left: '22%', size: '100px', image: '/images/PatientResources/insurance/StayWellLogo.png', link: 'https://www.staywellguam.com/' },
  { id: 6, name: 'Tricare', top: '68%', left: '55%', size: '110px', image: '/images/PatientResources/insurance/TricareLogo.png', link: 'https://tricare.mil/' },
  { id: 7, name: 'Most Major Insurances', top: 'calc(50% - 65px)', left: 'calc(50% - 65px)', size: '130px', isSpecial: true, Icon: FaShieldAlt, link: './faq' },
];

export default function Insurances() {
  const [hoveredId, setHoveredId] = useState(null);
  const [clickedId, setClickedId] = useState(null);

  const activeId = clickedId || hoveredId;

  const handleBubbleClick = (id) => {
    // Toggles the clicked state on or off
    setClickedId(prevId => prevId === id ? null : id);
  };

  return (
    <div className={styles.sectionWrapper}>
      
      {/* Orbital Pool */}
      <motion.div 
        className={styles.poolContainer}
        initial={{ opacity: 0, x: 100 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1, type: "spring", bounce: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className={styles.orbitalRing}>
          
          {/* Static Decorative Ring */}
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
                onMouseEnter={() => setHoveredId(provider.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => handleBubbleClick(provider.id)}
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

      {/* Interactive List */}
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
            <motion.a
              key={`list-${provider.id}`}
              href={provider.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                ${styles.listItem} 
                ${activeId === provider.id ? styles.activeListItem : ''}
              `}
              whileHover={{ x: 8 }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
              onMouseEnter={() => setHoveredId(provider.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className={styles.listItemLeft}>
                <span className={styles.bulletPoint}>•</span>
                <div className={styles.providerTextGroup}>
                  <span className={styles.providerName}>{provider.name}</span>
                  <span className={styles.visitWebsiteText}>
                    Visit website &rarr;
                  </span>
                </div>
              </div>
              
              {provider.image ? (
                <Image 
                  src={provider.image} 
                  alt={`${provider.name} logo`}
                  width={80} 
                  height={60}
                  className={styles.listIcon}
                />
              ) : provider.Icon && (
                <provider.Icon className={styles.listReactIcon} />
              )}
            </motion.a>
          ))}
        </ul>
      </motion.div>

    </div>
  );
}