import styles from "./SectionHeading.module.css";

/**
 * SectionHeading
 * Title + optional subtitle + the thick divider bar used throughout the
 * original site under section headings. Set `align="center"` for
 * centered sections like the hero panels.
 *
 * Usage: <SectionHeading title="Our Work" subtitle="..." />
 */
export default function SectionHeading({ title, subtitle, align = "left", dividerColor = "primary" }) {
  return (
    <div className={`${styles.wrap} ${align === "center" ? styles.center : ""}`}>
      <h2 className={styles.title}>{title}</h2>
      <span className={`${styles.divider} ${dividerColor === "dark" ? styles.dividerDark : ""}`} />
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
