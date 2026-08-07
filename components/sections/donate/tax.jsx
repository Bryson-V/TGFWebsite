"use client";

import Container from "@/components/ui/Container";
import styles from "./tax.module.css";

export default function TaxCallout() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.taxCallout}>
            <p>
              Todu Guam Foundation is a 501(c)(3) nonprofit. All donations are tax-deductible to the fullest extent allowed by law. 
              <br />
              <strong>For tax write-off documentation, please send us an email with proof of your donation and we will gladly prepare your receipt.</strong>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}