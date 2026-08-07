import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import styles from "./CaresProgramSection.module.css";

const programTiers = [
  {
    tier: "TIER 1",
    title: "Education Outreach",
    description: "Focuses on education and awareness and features online and in-person activities that discuss the 24 character strengths",
    image: "/images/cares/tier1.jpeg",
    alt: "Education Outreach Tier 1 session"
  },
  {
    tier: "TIER 2",
    title: "You Matter Sessions",
    description: "Entails group participation and features activities that help you learn techniques on how to understand your emotions, solve problems, and handle stress, among others",
    image: "/images/cares/tier2.jpeg",
    alt: "You Matter Sessions Tier 2 group"
  },
  {
    tier: "TIER 3",
    title: "Family Sessions",
    description: "Brings you and your family together to make sure that you are supported throughout your journey",
    image: "/images/cares/tier3.jpeg",
    alt: "Family Sessions Tier 3 interaction"
  }
];

export default function CaresProgramSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.headerBlock}>
          <SectionHeading title="We Have a 3-Part Program at Work" align="center" />
          <p className={styles.subtitle}>
            Contact us with the form below to see how you can be part of the movement.
          </p>
        </div>

        <div className={styles.grid}>
          {programTiers.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={item.image} 
                  alt={item.alt} 
                  width={400} 
                  height={250}
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardContent}>
                <span className={styles.tierBadge}>{item.tier}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}