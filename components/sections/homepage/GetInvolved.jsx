import Image from "next/image";
import getInvolved from "@/content/site-data/get-involved.json";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import styles from "./GetInvolved.module.css";

/**
 * GetInvolved
 * The two-card "Be a volunteer" / "Donate" section. Card content lives in
 * content/site-data/get-involved.json.
 */
export default function GetInvolved() {
  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading title={getInvolved.sectionTitle} subtitle={getInvolved.sectionSubtitle} />
        <div className={styles.grid}>
          {getInvolved.cards.map((card) => (
            <div key={card.id} className={styles.card}>
              <div className={styles.imageWrap}>
                <Image 
                  src={card.image} 
                  alt={card.title} 
                  fill 
                  className={styles.image} 
                  sizes="(min-width: 1025px) 45vw, 90vw" 
                />
              </div>
              <div className={styles.body}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                
                {/* NEW WRAPPER: description and button tight coupling */}
                <div className={styles.ctaArea}>
                  <p className={styles.cardDesc}>{card.description}</p>
                  
                  <div className={styles.buttonWrap}>
                    <Button 
                      href={card.href} 
                      className={`${styles.ctaButton} ${card.id === 'donate' ? styles.primaryBtn : styles.secondaryBtn}`}
                    >
                      {card.buttonText}
                    </Button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}