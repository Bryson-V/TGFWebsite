import Image from '@/components/ui/Image';
import Container from "@/components/ui/Container";
import styles from "./CaresAcronymSection.module.css";

export default function CaresAcronymSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.imageCard}>
            <Image 
              src="/images/CommunityAndImpact/cares/cares-logo-card.jpeg" 
              alt="Todu Guam Cares Movement Logo Card" 
              width={500} 
              height={500}
              className={styles.image}
            />
          </div>
          
          <div className={styles.imageCard}>
            <Image 
              src="/images/CommunityAndImpact/cares/cares-acronym-card.jpeg" 
              alt="Community Approach to Resilience and Engagement for Students Acronym Card" 
              width={500} 
              height={500}
              className={styles.image}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}