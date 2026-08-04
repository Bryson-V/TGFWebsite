import Image from "next/image";
import Container from "@/components/ui/Container";
import styles from "./directorHero.module.css";

export default function BoardHero() {
  return (
    <section className={styles.heroSection}>
      {/* Background Image & Overlay */}
      <div className={styles.imageContainer}>
        <Image
          src="/images/directors/directorHero.webp" 
          alt="Todu Guam Foundation Board of Directors"
          fill
          priority
          className={styles.heroImage}
        />
        <div className={styles.overlay}></div>
      </div>

      {/* Foreground Text Content */}
      <Container className={styles.contentContainer}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>Our Board of Directors</h1>
          <p className={styles.subtitle}>
            Meet the dedicated leaders guiding the Todu Guam Foundation's mission to get Guam healthy—one man, one woman, and one child at a time.
          </p>
        </div>
      </Container>
    </section>
  );
}