import Container from "@/components/ui/Container";
import styles from "./accessibilityContent.module.css";

/**
 * AccessibilityContent
 * A single modular text component containing the official accessibility 
 * statement, conformance status, limitations, feedback contacts, and update date.
 */
export default function AccessibilityContent() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <h1 className={styles.pageTitle}>ACCESSIBILITY STATEMENT</h1>
        
        <div className={styles.card}>
          <h2 className={styles.heading}>Accessibility Statement for the Todu Guam Foundation</h2>
          <p className={styles.text}>
            This is an accessibility statement for the official website for the Todu Guam Foundation (TGF).
          </p>

          <h3 className={styles.subheading}>Conformance status</h3>
          <p className={styles.text}>
            The{" "}
            <a 
              href="https://www.w3.org/WAI/standards-guidelines/wcag/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.link}
            >
              Web Content Accessibility Guidelines (WCAG)
            </a>{" "}
            defines requirements for websites to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. TGF’s official website is partially conformant with WCAG 2.1 level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard.
          </p>

          <h3 className={styles.subheading}>Limitations and alternatives</h3>
          <p className={styles.text}>
            Despite our best efforts to ensure accessibility of TGF&apos;s official website, there may be some limitations. Please contact us if you observe an issue.
          </p>

          <h3 className={styles.subheading}>Feedback</h3>
          <p className={styles.text}>
            The Todu Guam Foundation welcomes your feedback on the accessibility of our site. Please let us know if you encounter any accessibility barriers:
          </p>

          <ul className={styles.list}>
            <li>
              <strong>Phone:</strong>{" "}
              <a href="tel:+16716498638" className={styles.link}>+1-671-649-8638</a>
            </li>
            <li>
              <strong>E-mail:</strong>{" "}
              <a href="mailto:peoplefirst@toduguam.com" className={styles.link}>peoplefirst@toduguam.com</a>
            </li>
            <li>
              <strong>Postal address:</strong> 125 Tun Jesus Crisostomo Street, Tamuning, Guam
            </li>
          </ul>

          <p className={styles.text}>
            We will do our best to solve and accommodate any accessibility issues found within our site.
          </p>

          <p className={styles.text}>Thank you!!!</p>

          <p className={styles.signature}>The Todu Guam Foundation</p>

          <div className={styles.footerNote}>
            Last Updated: August 4, 2026
          </div>
        </div>
      </Container>
    </section>
  );
}