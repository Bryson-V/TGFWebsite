"use client";

import { useState, useEffect } from "react";
import Image from '@/components/ui/Image';
import Link from "next/link";
import nav from "@/content/site-data/nav.json";
import Container from "@/components/ui/Container";
import styles from "./Header.module.css";

function SmartLink({ href, children, className, onClick }) {
  const isExternal = href?.startsWith("http://") || href?.startsWith("https://");

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
    <Link href={href ? `/${href.replace(/^\//, '')}` : "#"} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);

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

  const actionButtons = nav.actionButtons 
    ? nav.actionButtons 
    : [
        nav.donateButton, 
        nav.reqAppointment
      ].filter(Boolean);

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
                onMouseEnter={() => !menu.href && setOpenMenu(menu.id)}
                onMouseLeave={() => !menu.href && setOpenMenu(null)}
              >
                {menu.href ? (
                  <SmartLink
                    href={menu.href}
                    className={styles.navButton}
                    onClick={closeAll}
                  >
                    {menu.label}
                  </SmartLink>
                ) : (
                  <>
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
                          {menu.panelTitle && <h3>{menu.panelTitle}</h3>}
                          {menu.panelSubtitle && <p>{menu.panelSubtitle}</p>}
                          
                          {menu.links && (
                            <ul>
                              {menu.links.map((link, idx) => (
                                <li key={`${link.label}-${idx}`}>
                                  <SmartLink href={link.href} onClick={closeAll}>
                                    {link.label}
                                  </SmartLink>
                                </li>
                              ))}
                            </ul>
                          )}
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
                                alt={menu.featuredCaption || "Featured section"}
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
                  </>
                )}
              </div>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className={styles.actionButtonsGroup}>
            {actionButtons.map((btn, idx) => (
              <SmartLink 
                key={btn.label || idx} 
                href={btn.href} 
                className={idx === 0 ? styles.donateButton : styles.secondaryActionButton}
                onClick={closeAll}
              >
                {btn.label}
              </SmartLink>
            ))}
          </div>

          {/* Hamburger Menu Button */}
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
                {menu.href ? (
                  <SmartLink
                    href={menu.href}
                    className={styles.mobileSectionToggle}
                    onClick={closeAll}
                  >
                    <span>{menu.label}</span>
                  </SmartLink>
                ) : (
                  <>
                    <button
                      type="button"
                      className={styles.mobileSectionToggle}
                      aria-expanded={mobileExpanded === menu.id}
                      onClick={() => toggleMobileSection(menu.id)}
                    >
                      <span>{menu.label}</span>
                      <span>{mobileExpanded === menu.id ? "−" : "+"}</span>
                    </button>
                    {mobileExpanded === menu.id && menu.links && (
                      <ul className={styles.mobileLinks}>
                        {menu.links.map((link, idx) => (
                          <li key={`${link.label}-${idx}`}>
                            <SmartLink href={link.href} onClick={closeAll}>
                              {link.label}
                            </SmartLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </div>
            ))}

            <div className={styles.mobileActionGroup}>
              {actionButtons.map((btn, idx) => (
                <SmartLink
                  key={btn.label || idx}
                  href={btn.href}
                  className={idx === 0 ? styles.mobileDonate : styles.mobileSecondaryButton}
                  onClick={closeAll}
                >
                  {btn.label}
                </SmartLink>
              ))}
            </div>
          </nav>
        )}
      </header>

      {(openMenu || mobileOpen) && (
        <div className={styles.backdrop} onClick={closeAll} />
      )}
    </>
  );
}