'use client';

import React from 'react';
import { FaCalendarAlt, FaExternalLinkAlt, FaBullhorn, FaPlus } from 'react-icons/fa';
import styles from './commOutreachHero.module.css';

export default function CommOutreachHero() {
  const googleCalendarUrl = "https://calendar.google.com";

  return (
    <section className={styles.heroContainer}>
      {/* BACKGROUND DECORATIONS USING REACT-ICONS */}
      <div className={styles.bgDecorations} aria-hidden="true">
        <div className={styles.glowTopLeft} />
        <div className={styles.glowBottomRight} />

        {/* Megaphone Background Elements */}
        <FaBullhorn className={styles.megaphoneLeft} />
        <FaBullhorn className={styles.megaphoneRight} />

        {/* Plus / Cross Accents */}
        <FaPlus className={styles.crossTopRight} />
        <FaPlus className={styles.crossBottomLeft} />
      </div>

      {/* FOREGROUND HERO CONTENT */}
      <div className={styles.heroContent}>
        <span className={styles.badge}>Community Health Outreach</span>
        <h1 className={styles.title}>Upcoming Outreaches & Events</h1>
        <p className={styles.subtitle}>
          Join us across Guam for free health screenings, mobile care clinic visits, 
          and community health forums.
        </p>

        {/* SUBSCRIBE NOTIFICATION BANNER */}
        <div className={styles.notificationBanner}>
          <div className={styles.notificationText}>
            <span className={styles.iconWrapper}>
              <FaCalendarAlt size={18} />
            </span>
            <div>
              <strong>Never miss an outreach!</strong>
              <p>Subscribe to our official Google Calendar to sync all upcoming clinic dates directly to your phone.</p>
            </div>
          </div>
          <a 
            href={googleCalendarUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.subscribeBtn}
          >
            <span>Subscribe to Calendar</span>
            <FaExternalLinkAlt size={12} />
          </a>
        </div>
      </div>
    </section>
  );
}