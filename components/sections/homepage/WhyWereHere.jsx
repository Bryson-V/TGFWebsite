import Image from '@/components/ui/Image';
import Container from "@/components/ui/Container";
import styles from "./WhyWereHere.module.css";

export default function WhyWereHere() {
  return (
    <section className={styles.section}>
      <Container className={styles.grid}>
        
        {/* LEFT COLUMN: Image */}
        <div className={styles.imageColumn}>
          <div className={styles.imageWrap}>
            <Image
              src="/images/hero/basic-healthcare.webp"
              alt="Community health volunteers caring for residents"
              width={600}
              height={450}
              className={styles.image}
            />
          </div>
        </div>

        {/* RIGHT COLUMN: Text & Pillars */}
        <div className={styles.textColumn}>
          <span className={styles.eyebrow}>Our Mission</span>
          
          <h2 className={styles.headline}>
            Why are <span className={styles.highlight}>we here?</span>
          </h2>
          
          <p className={styles.description}>
            To give every person in Guam access to basic healthcare, education, and support — without restrictions. Because getting Guam healthy starts with showing up for one man, one woman, and one child at a time.
          </p>

          {/* The 3 Interactive Pillars */}
          <div className={styles.pillars}>
            <div className={styles.pillar}>
              <div className={styles.pillarIcon}>✚</div>
              <div className={styles.pillarContent}>
                <h4 className={styles.pillarTitle}>Basic Healthcare</h4>
                <p className={styles.pillarText}>Medical care for every resident, regardless of ability to pay.</p>
              </div>
            </div>
            
            <div className={styles.pillar}>
              <div className={styles.pillarIcon}>🎓</div>
              <div className={styles.pillarContent}>
                <h4 className={styles.pillarTitle}>Education</h4>
                <p className={styles.pillarText}>Health literacy and prevention programs for all ages.</p>
              </div>
            </div>
            
            <div className={styles.pillar}>
              <div className={styles.pillarIcon}>🤝</div>
              <div className={styles.pillarContent}>
                <h4 className={styles.pillarTitle}>Support</h4>
                <p className={styles.pillarText}>Patient navigation and financial assistance when it matters most.</p>
              </div>
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
}