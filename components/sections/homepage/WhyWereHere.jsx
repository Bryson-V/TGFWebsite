import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import styles from "./WhyWereHere.module.css";

/**
 * WhyWereHere
 * The "Why are we here?" image + statement banner that leads into the
 * programs section.
 */
export default function WhyWereHere() {
  return (
    <section className={styles.section}>
      <Container className={styles.grid}>
        <Image
          src="/images/hero/basic-healthcare.webp"
          alt="Basic Healthcare"
          width={600}
          height={450}
          className={styles.image}
        />
        <div className={styles.text}>
          <h2 className={styles.headline}>
            Why are we here? To give you basic healthcare, education, and support without restrictions
          </h2>
          <Button href="https://toduguam.com/mobile-care-clinic/">About Our Mobile Care Clinic</Button>
        </div>
      </Container>
    </section>
  );
}
