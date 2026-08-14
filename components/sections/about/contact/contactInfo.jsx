"use client";

import Container from "@/components/ui/Container";
import contactData from "@/content/site-data/contactData.json";
import styles from "./contactInfo.module.css";
import { FiMapPin, FiPhone, FiMessageSquare, FiMail, FiBriefcase } from "react-icons/fi";

const iconMap = {
  "map-pin": FiMapPin,
  "phone": FiPhone,
  "message-square": FiMessageSquare,
  "mail": FiMail,
  "briefcase": FiBriefcase,
};

export default function ContactInfoCards() {
  const { locationCard, emailCard } = contactData;

  const renderIcon = (iconName) => {
    const IconComponent = iconMap[iconName];
    if (!IconComponent) return null;
    return <IconComponent className={styles.svgIcon} size={20} />;
  };

  return (
    <section className={styles.mainSection}>
      <Container>
        <div className={styles.contactGrid}>
          
          {/* Location Card */}
          <div className={styles.infoCard}>
            <h2 className={styles.cardTitle}>{locationCard.title}</h2>
            <p className={styles.cardDescription}>{locationCard.description}</p>

            <div className={styles.contactList}>
              {locationCard.items.map((item) => (
                <div key={item.id} className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    {renderIcon(item.icon)}
                  </div>
                  <div>
                    <span className={styles.itemLabel}>{item.label}</span>
                    {item.isAddress ? (
                      item.href ? (
                        <a
                          href={item.href}
                          target={item.isExternal ? "_blank" : undefined}
                          rel={item.isExternal ? "noopener noreferrer" : undefined}
                          className={styles.itemLink}
                        >
                          {item.value.split('\n').map((line, idx) => (
                            <span key={idx}>
                              {line}
                              {idx === 0 && <br />}
                            </span>
                          ))}
                        </a>
                      ) : (
                        <p className={styles.itemValue}>
                          {item.value.split('\n').map((line, idx) => (
                            <span key={idx}>
                              {line}
                              {idx === 0 && <br />}
                            </span>
                          ))}
                        </p>
                      )
                    ) : (
                      <a
                        href={item.href}
                        target={item.isExternal ? "_blank" : undefined}
                        rel={item.isExternal ? "noopener noreferrer" : undefined}
                        className={styles.itemLink}
                      >
                        {item.value}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Email Directory Card */}
          <div className={styles.infoCard}>
            <h2 className={styles.cardTitle}>{emailCard.title}</h2>
            <p className={styles.cardDescription}>{emailCard.description}</p>

            <div className={styles.contactList}>
              {emailCard.items.map((item) => (
                <div key={item.id} className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    {renderIcon(item.icon)}
                  </div>
                  <div>
                    <span className={styles.itemLabel}>{item.label}</span>
                    <a 
                      href={item.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={styles.itemLink}
                    >
                      {item.value}
                    </a>
                    {item.subtext && (
                      <span className={styles.itemSubtext}>{item.subtext}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}