import Container from "@/components/ui/Container";
import styles from "./faqHero.module.css";

/**
 * FaqHero
 * The opening banner for the "FAQs & Resources" page, featuring a teal
 * overlay theme with a headline and descriptive subline.
 */
export default function FaqHero() {
  return (
    <section className={styles.hero}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.headline}>FAQs &amp; Resources</h1>
          <p className={styles.subline}>
            Get your answers on the most frequently asked questions about Todu Guam and our work.
          </p>
        </div>
      </Container>
    </section>
  );
}