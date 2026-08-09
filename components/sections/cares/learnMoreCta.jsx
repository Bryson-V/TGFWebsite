"use client";

import Container from "@/components/ui/Container";
import styles from "./learnMoreCta.module.css";

export default function LearnMoreCta() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.card}>
          <div className={styles.content}>
            <p className={styles.eyebrow}>HAVE MORE QUESTIONS?</p>
            <h3 className={styles.title}>Want to learn more about Character Strengths?</h3>
            <p className={styles.description}>
              Explore comprehensive definitions, resources, and insights regarding all 24 character strengths.
            </p>
          </div>
          <div className={styles.action}>
            <a 
              href="https://posproject.org/character-strengths/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.button}
            >
              Visit The Postivity Project &rarr;
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}