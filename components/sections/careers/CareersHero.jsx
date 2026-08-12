import Image from '@/components/ui/Image';
import Container from "@/components/ui/Container";
import styles from "./CareersHero.module.css";

// Clean SVG star icon 
const StarIcon = () => (
  <svg className={styles.starSvg} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export default function CareersHero() {
  return (
    <section className={styles.heroSection}>
      {/* Background Image & Overlay */}
      <div className={styles.imageContainer}>
        <Image
          src="/images/careers/office.jpeg"
          alt="Careers at Todu Guam Foundation"
          fill
          priority
          className={styles.heroImage}
        />
        <div className={styles.overlay}></div>
      </div>

      <Container className={styles.contentContainer}>
        {/* Left-Aligned Text Content */}
        <div className={styles.textContent}>
          <h1 className={styles.title}>
            <span className={styles.accentText}>Careers</span> at Todu Guam
          </h1>
          
          <p className={styles.subtitle}>
            Build a rewarding career providing care to underserved communities in Guam. Eligible clinicians can leverage National Health Service Corps (NHSC) loan repayment and scholarship programs.
          </p>
          
          {/* Star Badge (Replaces the CTA Button from Volunteer page) */}
          <div className={styles.badge}>
            <StarIcon />
            <span>Officially NHSC Accredited Facility</span>
          </div>
        </div>
      </Container>
    </section>
  );
}