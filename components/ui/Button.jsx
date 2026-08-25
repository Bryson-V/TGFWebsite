import Link from "next/link";
import styles from "./Button.module.css";

/**
 * Button
 * The site's pill-shaped call-to-action button. Renders as a Next.js
 * <Link> when given an internal href (starts with "/"), or a plain
 * anchor tag for external links, so the browser doesn't do a full
 * page reload when navigating within the site.
 *
 * Usage: <Button href="/donate">Donate</Button>
 *        <Button href="https://example.com" variant="outline">Learn more</Button>
 */
export default function Button({ href, children, variant = "solid", ...props }) {
  const isInternal = href?.startsWith("/");
  const className = `${styles.button} ${variant === "outline" ? styles.outline : styles.solid}`;

  if (isInternal) {
    return (
      <Link href={href} className={className} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={className} rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}
