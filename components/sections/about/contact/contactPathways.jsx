"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import styles from "./contactPathways.module.css";

// SVG Helper component for clean, crisp vector icons
const PathwayIcon = ({ name }) => {
  const icons = {
    "heart": (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
    "users": (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    "sprout": (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 20h10" />
        <path d="M10 20c5.5-2.5.8-6.4 3-10" />
        <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
        <path d="M14.1 6a7 7 0 0 1 1.1 4c-1.5.1-2.8-.2-3.8-.9 1.1-1.6 1.8-2.6 2.7-3.1z" />
      </svg>
    )
  };

  return icons[name] || null;
};

export default function ContactPathways() {
  return (
    <section className={styles.pathwaysSection}>
      <Container>
        <div className={styles.pathwaysContainer}>
          <h3 className={styles.pathwaysHeading}>Looking for something else?</h3>
          
          <div className={styles.pathwaysGrid}>
            
            {/* Make a Donation */}
            <Link href="../donate" className={styles.pathwayCard}>
              <div className={styles.pathwayIconWrapper}>
                <PathwayIcon name="heart" />
              </div>
              <h4 className={styles.pathwayTitle}>Make a Donation</h4>
              <p className={styles.pathwayDesc}>
                Support healthcare access across Guam by contributing to our programs.
              </p>
              <span className={styles.pathwayLinkText}>Support Our Mission &rarr;</span>
            </Link>

            {/* Volunteer */}
            <Link href="../community\volunteer" className={styles.pathwayCard}>
              <div className={styles.pathwayIconWrapper}>
                <PathwayIcon name="users" />
              </div>
              <h4 className={styles.pathwayTitle}>Volunteer</h4>
              <p className={styles.pathwayDesc}>
                Join our outreach events and help make a difference in our community.
              </p>
              <span className={styles.pathwayLinkText}>Get Involved &rarr;</span>
            </Link>

            {/* Careers */}
            <Link href="../community\careers" className={styles.pathwayCard}>
              <div className={styles.pathwayIconWrapper}>
                <PathwayIcon name="sprout" />
              </div>
              <h4 className={styles.pathwayTitle}>Careers</h4>
              <p className={styles.pathwayDesc}>
                Explore open opportunities to join our compassionate clinical & staff team.
              </p>
              <span className={styles.pathwayLinkText}>View Positions &rarr;</span>
            </Link>

          </div>
        </div>
      </Container>
    </section>
  );
}