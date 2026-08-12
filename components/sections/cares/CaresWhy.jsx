import Image from '@/components/ui/Image';
import Container from "@/components/ui/Container";
import styles from "./CaresWhyAndHelpSection.module.css";

export default function CaresWhy() {
  return (
    <section className={styles.section}>
      <Container>
        
        {/* Section 1: Our Why */}
        <div className={styles.row}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>Our Why</h2>
            <p className={styles.subtitle}>Todu Guam CARES Movement is here for you.</p>
            <p className={styles.paragraph}>
              We will provide a safe space for you to express your thoughts and feelings. Just as important, we will guide you so you can learn strategies on how to cope with challenging situations now and throughout your life.
            </p>
            <p className={styles.highlightText}>
              We work hard to help you have #KinderDaysAhead.
            </p>
          </div>
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <Image 
                src="/images/cares/our-why.jpeg" 
                alt="Students interacting during a Todu Guam CARES session" 
                width={550} 
                height={360}
                className={styles.image}
              />
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
}