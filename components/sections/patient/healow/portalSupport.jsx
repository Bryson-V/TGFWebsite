"use client";

import { FiExternalLink } from "react-icons/fi";
import styles from "./portalSupport.module.css";

const steps = [
  {
    num: "1",
    title: "Request Access",
    desc: "Ask our front desk staff during your visit or call our office to receive your portal invitation link."
  },
  {
    num: "2",
    title: "Create Credentials",
    desc: "Follow the unique registration link sent to your email to set up your username and secure password."
  },
  {
    num: "3",
    title: "Log In & Manage",
    desc: "Sign in through the web portal or the healow mobile app to manage your healthcare anytime."
  }
];

export default function PortalSupport() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>How to Get Started</h2>
        <p className={styles.sectionSubtitle}>
          Follow three simple steps to activate and access your patient portal account.
        </p>
      </div>

      <div className={styles.stepsGrid}>
        {steps.map((step) => (
          <div key={step.num} className={styles.stepCard}>
            <div className={styles.stepNumber}>{step.num}</div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDesc}>{step.desc}</p>
          </div>
        ))}
      </div>

      <div className={styles.calloutBanner}>
        <div className={styles.calloutText}>
          <span className={styles.calloutTag}>ACCOUNT RECOVERY</span>
          <h3 className={styles.calloutTitle}>Need Help Accessing Your Account?</h3>
          <p className={styles.calloutDesc}>
            If you forgot your password, got locked out, or need technical assistance, use the official account recovery tool.
          </p>
        </div>
        <a 
          href="https://healowhelp.com/home/healowhelp.html" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.calloutCta}
        >
          Portal Support <FiExternalLink size={16} />
        </a>
      </div>
    </section>
  );
}