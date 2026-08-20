"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./donateHero.module.css";

// Dynamic base path for GitHub Pages subpath compatibility
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const HERO_IMAGE_SRC = `${basePath}/images/donate/Donate.jpg`;

export default function DonateHero() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.65, 0.95]);

  return (
    <section ref={containerRef} className={styles.heroContainer}>
      {/* Background Image Container with Parallax */}
      <motion.div
        className={styles.backgroundImageWrapper}
        style={{ y: backgroundY }}
      >
        <Image
          src={HERO_IMAGE_SRC}
          alt="Volunteers helping the Guam community"
          fill
          priority
          sizes="100%"
          className={styles.bgImage}
        />
      </motion.div>

      {/* Gradient Overlay */}
      <motion.div
        className={styles.overlay}
        style={{ opacity: overlayOpacity }}
      />

      {/* Centered Text Content */}
      <motion.div
        className={styles.content}
        style={{ y: textY, opacity: textOpacity }}
      >
        <h5 className={styles.subtitle}>TODU GUAM FOUNDATION · MAKE A DIFFERENCE</h5>

        <h1 className={styles.title}>
          Your gift helps<br />
          <span className={styles.brightText}>Guam heal.</span>
        </h1>

        <p className={styles.description}>
          Every donation goes directly to providing free healthcare, education, and support 
          <br />to residents who need it most — one person at a time.
        </p>
      </motion.div>
    </section>
  );
}