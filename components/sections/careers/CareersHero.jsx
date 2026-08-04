import Container from "@/components/ui/Container";
import styles from "./CareersHero.module.css";

export default function CareersHero() {
  return (
    <section className={styles.heroSection}>
      <Container className={styles.container}>
        <div className={styles.badge}>
          <span>⭐ Officially NHSC Accredited Facility</span>
        </div>
        <h1 className={styles.title}>Careers at Todu Guam</h1>
        <p className={styles.subtitle}>
          Build a rewarding career providing care to underserved communities in Guam. Eligible clinicians can leverage National Health Service Corps (NHSC) loan repayment and scholarship programs.
        </p>
      </Container>
    </section>
  );
}