"use client";

import { useRef } from "react";
import Image from "@/components/ui/Image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiExternalLink, FiSmartphone } from "react-icons/fi";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import styles from "./portalHero.module.css";

export default function PortalHero() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]); 
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.45, 0.85]);

  return (
    <section ref={containerRef} className={styles.heroContainer}>
      
      <div className={styles.topAccentBar} />

      {/* Background Image Container */}
      <motion.div
        className={styles.backgroundImageWrapper}
        style={{ y: backgroundY }}
      >
        <Image 
          src="/images/portal/PatientPortal.jpg" 
          alt="Patient Portal Background" 
          fill
          className={styles.bgImage}
          priority
        />
      </motion.div>

      {/* Cyan Overlay */}
      <motion.div
        className={styles.cyanOverlay}
        style={{ opacity: overlayOpacity }}
      />

      {/* Content Grid */}
      <motion.div 
        className={styles.contentGrid} 
        style={{ y: textY, opacity: textOpacity }} 
      >
        <div className={styles.textContent}>
          <h5 className={styles.subtitle}>TODU GUAM FOUNDATION · PATIENT PORTAL</h5>
          
          <h1 className={styles.title}>
            Patient Portal
          </h1>
          
          <p className={styles.description}>
            Manage your healthcare, appointments, and medical records all in one secure place powered by healow.
          </p>

          <div className={styles.heroActions}>
            <a 
              href="https://mycw188.ecwcloud.com/portal24196/jsp/100mp/login_otp.jsp" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.primaryCta}
            >
              Log In to Patient Portal <FiExternalLink size={18} />
            </a>
          </div>
        </div>

        {/* Mobile App Download Card */}
        <div className={styles.appDownloadCard}>
          <div className={styles.appHeader}>
            <FiSmartphone size={28} className={styles.appIcon} />
            <h3>Take healow on the Go</h3>
          </div>
          <p>Download the free healow app on your mobile device for quick and easy access on the go.</p>
          <div className={styles.storeButtons}>
            <a 
              href="https://apps.apple.com/us/app/healow/id595012291" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.storeBtn}
            >
              <FaApple size={20} />
              <div className={styles.storeBtnText}>
                <span className={styles.storeSub}>Download on the</span>
                <span className={styles.storeMain}>App Store</span>
              </div>
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=com.ecw.healow" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.storeBtn}
            >
              <FaGooglePlay size={18} />
              <div className={styles.storeBtnText}>
                <span className={styles.storeSub}>GET IT ON</span>
                <span className={styles.storeMain}>Google Play</span>
              </div>
            </a>
          </div>
        </div>
      </motion.div>
      
    </section>
  );
}