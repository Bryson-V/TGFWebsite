import Image from "next/image";
import Container from "@/components/ui/Container";
import styles from "./storyHero.module.css";

export default function StoryHero() {
  return (
    <section className={styles.hero}>
      <Container className={styles.grid}>
        <div className={styles.text}>
          <h1 className={styles.headline}>Our Story</h1>
        </div>

        <div className={styles.imageCluster}>
          <div className={styles.primaryImageWrapper}>
            <Image
              src="/images/story/truck.webp"
              alt="Mobile Care Clinic"
              fill
              sizes="(max-width: 768px) 100vw, 300px"
              className={styles.primaryImage}
              priority
            />
          </div>
          <div className={styles.secondaryImageWrapper}>
            <Image
              src="/images/story/B&W.webp"
              alt="Todu Guam Foundation Volunteers"
              fill
              sizes="(max-width: 768px) 100vw, 100px"
              className={styles.secondaryImage}
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}