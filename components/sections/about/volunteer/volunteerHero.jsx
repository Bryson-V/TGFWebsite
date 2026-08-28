"use client";

import { useState, useEffect } from "react";
import Image from '@/components/ui/Image';
import Link from "next/link";
import Container from "@/components/ui/Container";
import styles from "./volunteerHero.module.css";

function AnimatedStat({ value, label }) {
  const [count, setCount] = useState(0);

  const numericMatch = value.match(/\d+/);
  const target = numericMatch ? parseInt(numericMatch[0], 10) : 0;
  const suffix = value.replace(/[0-9]/g, ''); 

  useEffect(() => {
    if (target === 0) return;
    
    let start = 0;
    const duration = 1400;
    const increment = target / (duration / 24);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className={styles.stat}>
      <span className={styles.statNumber}>
        {count}{suffix}
      </span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
}

// --- MAIN HERO COMPONENT ---
export default function VolunteerHero() {
  return (
    <section className={styles.heroSection}>
      {/* Background Image */}
      <div className={styles.imageContainer}>
        <Image
          src="/images/AboutUs/volunteer/Hero.jpeg"
          alt="Todu Guam Foundation Volunteers"
          fill
          priority
          className={styles.heroImage}
        />
        <div className={styles.overlay}></div>
      </div>

      <Container className={styles.contentContainer}>
        {/* Left Side: Text Content & CTA */}
        <div className={styles.textContent}>
          <h1 className={styles.title}>
            Be a <span className={styles.accentText}>Volunteer</span>
          </h1>
          <p className={styles.subtitle}>
            Since the beginning, Todu Guam has relied on volunteers who selflessly lend their time and expertise. Join us in getting Guam healthy — one person at a time.
          </p>
          <Link 
            href="https://forms.monday.com/forms/37cb3c07215ccc1525588f4ad4a2d0d9?r=use1" 
            className={styles.ctaButton} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Sign Up to Volunteer
          </Link>
        </div>

        {/* Right Side: Frosted Glass Stats Panel */}
        <div className={styles.statsPanel}>
          <p className={styles.statsEyebrow}>OUR VOLUNTEER IMPACT</p>
          
          <div className={styles.statsGroup}>
            <AnimatedStat value="500+" label="Volunteers served" />
            <AnimatedStat value="18" label="Villages reached" />
            <AnimatedStat value="12K+" label="Hours logged" />
          </div>
        </div>
      </Container>
    </section>
  );
}