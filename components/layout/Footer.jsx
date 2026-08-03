"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import footer from "@/content/site-data/footer.json";
import Container from "@/components/ui/Container";
import styles from "./Footer.module.css";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;

    // TODO: replace with a real call to an email service or API route.
    console.log("Newsletter signup (not yet connected to a backend):", email);

    setStatus("submitted");
    setEmail("");
  }

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.topSection}>
          
          {/* LEFT COLUMN: Brand Info & Socials */}
          <div className={styles.brandCol}>
            <Link href="/">
              <Image
                src="/images/logo/tgf-footer-logo.jpg"
                alt="Todu Guam Foundation"
                width={140}
                height={110}
                className={styles.logoImage}
              />
            </Link>
            
            {/* Updated Tagline */}
            <p className={styles.tagline}>
              Getting Guam Healthy One Man, One Woman, and One Child at a time.
            </p>
            
            {/* Contact Info: Address, Phone, WhatsApp */}
            <div className={styles.contactList}>
              
              {/* Address with Google Maps Link & Icon */}
              <div className={styles.contactItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.contactIcon}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=125+Tun+Jesus+Crisostomo+Street+Tamuning+Guam" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {footer.address}
                </a>
              </div>

              {/* Phone and WhatsApp Logic */}
              {footer.phones.map((phone, index) => {
                const isWhatsApp = index === 1; // 0 is first (Phone), 1 is second (WhatsApp)
                
                const waNumber = phone.display.replace(/\D/g, ''); 
                
                return (
                  <div key={phone.display} className={styles.contactItem}>
                    {isWhatsApp ? (
                      /* WhatsApp Icon */
                      <svg viewBox="0 0 24 24" fill="currentColor" className={styles.contactIcon}>
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                      </svg>
                    ) : (
                      /* Standard Phone Icon */
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.contactIcon}>
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    )}
                    
                    <div className={styles.contactTextStack}>
                      <span className={styles.contactLabel}>{isWhatsApp ? "WhatsApp" : "Phone"}</span>
                      {phone.href ? (
                        <a 
                          href={isWhatsApp ? `https://wa.me/${waNumber}` : phone.href}
                          target={isWhatsApp ? "_blank" : "_self"}
                          rel={isWhatsApp ? "noopener noreferrer" : ""}
                        >
                          {phone.display}
                        </a>
                      ) : (
                        <span>{phone.display}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Modern Social Buttons */}
            <div className={styles.socials}>
              {footer.social.map((s) => {
                let icon;
                let brandClass = ""; 
                
                const label = s.label.toLowerCase();
                if (label.includes("facebook")) {
                  icon = <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>;
                  brandClass = styles.facebook;
                } else if (label.includes("instagram")) {
                  icon = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
                  brandClass = styles.instagram;
                } else if (label.includes("tiktok")) {
                  icon = <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>;
                  brandClass = styles.tiktok;
                } else if (label.includes("linkedin")) {
                  icon = <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>;
                  brandClass = styles.linkedin;
                } else {
                  icon = <span>{s.label[0]}</span>; 
                }

                return (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className={`${styles.socialIcon} ${brandClass}`}>
                    {icon}
                  </a>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: The Navigation Columns & Newsletter */}
          <div className={styles.linksAndNewsletter}>
            
            {/* Dynamic Columns from footer.json */}
            <div className={styles.navColumns}>
              {footer.columns.map((column) => (
                <div key={column.title} className={styles.linkGroup}>
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
            </div>

            {/* Newsletter Card */}
            <div className={styles.newsletterCard}>
              <div className={styles.newsletterText}>
                <h4>Stay Updated</h4>
                <p>Sign up for our newsletter and get updates on what we've been working on.</p>
              </div>
              
              <div className={styles.newsletterAction}>
                {status === "submitted" ? (
                  <p className={styles.thanks}>Thanks for signing up!</p>
                ) : (
                  <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                      type="email"
                      required
                      placeholder="Enter your email*"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={styles.input}
                    />
                    <button type="submit" className={styles.subscribeBtn}>Subscribe</button>
                  </form>
                )}
                <p className={styles.privacy}>
                  *We care about your data. Read our <Link href="/privacy">Privacy Policy</Link>.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM BAR: Copyright & Legal */}
        <div className={styles.bottomBar}>
          <p>{footer.copyright}</p>
          <ul className={styles.legalLinks}>
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