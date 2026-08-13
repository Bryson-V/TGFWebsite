"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import styles from "./SlidingFeeRedirectCard.module.css";

const DocumentSearchIcon = () => (
  <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <circle cx="10" cy="13" r="2" />
    <line x1="12" y1="15" x2="15" y2="18" />
  </svg>
);

export default function SlidingFeeRedirectCard() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.card}>
          <div className={styles.textGroup}>
            <span className={styles.eyebrow}>Financial Support &amp; Equity</span>
            <h3>Looking for our Sliding Fee Scale Information?</h3>
            <p>
              We offer discounted services based on household size and income to ensure healthcare is affordable. 
              Review eligibility criteria, required documentation, and details on our sliding fee form.
            </p>
          </div>
          <div className={styles.actionGroup}>
            <Link href="/faq#sliding-fee" className={styles.button}>
              View Sliding Fee Details &rarr;
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}