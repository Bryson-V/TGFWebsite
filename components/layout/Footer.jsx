"use client";

import { useState } from "react";
import Image from "@/components/ui/Image";
import Link from "next/link";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTiktok, 
  FaLinkedinIn, 
  FaWhatsapp, 
  FaPhone 
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import footer from "@/content/site-data/footer.json";
import styles from "./Footer.module.css";

function SmartLink({ href, children, className }) {
  const isExternal = href?.startsWith("http://") || href?.startsWith("https://");

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href ? `/${href.replace(/^\//, '')}` : "#"} className={className}>
      {children}
    </Link>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    console.log("Newsletter signup (not yet connected to a backend):", email);
    setStatus("submitted");
    setEmail("");
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
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
          
          <p className={styles.tagline}>
            Getting Guam Healthy One Man, One Woman, and One Child at a time.
          </p>
          
          <div className={styles.contactList}>
            <div className={styles.contactItem}>
              <FaLocationDot className={styles.contactIcon} />
              <a 
                href="https://www.google.com/maps/search/?api=1&query=125+Tun+Jesus+Crisostomo+Street+Tamuning+Guam" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {footer.address}
              </a>
            </div>

            {footer.phones.map((phone, index) => {
              const isWhatsApp = index === 1; 
              const waNumber = phone.display.replace(/\D/g, ""); 
              
              return (
                <div key={phone.display} className={styles.contactItem}>
                  {isWhatsApp ? (
                    <FaWhatsapp className={styles.contactIcon} />
                  ) : (
                    <FaPhone className={styles.contactIcon} />
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
          
          <div className={styles.socials}>
            {footer.social.map((s) => {
              let icon;
              let brandClass = ""; 
              
              const label = s.label.toLowerCase();
              if (label.includes("facebook")) {
                icon = <FaFacebookF />;
                brandClass = styles.facebook;
              } else if (label.includes("instagram")) {
                icon = <FaInstagram />;
                brandClass = styles.instagram;
              } else if (label.includes("tiktok")) {
                icon = <FaTiktok />;
                brandClass = styles.tiktok;
              } else if (label.includes("linkedin")) {
                icon = <FaLinkedinIn />;
                brandClass = styles.linkedin;
              } else {
                icon = <span>{s.label[0]}</span>; 
              }

              return (
                <a 
                  key={s.label} 
                  href={s.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={s.label} 
                  className={`${styles.socialIcon} ${brandClass}`}
                >
                  {icon}
                </a>
              );
            })}
          </div>
        </div>

        <div className={styles.linksAndNewsletter}>
          <div className={styles.navColumns}>
            {footer.columns.map((column) => (
              <div key={column.title} className={styles.linkGroup}>
                <h4>{column.title}</h4>
                <ul>
                  {column.links.map((link) => (
                    <li key={link.label}>
                      {/* 2. REPLACE <a> WITH <SmartLink> */}
                      {link.href ? (
                        <SmartLink href={link.href}>{link.label}</SmartLink>
                      ) : (
                        <span>{link.label}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

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
                *We care about your data. Read our <Link href="/legalTerms/privacy">Privacy Policy</Link>.
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
               {/* 3. REPLACE <a> WITH <SmartLink> */}
              <SmartLink href={item.href}>{item.label}</SmartLink>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}