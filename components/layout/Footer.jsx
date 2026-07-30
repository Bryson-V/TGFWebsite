import Image from "next/image";
import Link from "next/link";
import footer from "@/content/site-data/footer.json";
import Container from "@/components/ui/Container";
import styles from "./Footer.module.css";

/**
 * Footer
 * All footer content (address, phone numbers, link columns, social links,
 * legal links, copyright text) lives in content/site-data/footer.json.
 * Edit that file to update footer content without touching this component.
 */
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/">
              <Image
                src="/images/logo/tgf-footer-logo.jpg"
                alt="Todu Guam Foundation"
                width={140}
                height={110}
              />
            </Link>
            <p className={styles.tagline}>{footer.tagline}</p>
            <ul className={styles.contact}>
              <li>{footer.address}</li>
              {footer.phones.map((phone) =>
                phone.href ? (
                  <li key={phone.display}>
                    <a href={phone.href}>{phone.display}</a>
                  </li>
                ) : (
                  <li key={phone.display}>{phone.display}</li>
                )
              )}
            </ul>
          </div>

          {footer.columns.map((column) => (
            <div key={column.title} className={styles.column}>
              <h4>{column.title}</h4>
              <ul>
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.href ? <a href={link.href}>{link.label}</a> : <span>{link.label}</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className={styles.column}>
            <h4>Follow us for more updates</h4>
            <ul className={styles.social}>
              {footer.social.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>{footer.copyright}</p>
          <ul className={styles.legal}>
            {footer.legal.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
