import Image from '@/components/ui/Image';
import Container from "@/components/ui/Container";
import styles from "./CaresWhyAndHelpSection.module.css";

export default function CaresHelp() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={`${styles.row} ${styles.reverseRow}`}>
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <Image 
                src="/images/CommunityAndImpact/cares/what-we-help.jpeg" 
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
              We all have character strengths that we can tap into. But sometimes, we encounter different circumstances, changes, and challenges that make it difficult for us to harness our inner strength. The key is to develop the life skills that will help us learn, grow, and believe in ourselves. At the same time, it will allow us to gain an appreciation for others and become more aware of other people&apos;s feelings. To do so, we focus on these six areas:  &nbsp; <strong>Wisdom,  Courage,  Humanity,  Transcendence,  Temperance, and Justice.</strong>
            </p>
          </div>
        </div>

      </Container>
    </section>
  );
}