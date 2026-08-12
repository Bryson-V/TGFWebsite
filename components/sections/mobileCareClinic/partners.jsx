"use client"

import React from 'react';
import Image from 'next/image';
import styles from './partners.module.css';
import partnersData from '@/content/site-data/partners.json';

export default function Partner() {
  return (
    <section className={styles.partnerContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.gridContainer}>
          <h3 className={styles.gridTitle}>Partnership Programs</h3>
          
          <div className={styles.cardGrid}>
            {partnersData.map((partner, index) => (
              <div key={index} className={styles.flipCard}>
                <div className={styles.flipCardInner}>
                  
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