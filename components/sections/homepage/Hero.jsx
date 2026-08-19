import Image from '@/components/ui/Image';
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import styles from "./Hero.module.css";

/**
 * Hero
 * The homepage's opening mission statement banner. This is the first
 * thing a visitor sees, so the copy here is pulled directly from the
 * live site
 */
export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container className={styles.grid}>
        <div className={styles.text}>
          <h1 className={styles.headline}>
            We are committed to <strong>getting Guam healthy, one man, one woman, and one child at a time.</strong>
          </h1>
          <p className={styles.subline}>A locally and nationally recognized 501(c)(3) non-profit organization.</p>
          <Button href="about/ourStory">Learn more about Our Story</Button>
        </div>

        <div className={styles.imageWrapper}>
          <Image 
            src="images/hero/getting-guam-healthy.webp" 
            alt="Getting Guam Healthy" 
            width={640} 
            height={480}
            className={styles.image}
            priority
          />
        </div>
      </Container>
    </section>
  );
}