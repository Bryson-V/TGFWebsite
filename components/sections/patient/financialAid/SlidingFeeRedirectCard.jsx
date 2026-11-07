"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import styles from "./SlidingFeeRedirectCard.module.css";

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
            <Link href="faq#sliding-fee" className={styles.button}>
              View Sliding Fee Details &rarr;
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}