import Image from '@/components/ui/Image';
import Container from "@/components/ui/Container";
import styles from "./CaresTargetAudienceSection.module.css";

const checkPoints = [
  "You feel alone or unheard.",
  "You don't understand what's going on with yourself.",
  "You're unable to speak about your thoughts or emotions.",
  "You want to become a better version of yourself."
];

const CheckIcon = () => (
  <svg className={styles.checkSvg} viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="12" fill="#93d2ed" />
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#ffffff" />
  </svg>
);

export default function CaresTargetAudienceSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          
          {/* Left Column: Heading & 2x2 Card Grid */}
          <div className={styles.contentColumn}>
            <h2 className={styles.title}>This is for you if...</h2>
            <div className={styles.pointsGrid}>
              {checkPoints.map((point, index) => (
                <div key={index} className={styles.pointCard}>
                  <div className={styles.iconWrapper}>
                    <CheckIcon />
                  </div>
                  <p className={styles.pointText}>{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Photo */}
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <Image 
                src="/images/cares/this-is-for-you.jpeg" 
                alt="Participants smiling and engaged in Todu Guam CARES session" 
                width={500} 
                height={350}
                className={styles.image}
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}