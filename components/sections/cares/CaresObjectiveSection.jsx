"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import styles from "./CaresObjectiveSection.module.css";

export default function CaresObjectiveSection() {
  const [scrollRotation, setScrollRotation] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!sectionRef.current || ticking) return;

      ticking = true;
      window.requestAnimationFrame(() => {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate progress smoothly based on element position in viewport
        const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
        
        // Multiply by 360 (or more for faster rotation)
        const currentRotation = progress * 360;
        setScrollRotation(currentRotation);
        
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check on mount to prevent jump

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className={styles.objectiveSection}>
      <Container>
        <div className={styles.wrapper}>
          
          {/* Left Side: Photo with rotating flower */}
          <div className={styles.imageColumn}>
            <div className={styles.photoWrapper}>
              <Image 
                src="/images/cares/objective-staff.jpeg" 
                alt="Todu Guam CARES staff member" 
                width={450} 
                height={500}
                className={styles.staffPhoto}
              />
            </div>
            
            {/* Scroll-rotating flower image */}
            <div 
              className={styles.flowerWrapper}
              style={{ transform: `rotate(${scrollRotation}deg)` }}
            >
              <Image 
                src="/images/cares/flower.jpeg" 
                alt="Rotating decorative flower" 
                width={80} 
                height={80}
                className={styles.flowerImage}
              />
            </div>
          </div>

          {/* Right Side: Objective Info Card */}
          <div className={styles.cardColumn}>
            <div className={styles.infoCard}>
              <span className={styles.cardEyebrow}>Todu Guam CARES Movement</span>
              <h2 className={styles.cardTitle}>CARES Objective</h2>
              <p className={styles.cardDescription}>
                Helping socially marginalized students and families build resilience through the development and use of a needs assessment to maximize our limited resources toward students who require more intensive interventions.
              </p>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}