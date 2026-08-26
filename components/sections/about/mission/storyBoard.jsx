"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import styles from './storyBoard.module.css';
import { getAssetPath } from '@/lib/utils.js';
import { FaChevronDown } from "react-icons/fa6";

const SLOGAN_TOKENS = [
  { word: "Getting", seq: 0 },
  { word: "Guam", seq: 1 },
  { word: "Healthy", seq: 2 },
  { word: "—", seq: 3, addNewLine: true },
  { word: "One", seq: 4 },
  { word: "Man,", seq: 5 },
  { word: "One", seq: 6 },
  { word: "Woman,", seq: 7 },
  { word: "One", seq: 8 },
  { word: "Child,", seq: 9 },
  { word: "at", seq: 10 },
  { word: "a", seq: 10 },
  { word: "time.", seq: 10 },
];

const SLOGAN_START = 0.045;
const SLOGAN_END = 0.40;   
const STEP = (SLOGAN_END - SLOGAN_START) / 11;

const SloganWord = ({ token, progress }) => {
  const wordIn = SLOGAN_START + (token.seq * STEP);
  const wordOn = wordIn + (STEP * 0.4);

  const opacity = useTransform(
    progress, 
    [wordIn - 0.01, wordIn, wordOn, SLOGAN_END, SLOGAN_END + 0.05], 
    [0, 0, 1, 1, 0] 
  );
  const y = useTransform(progress, [wordIn, wordOn], ["50%", "0%"]);
  const filter = useTransform(progress, [wordIn, wordOn], ["blur(10px)", "blur(0px)"]);

  return (
    <motion.span className={styles.word} style={{ opacity, y, filter }}>
      {token.word}
    </motion.span>
  );
};

const SloganBackgrounds = ({ progress }) => {
  const op0 = useTransform(progress, [SLOGAN_START, SLOGAN_START + 2 * STEP, SLOGAN_START + 4 * STEP, SLOGAN_START + 5 * STEP], [0, 1, 1, 0]);
  const op1 = useTransform(progress, [SLOGAN_START + 4 * STEP, SLOGAN_START + 5 * STEP, SLOGAN_START + 6 * STEP, SLOGAN_START + 7 * STEP], [0, 1, 1, 0]);
  const op2 = useTransform(progress, [SLOGAN_START + 6 * STEP, SLOGAN_START + 7 * STEP, SLOGAN_START + 8 * STEP, SLOGAN_START + 9 * STEP], [0, 1, 1, 0]);
  const op3 = useTransform(progress, [SLOGAN_START + 8 * STEP, SLOGAN_START + 9 * STEP, SLOGAN_START + 11 * STEP, SLOGAN_START + 12 * STEP], [0, 1, 1, 0]);

  const mainOpacity = useTransform(progress, [SLOGAN_END, SLOGAN_END + 0.05], [1, 0]);

  return (
    <motion.div className={styles.sloganBgContainer} style={{ opacity: mainOpacity }}>
      <motion.img style={{ opacity: op0 }} className={styles.sloganBgImage} src={getAssetPath("/images/AboutUs/mission/Beach.jpg")} alt="Getting Guam Healthy" />
      <motion.img style={{ opacity: op1 }} className={styles.sloganBgImage} src={getAssetPath("/images/AboutUs/mission/outreach-growth.webp")} alt="Man" />
      <motion.img style={{ opacity: op2 }} className={styles.sloganBgImage} src={getAssetPath("/images/AboutUs/mission/womens-health-care.jpeg")} alt="Woman" />
      <motion.img style={{ opacity: op3 }} className={styles.sloganBgImage} src={getAssetPath("/images/AboutUs/mission/ZeroDown.jpg")} alt="Child" />
      <div className={styles.sloganBgOverlay}></div>
    </motion.div>
  );
};

export default function StoryBoard() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70, damping: 22, mass: 0.4
  });

  const heroOpacity = useTransform(smoothProgress, [0, 0.02, 0.04], [1, 1, 0]);
  const heroY = useTransform(smoothProgress, [0, 0.04], ["0px", "-40px"]);

  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.70, 0.80], [1, 1, 0]);

  const subtitleOpacity = useTransform(
    smoothProgress, 
    [SLOGAN_START, SLOGAN_START + 0.02, SLOGAN_END, SLOGAN_END + 0.05], 
    [0, 1, 1, 0]
  );

  const c1X = useTransform(smoothProgress, [0.45, 0.50, 0.60, 0.65], ["100%", "0vw", "0vw", "-100%"]);
  const c2X = useTransform(smoothProgress, [0.60, 0.65], ["100%", "0vw"]);
  const mvY = useTransform(smoothProgress, [0.75, 0.85, 1.0], ["120%", "0%", "0%"]);
  
  return (
    <div ref={containerRef} className={styles.scrollContainer}>
      <div className={styles.stickyWrapper}>

        {/* HERO PHASE (Scene 1) */}
        <motion.div 
          className={styles.heroContainer} 
          style={{ opacity: heroOpacity, y: heroY }}
        >
          <div className={styles.heroContent}>
            <span className={styles.heroTagline}>MISSION & VISION</span>
            <h1 className={styles.heroHeadline}>Championing Health Equity for Guam</h1>
            <p className={styles.heroDescription}>
              To achieve health equity across Guam and the Micronesian region — breaking down barriers, delivering compassionate care, and reducing disparities through mobile clinics, preventative programs, and local specialty care.
            </p>
          </div>
        </motion.div>

        {/* SLOGAN PHASE WITH BACKGROUND IMAGES (Scene 2) */}
        <SloganBackgrounds progress={smoothProgress} />
        <div className={styles.sloganContainer}>
          <motion.span 
            className={styles.sloganSubtitle} 
            style={{ opacity: subtitleOpacity }}
          >
            TODU GUAM FOUNDATION · OUR SLOGAN
          </motion.span>

          {SLOGAN_TOKENS.map((token, i) => (
            <React.Fragment key={i}>
              <SloganWord token={token} progress={smoothProgress} />
              {token.addNewLine && <div className={styles.lineBreak} />}
            </React.Fragment>
          ))}
        </div>

        {/* VIDEO CARD 1 (Scene 3) */}
        <motion.div className={styles.cardWrapper} style={{ x: c1X, zIndex: 15 }}>
          <div className={styles.videoCard}>
            <div className={styles.videoContainer}>
              <video autoPlay loop muted playsInline className={styles.video} src={getAssetPath("/videos/BoxShot.mov")} />
            </div>
            <div className={styles.cardText}>
              <span className={styles.sceneTag}>SCENE 1</span>
              <h2>Loading the Wellness Wheels</h2>
              <p>Every community visit begins with preparation — packing medical supplies, equipment, and essentials into our mobile clinic before heading out.</p>
            </div>
          </div>
        </motion.div>

        {/* VIDEO CARD 2 (Scene 4) */}
        <motion.div className={styles.cardWrapper} style={{ x: c2X, zIndex: 20 }}>
          <div className={styles.videoCard}>
            <div className={styles.videoContainer}>
              <video autoPlay loop muted playsInline className={styles.video} src={getAssetPath("/videos/TruckLeave.mov")} />
            </div>
            <div className={styles.cardText}>
              <span className={styles.sceneTag}>SCENE 2</span>
              <h2>Rolling out</h2>
              <p>Loaded and ready — our Wellness Wheels van departs, carrying care and hope directly to underserved communities across Guam.</p>
            </div>
          </div>
        </motion.div>

        <motion.div className={styles.scrollIndicator} 
          style={{ opacity: indicatorOpacity, zIndex: 100 }}
          initial={{ opacity: 1 }}
        >
          <div className={styles.scrollIcon}>
            <FaChevronDown size={12} />
          </div>
          <span>SCROLL TO CONTINUE</span>
        </motion.div>

        {/* MISSION & VISION (Scene 5 - Final) */}
        <motion.div className={styles.missionVisionPanel} style={{ y: mvY, zIndex: 30 }}>
          <div className={styles.waveContainer}>
            <svg className={styles.waveSvg} viewBox="0 0 2400 120" preserveAspectRatio="none">
              <path d="M0,60 C300,120 300,0 600,60 C900,120 900,0 1200,60 C1500,120 1500,0 1800,60 C2100,120 2100,0 2400,60 L2400,120 L0,120 Z" fill="#00a4c5" />
            </svg>
          </div>
          <h1>TODU GUAM FOUNDATION</h1>
          <div className={styles.fishContainer}>
            <motion.div className={`${styles.fishCard} ${styles.fishMission}`}>
              <h2>Our Mission</h2>
              <p>To deliver vital primary healthcare, education, and support to the community — providing access to care for the uninsured, underinsured, and medically underserved populations.</p>
            </motion.div>
            <motion.div className={`${styles.fishCard} ${styles.fishVision}`}>
              <h2>Our Vision</h2>
              <p>To achieve health equity across Guam and the Micronesian region — breaking down barriers, delivering compassionate care, and reducing disparities through mobile clinics.</p>
            </motion.div>
            <motion.div className={`${styles.fishCard} ${styles.fishCta}`}>
              <h2>Make an Impact</h2>
              <p>Join our movement today. Be part of the change in our community.</p>
              <div className={styles.fishActions}>
                <a href="volunteer" className={styles.fishBtn}>Volunteer</a>
                <a href="../donate" className={styles.fishBtn}>Donate</a>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}