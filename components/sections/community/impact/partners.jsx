"use client"

import React, { useState } from 'react';
import Image from '@/components/ui/Image';
import styles from './partners.module.css';
import partnersData from '@/content/site-data/partners.json';

const ExternalLinkIcon = () => (
  <svg className={styles.externalIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default function Partner() {
  const [flippedCards, setFlippedCards] = useState({});

  const handleCardClick = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className={styles.partnerContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.gridContainer}>
          <h3 className={styles.gridTitle}>Partnership Programs</h3>
          
          <div className={styles.cardGrid}>
            {partnersData.map((partner, index) => (
              <div 
                key={index} 
                className={styles.flipCard}
                onClick={() => handleCardClick(index)}
              >
                <div className={`${styles.flipCardInner} ${flippedCards[index] ? styles.flipped : ''}`}>
                  
                  {/* FRONT FACE */}
                  <div className={styles.flipCardFront}>
                    <div className={styles.imageWrapper}>
                      <Image 
                        src={partner.image} 
                        alt={`${partner.title} Partner`} 
                        fill
                        className={styles.cardImage} 
                      />
                    </div>
                    <h4>{partner.title}</h4>
                    <p className={styles.frontText}>{partner.summary}</p>
                  </div>

                  {/* BACK FACE */}
                  <div className={styles.flipCardBack}>
                    <h4>{partner.title}</h4>
                    <p className={styles.backText}>{partner.details}</p>

                    {/* BOTTOM RIGHT LINK */}
                    {partner.link && (
                      <a 
                        href={partner.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={styles.visitLink}
                        onClick={(e) => e.stopPropagation()} // Prevents the card from flipping back over
                      >
                        <ExternalLinkIcon /> Visit Page
                      </a>
                    )}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}