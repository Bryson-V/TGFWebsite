"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import servicesData from "@/content/site-data/healingServicesData.json";
import styles from "./healingServices.module.css";

export default function HealingServicesModule() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.headerGroup}>
            <h2 className={styles.sectionTitle}>WHAT WE OFFER</h2>
            <div className={styles.titleUnderline} />
          </div>

          <div className={styles.gridContainer}>
            {servicesData.map((service) => (
              <div key={service.id} className={styles.serviceCard}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    width={400}
                    height={260}
                    className={styles.serviceImage}
                  />
                </div>

                <div className={styles.contentBox}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  
                  <div className={styles.textStack}>
                    {service.paragraphs.map((p, idx) => (
                      <p key={idx} className={styles.serviceDescription}>
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}