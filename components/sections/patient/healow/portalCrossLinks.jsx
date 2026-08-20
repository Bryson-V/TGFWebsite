"use client";

import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import Container from "@/components/ui/Container";
import styles from "./portalCrossLinks.module.css";

export default function PortalCrossLinks() {
  return (
    <section className={styles.crossLinksSection}>
      <Container className={styles.container}>
        <div className={styles.crossLinksGrid}>
          <div className={styles.crossLinkCard}>
            <h3>Insurance Information</h3>
            <p>Have questions about accepted insurance providers or covered plans?</p>
            <Link href="insurance" className={styles.linkButton}>
              View Accepted Insurance <FiArrowRight size={18} />
            </Link>
          </div>

          <div className={styles.crossLinkCard}>
            <h3>Financial Assistance</h3>
            <p>Need help paying for care? Explore our sliding scale and aid programs.</p>
            <Link href="financialAssistance" className={styles.linkButton}>
              Explore Financial Aid <FiArrowRight size={18} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}