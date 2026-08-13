"use client";

import Container from "@/components/ui/Container";
import styles from "./CancerCareSupport.module.css";

const RibbonIcon = () => (
  <svg className={styles.icon} viewBox="2 1 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 2s4 3 4 7c0 2.5-1.5 5-4 8-2.5-3-4-5.5-4-8 0-4 4-7 4-7z" />
    <path d="m9 15-4 7h4l2-3 2 3h4l-4-7" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className={styles.externalIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default function CancerCareSupport() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <RibbonIcon />
          </div>
          <div className={styles.content}>
            <div className={styles.textGroup}>
              <span className={styles.eyebrow}>Specialized Health Navigation</span>
              <h2>Cancer Care &amp; Treatment Support</h2>
              <p>
                Navigating a cancer diagnosis involves critical medical and financial decisions. Our team provides compassionate 
                guidance, helping patients access resources, coordinate local treatments, and connect with essential community networks 
                in partnership with Guam Cancer Care to ensure no one fights alone.
              </p>
            </div>
            <div className={styles.actionGroup}>
              <a 
                href="https://guamcancercare.org/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.partnerButton}
              >
                Visit Guam Cancer Care <ExternalLinkIcon />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}