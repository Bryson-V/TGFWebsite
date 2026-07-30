import styles from "./Container.module.css";

/**
 * Container
 * Centers content and caps its width so long lines of text and wide
 * sections stay readable on large screens. Use this to wrap the content
 * of any section instead of repeating max-width/margin rules everywhere.
 *
 * Usage: <Container>...</Container>
 *        <Container width="narrow">...</Container>
 */
export default function Container({ children, width = "default", className = "" }) {
  const widthClass = width === "narrow" ? styles.narrow : styles.default;
  return <div className={`${styles.container} ${widthClass} ${className}`.trim()}>{children}</div>;
}
