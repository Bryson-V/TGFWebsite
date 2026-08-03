"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import nav from "@/content/site-data/nav.json";
import Container from "@/components/ui/Container";
import styles from "./Header.module.css";

// Helper component: Uses Next.js Link for internal routes, standard <a> for external ones
function SmartLink({ href, children, className, onClick }) {
  const isExternal = href.startsWith("http://") || href.startsWith("https://");

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);

  // Close menus on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const closeAll = () => {
    setOpenMenu(null);
    setMobileOpen(false);
  };

  function toggleMobileSection(id) {
    setMobileExpanded((current) => (current === id ? null : id));
  }

  return (
    <>
      <header className={styles.header}>
        <Container className={styles.bar}>
          {/* Logo */}
          <Link 
            href="/" 
            className={styles.logoLink} 
            onClick={closeAll} 
            aria-label="Todu Guam Foundation home"
          >
            <div className={styles.logoWrapper}>
              <Image
                src="/images/logo/TGFLogo.png"
                alt="Todu Guam Foundation"
                fill
                sizes="(max-width: 768px) 140px, 180px"
                priority
                className={styles.logoImg}
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.desktopNav} aria-label="Primary">
            {nav.menus.map((menu) => (
              <div
                key={menu.id}
                className={styles.navItem}
                onMouseEnter={() => setOpenMenu(menu.id)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  type="button"
                  className={`${styles.navButton} ${openMenu === menu.id ? styles.activeButton : ""}`}
                  aria-expanded={openMenu === menu.id}
                  onClick={() => setOpenMenu(openMenu === menu.id ? null : menu.id)}
                >
                  {menu.label}
                  <span className={styles.caret}>▾</span>
                </button>

                {openMenu === menu.id && (
                  <div className={`${styles.megaPanel} ${!menu.featuredImage ? styles.megaPanelNoImage : ""}`}>
                    <div className={styles.megaPanelText}>
                      <h3>{menu.panelTitle}</h3>
                      <p>{menu.panelSubtitle}</p>
                      <ul>
                        {menu.links.map((link) => (
                          <li key={link.label}>
                            <SmartLink href={link.href} onClick={closeAll}>
                              {link.label}
                            </SmartLink>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {menu.featuredImage && (
                      <SmartLink
                        href={menu.featuredHref}
                        className={styles.megaPanelFeature}
                        onClick={closeAll}
                      >
                        <div className={styles.featureImgWrapper}>
                          <Image
                            src={menu.featuredImage}
                            alt={menu.featuredCaption}
                            width={240}
                            height={140}
                            style={{ objectFit: "cover", width: "100%", height: "auto" }}
                          />
                        </div>
                        <span>{menu.featuredCaption} →</span>
                      </SmartLink>
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Action Button */}
          <SmartLink href={nav.donateButton.href} className={styles.donateButton}>
            {nav.donateButton.label}
          </SmartLink>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerActive : ""}`}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </Container>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <nav className={styles.mobileNav} aria-label="Primary mobile">
            {nav.menus.map((menu) => (
              <div key={menu.id} className={styles.mobileSection}>
                <button
                  type="button"
                  className={styles.mobileSectionToggle}
                  aria-expanded={mobileExpanded === menu.id}
                  onClick={() => toggleMobileSection(menu.id)}
                >
                  <span>{menu.label}</span>
                  <span>{mobileExpanded === menu.id ? "−" : "+"}</span>
                </button>
                {mobileExpanded === menu.id && (
                  <ul className={styles.mobileLinks}>
                    {menu.links.map((link) => (
                      <li key={link.label}>
                        <SmartLink href={link.href} onClick={closeAll}>
                          {link.label}
                        </SmartLink>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <SmartLink
              href={nav.donateButton.href}
              className={styles.mobileDonate}
              onClick={closeAll}
            >
              {nav.donateButton.label}
            </SmartLink>
          </nav>
        )}
      </header>

      {/* Backdrop overlay for focus */}
      {(openMenu || mobileOpen) && (
        <div className={styles.backdrop} onClick={closeAll} />
      )}
    </>
  );
}