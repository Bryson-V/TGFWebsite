"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from '@/components/ui/Image';
import Link from "next/link";
import Container from "@/components/ui/Container";
import styles from "./mobileCareHero.module.css";

export default function MobileCareHero() {
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
    <section ref={containerRef} className={styles.heroSection}>
      <motion.div 
        className={styles.bgImageWrapper}
        style={{ y: backgroundY }}
      >
        <Image
          src="/images/CommunityAndImpact/mobileCareClinic/TruckC.jpg"
          alt="Todu Guam Mobile Care Clinic Truck"
          fill
          priority
          className={styles.bgImage}
        />
      </motion.div>

      {/* Animated Overlay */}
      <motion.div 
        className={styles.overlay}
        style={{ opacity: overlayOpacity }}
      />

      {/* Banner Content */}
      <Container>
        <motion.div 
          className={styles.heroContent}
          style={{ y: textY, opacity: textOpacity }} 
        >
          <h1 className={styles.title}>Mobile Care Clinic</h1>
          <p className={styles.subtitle}>
            Our clinic on wheels — bringing free, comprehensive healthcare directly to the communities of Guam that need it most.
          </p>
          
          {/* Link to the Upcoming Events page */}
          <Link href="/upcoming" className={styles.ctaButton}>
            View Upcoming Outreaches
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}