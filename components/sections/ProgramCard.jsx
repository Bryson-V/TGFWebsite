import Image from "next/image";
import styles from "./ProgramCard.module.css";

/**
 * ProgramCard
 * One program tile in the ProgramsGrid. Pure presentational component —
 * pass it a program object from content/site-data/programs.json.
 */
export default function ProgramCard({ program }) {
  return (
    <a href={program.href} className={styles.card}>
      <div className={styles.imageWrap}>
        <Image src={program.image} alt={program.title} fill className={styles.image} sizes="(min-width: 1025px) 33vw, 90vw" />
        <div className={styles.overlay} />
      </div>
      <h3 className={styles.title}>{program.title}</h3>
    </a>
  );
}
