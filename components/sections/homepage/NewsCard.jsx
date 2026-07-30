import Image from "next/image";
import Link from "next/link";
import styles from "./NewsCard.module.css";

/**
 * NewsCard
 * One article tile. `href` can be an internal path (e.g. "/news/slug")
 * once article detail pages exist, or an external URL for press mentions.
 * `tag` and `date` are both optional.
 */
export default function NewsCard({ title, image, href, date, tag, excerpt }) {
  const isInternal = href?.startsWith("/");
  const Wrapper = isInternal ? Link : "a";
  const wrapperProps = isInternal ? { href } : { href, target: "_blank", rel: "noopener noreferrer" };

  return (
    <Wrapper {...wrapperProps} className={styles.card}>
      <div className={styles.imageWrap}>
        <Image src={image} alt={title} fill className={styles.image} sizes="(min-width: 1025px) 30vw, 90vw" />
        {tag && <span className={styles.tag}>{tag}</span>}
      </div>
      <div className={styles.body}>
        {date && <span className={styles.date}>{date}</span>}
        <h3 className={styles.title}>{title}</h3>
        {excerpt && <p className={styles.excerpt}>{excerpt}</p>}
      </div>
    </Wrapper>
  );
}
