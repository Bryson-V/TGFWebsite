"use client";

import { useRef } from "react";
import Image from '@/components/ui/Image';
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./slidingFeeHero.module.css";

export default function SlidingFeeHero() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

    const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.90]);

    return (
        <section ref={containerRef} className={styles.heroContainer}>

            <div className={styles.topAccentBar} />

            {/* Background Image Container */}
            <motion.div
                className={styles.backgroundImageWrapper}
                style={{ y: backgroundY }}
            >
                <Image
                    src="/images/PatientResources/insurance/InsuranceHero.jpg"
                    alt="Accepted Insurances Background"
                    fill
                    className={styles.bgImage}
                    priority
                />
            </motion.div>

            {/* Dark Green Overlay */}
            <motion.div
                className={styles.greenOverlay}
                style={{ opacity: overlayOpacity }}
            />

            {/* Text Content */}
            <motion.div
                className={styles.content}
                style={{ y: textY, opacity: textOpacity }}
            >
                <h5 className={styles.subtitle}>TODU GUAM FOUNDATION · PATIENT RESOURCES</h5>

                <h1 className={styles.title}>
                    About our<br />
                    <span className={styles.brightText}>Sliding Fee Discount Program</span>
                </h1>

                <p className={styles.description}>
                    We believe everyone deserves great healthcare, no matter what they can afford.
                    <br />Our program helps lower the cost of your visits
                    <br />based on your family size and how much your family makes.
                </p>
            </motion.div>

        </section>
    );
}