import Container from "@/components/ui/Container";
import styles from "./CareersHero.module.css";

// Clean SVG star icon to replace the emoji
const StarIcon = () => (
  <svg className={styles.starSvg} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export default function CareersHero() {
  return (
    <section className={styles.heroSection}>
      <Container className={styles.container}>
        <div className={styles.badge}>
          <StarIcon />
          <span>Officially NHSC Accredited Facility</span>
        </div>
        <h1 className={styles.title}>Careers at Todu Guam</h1>
        <p className={styles.subtitle}>
          Build a rewarding career providing care to underserved communities in Guam. Eligible clinicians can leverage National Health Service Corps (NHSC) loan repayment and scholarship programs.
        </p>
      </Container>
    </section>
  );
}