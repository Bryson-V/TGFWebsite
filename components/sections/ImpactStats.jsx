import stats from "@/content/site-data/stats.json";
import Container from "@/components/ui/Container";
import StatCounter from "./StatCounter";
import styles from "./ImpactStats.module.css";

/**
 * ImpactStats
 * Renders the quarterly impact numbers from content/site-data/stats.json.
 * To update the figures each quarter, just edit the numbers in that file —
 * no code changes needed.
 */
export default function ImpactStats() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <h2 className={styles.title}>{stats.sectionTitle}</h2>
          <p className={styles.note}>{stats.sectionNote}</p>
        </div>
        <div className={styles.grid}>
          {stats.items.map((item) => (
            <StatCounter key={item.id} value={item.value} label={item.label} />
          ))}
        </div>
      </Container>
    </section>
  );
}
