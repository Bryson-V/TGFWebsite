import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import styles from "./mobileCareHero.module.css";

export default function MobileCareHero() {
  return (
    <section className={styles.heroSection}>
      {/* Background Truck Image */}
      <div className={styles.bgImageWrapper}>
        <Image
          src="/images/mobileCareClinic/Truck.jpg"
          alt="Todu Guam Mobile Care Clinic Truck"
          fill
          priority
          className={styles.bgImage}
        />
        <div className={styles.overlay}></div>
      </div>

      {/* Banner Content */}
      <Container className={styles.heroContent}>
        <h1 className={styles.title}>Mobile Care Clinic</h1>
        <p className={styles.subtitle}>
          Our clinic on wheels — bringing free, comprehensive healthcare directly to the communities of Guam that need it most.
        </p>
        
        {/* Link to the Upcoming Events page */}
        <Link href="/upcoming" className={styles.ctaButton}>
          View Upcoming Outreaches
        </Link>
      </Container>
    </section>
  );
}