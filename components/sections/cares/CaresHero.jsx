import Image from "next/image";
import Container from "@/components/ui/Container";
import styles from "./CaresHero.module.css";

export default function CaresHero() {
  return (
    <section className={styles.heroSection}>
      <Container>
        <div className={styles.heroContent}>
          <div className={styles.textBlock}>
            <span className={styles.eyebrow}>OUR WORK</span>
            <h1 className={styles.title}>CARES Movement</h1>
            <p className={styles.description}>
              This is funded by the U.S. Department of Education under Grant #S425H210004 and supported by the Office of the Governor of Guam&apos;s Education Stabilization Funds.
            </p>
          </div>
          
          <div className={styles.logoBlock}>
            <div className={styles.logoWrapper}>
              {/* Top Symbol Image */}
              <div className={styles.symbolContainer}>
                <Image 
                  src="/images/cares/cares-thumb.jpeg" 
                  alt="Kinder Days Ahead Symbol" 
                  width={100} 
                  height={100}
                  priority
                  className={styles.symbolImage}
                />
              </div>

              {/* Bottom Text Logo Image */}
              <div className={styles.textLogoContainer}>
                <Image 
                  src="/images/cares/kinder-days-ahead.jpeg" 
                  alt="Kinder Days Ahead - Join the Movement" 
                  width={200} 
                  height={150}
                  priority
                  className={styles.textLogoImage}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}