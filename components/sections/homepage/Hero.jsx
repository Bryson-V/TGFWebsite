import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import styles from "./Hero.module.css";

/**
 * Hero
 * The homepage's opening mission statement banner. This is the first
 * thing a visitor sees, so the copy here is pulled directly from the
 * live site rather than a data file — treat it as page-specific content
 * you'd edit in this file directly if it changes.
 */
export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container className={styles.grid}>
        <div className={styles.text}>
          <Image
            src="/images/logo/tgf-logo.png"
            alt="Todu Guam Foundation"
            width={250}
            height={90}
            className={styles.heroLogo}
          />
          <h1 className={styles.headline}>
            We are committed to <strong>getting Guam healthy, one man, one woman, and one child at a time.</strong>
          </h1>
          <p className={styles.subline}>A locally and nationally recognized 501(c)(3) non-profit organization.</p>
          <Button href="/ourStory">Learn more about Our Story</Button>
        </div>

        <a
          href="https://www.instagram.com/toduguam.foundation/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.imageLink}
        >
          <Image
            src="/images/hero/getting-guam-healthy.webp"
            alt="Getting Guam Healthy"
            width={640}
            height={480}
            className={styles.image}
            priority
          />
        </a>
      </Container>
    </section>
  );
}
