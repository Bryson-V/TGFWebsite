import Image from "next/image";
import Container from "@/components/ui/Container";
import styles from "./missionStatement.module.css";

export default function MissionStatement() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        
        {/* Mission Statement */}
        <div className={styles.missionStatement}>
          <div className={styles.missionHeadingWrapper}>
            <h2 className={styles.missionHeading}>
              Todu Guam addresses health equity issues for the island's
              underserved population.
            </h2>
            <div className={styles.underline} />
          </div>

          <div className={styles.missionImageWrapper}>
            <Image
              src="/images/story/mobile-clinic-early.webp"
              alt="Dennis Rodriguez Jr Mobile Care Clinic"
              fill
              sizes="(max-width: 992px) 100vw, 450px"
              className={styles.image}
              priority
            />
          </div>
        </div>

        {/* Outreach History */}
        <div className={styles.outreachHistory}>
          <div className={styles.overlappingCard}>
            <div className={styles.cardAccentBar} />
            <p className={styles.cardText}>
              In July 2016, with over 30 volunteers, we had our first outreach at
              the Paradise Fitness Center parking lot in Hagatna. Over 100 people
              came out to get their immunizations and consultations, among others.
              This was the first time our Mobile Care Clinic, our pioneer
              program, got into action. Inspired by the success of this community
              outreach, we held several more on the island until in 2017, Todu Guam
              Foundation was born. But it was only the beginning.
            </p>
          </div>

          {/* Right Mobile Clinic Image */}
          <div className={styles.outreachImageWrapper}>
            <Image
              src="/images/story/truck.webp"
              alt="TGF Mobile Care Clinic with Rainbow"
              fill
              sizes="(max-width: 992px) 100vw, 600px"
              className={styles.image}
            />
          </div>
        </div>

        {/* Community Impact */}
        <div className={styles.communityImpact}>
          {/* Left Side: 2x2 Photo Grid */}
          <div className={styles.photoGrid}>
            <div className={styles.gridImageWrapper}>
              <Image
                src="/images/story/grid-1.webp" // (Top Left)
                alt="TGF Community Kids"
                fill
                sizes="(max-width: 768px) 50vw, 250px"
                className={styles.image}
              />
            </div>
            <div className={styles.gridImageWrapper}>
              <Image
                src="/images/story/grid-2.webp" // (Top Right)
                alt="Mother and Child"
                fill
                sizes="(max-width: 768px) 50vw, 250px"
                className={styles.image}
              />
            </div>
            <div className={styles.gridImageWrapper}>
              <Image
                src="/images/story/grid-3.webp" // (Bottom Left)
                alt="Young Girl Peace Sign"
                fill
                sizes="(max-width: 768px) 50vw, 250px"
                className={styles.image}
              />
            </div>
            <div className={styles.gridImageWrapper}>
              <Image
                src="/images/story/grid-4.webp" // (Bottom Right)
                alt="TGF Outreach Team"
                fill
                sizes="(max-width: 768px) 50vw, 250px"
                className={styles.image}
              />
            </div>
          </div>

          {/* Right Side: Mission Callout Text */}
          <div className={styles.impactContent}>
            <p className={styles.impactText}>
              So for every person who’s had to choose between food or
              healthcare; For every child who is unable to play sports because his
              family cannot afford a physical; For every woman who cannot get a
              regular pap smear because she’s uninsured; For anyone in Guam who
              has ever needed medical care but was unable to get one, we see you.
              <strong> Todu Guam is here for you.</strong>
            </p>
          </div>
        </div>

      </Container>
    </section>
  );
}