import Image from "next/image";
import Container from "@/components/ui/Container";
import styles from "./CaresWhyAndHelpSection.module.css";

export default function CaresWhyAndHelpSection() {
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

        {/* Section 2: What We Help You Work On */}
        <div className={`${styles.row} ${styles.reverseRow}`}>
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <Image 
                src="/images/cares/what-we-help.jpeg" 
                alt="Presentation and classroom activity setup" 
                width={550} 
                height={360}
                className={styles.image}
              />
            </div>
          </div>
          <div className={styles.textContent}>
            <h2 className={styles.title}>What We Help You Work On</h2>
            <p className={styles.paragraph}>
              We all have character strengths that we can tap into. But sometimes, we encounter different circumstances, changes, and challenges that make it difficult for us to harness our inner strength. The key is to develop the life skills that will help us learn, grow, and believe in ourselves. At the same time, it will allow us to gain an appreciation for others and become more aware of other people&apos;s feelings. To do so, we focus on these four areas: <strong>Gratitude, Open-Mindedness, Social Intelligence, Kindness.</strong>
            </p>
          </div>
        </div>

      </Container>
    </section>
  );
}