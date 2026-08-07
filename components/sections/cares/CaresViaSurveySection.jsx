import Container from "@/components/ui/Container";
import styles from "./CaresViaSurveySection.module.css";

export default function CaresViaSurveySection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>
            Learn about yourself.<br />
            Know your greatest strengths
          </h2>
          <p className={styles.description}>
            Take this short survey from{" "}
            <a 
              href="https://www.viacharacter.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.link}
            >
              viacharacter.org
            </a>{" "}
            to find out what your character strengths are. Is it love of learning, humor, hope, or something else?
          </p>
          <div className={styles.buttonWrapper}>
            <a 
              href="https://www.viacharacter.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              Discover it here
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}