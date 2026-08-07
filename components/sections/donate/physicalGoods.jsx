"use client";

import Container from "@/components/ui/Container";
import styles from "./physicalGoods.module.css";

export default function PhysicalGoodsModule() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.donationCard}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>PHYSICAL GOODS</h3>
            </div>
            
            <div className={styles.cardBody}>
              <div className={styles.iconWrapper}>
                {/* Package / Box SVG Icon */}
                <svg 
                  className={styles.goodsIcon} 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>

              <div className={styles.infoGroup}>
                <h4 className={styles.subheading}>Want to donate physical goods?</h4>
                <p className={styles.description}>
                  We appreciate contributions of supplies and materials to support our outreach programs. Reach out to coordinate your donation drop-off or inquiry.
                </p>
                
                <a 
                  href="mailto:peoplefirst@toduguam.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.emailButton}
                >
                  {/* Email Envelope Icon */}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className={styles.mailIcon}
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  peoplefirst@toduguam.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}