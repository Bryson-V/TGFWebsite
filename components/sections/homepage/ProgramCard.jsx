import Image from "next/image";
import styles from "./ProgramCard.module.css";

export default function ProgramCard({ program }) {
  return (
    <a href={program.href} className={styles.card}>
      <div className={styles.imageWrap}>
        <div className={styles.parallaxImageContainer} data-swiper-parallax-x="-15%">
          <Image 
            src={program.image} 
            alt={program.title} 
            fill 
            className={styles.image} 
            sizes="(min-width: 1025px) 35vw, 90vw" 
          />
        </div>
        <div className={styles.overlay} />
      </div>

      <div className={styles.contentWrapper}>
        <h3 className={styles.title}>{program.title}</h3>
        <p className={styles.description}>{program.description}</p>
      </div>
    </a>
  );
}