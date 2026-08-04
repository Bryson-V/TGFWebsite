import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import jobsData from "@/content/site-data/jobsData.json";
import styles from "./JobBoard.module.css";

export default function JobBoard() {
  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading title="Open Positions & Events" align="center" />
        <div className={styles.grid}>
          {jobsData.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={`${styles.badge} ${item.type === 'event' ? styles.eventBadge : styles.jobBadge}`}>
                  {item.badge}
                </span>
                <span className={styles.category}>{item.category}</span>
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
              <div className={styles.cardFooter}>
                <span className={styles.date}>Date: {item.date}</span>
                <a href="#apply" className={styles.link}>
                  {item.type === 'event' ? 'RSVP / Info →' : 'Apply Now →'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}