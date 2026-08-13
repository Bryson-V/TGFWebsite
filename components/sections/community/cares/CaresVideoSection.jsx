import Container from "@/components/ui/Container";
import styles from "./CaresVideoSection.module.css";

export default function CaresVideoSection() {
  return (
    <section className={styles.videoSection}>
      <Container>
        <div className={styles.videoWrapper}>
          <div className={styles.videoContainer}>
            <iframe
              src="https://www.youtube-nocookie.com/embed/V1_HYG3vYMY"
              title="Move A Steady Pace by Baba B for Todu Guam CARES Movement"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className={styles.iframe}
            ></iframe>
          </div>
        </div>
      </Container>
    </section>
  );
}