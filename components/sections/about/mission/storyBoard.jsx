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
  { word: "—", seq: 3 },
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

const SLOGAN_END = 0.30; 
const STEP = SLOGAN_END / 11;

const SloganWord = ({ token, progress }) => {
  const wordIn = token.seq * STEP;
  const wordOn = wordIn + (STEP * 0.55);

  const opacity = useTransform(
    progress, 
    [wordIn - 0.02, wordIn, wordOn, SLOGAN_END, SLOGAN_END + 0.05], 
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
  const op0 = useTransform(progress, [0, 2 * STEP, 4 * STEP, 5 * STEP], [0, 1, 1, 0]);
  const op1 = useTransform(progress, [4 * STEP, 5 * STEP, 6 * STEP, 7 * STEP], [0, 1, 1, 0]);
  const op2 = useTransform(progress, [6 * STEP, 7 * STEP, 8 * STEP, 9 * STEP], [0, 1, 1, 0]);
  const op3 = useTransform(progress, [8 * STEP, 9 * STEP, 11 * STEP, 12 * STEP], [0, 1, 1, 0]);

  const mainOpacity = useTransform(progress, [SLOGAN_END, SLOGAN_END + 0.05], [1, 0]);

  return (
    <motion.div className={styles.sloganBgContainer} style={{ opacity: mainOpacity }}>
        <motion.img style={{ opacity: op0 }} className={styles.sloganBgImage} src={getAssetPath("/images/mission/Beach.jpg")} alt="Getting Guam Healthy" />
        <motion.img style={{ opacity: op1 }} className={styles.sloganBgImage} src={getAssetPath("/images/mission/outreach-growth.webp")} alt="Man" />
        <motion.img style={{ opacity: op2 }} className={styles.sloganBgImage} src={getAssetPath("/images/mission/womens-health-care.jpeg")} alt="Woman" />
        <motion.img style={{ opacity: op3 }} className={styles.sloganBgImage} src={getAssetPath("/images/mission/ZeroDown.jpg")} alt="Child" />
      <div className={styles.sloganBgOverlay}></div>
    </motion.div>
  );
}

export default function StoryBoard() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70, damping: 22, mass: 0.4
  });

  const indicatorOpacity = useTransform(smoothProgress, [0.25, 0.35, 0.70, 0.80], [0, 1, 1, 0]);

  const c1X = useTransform(smoothProgress, [0.30, 0.40, 0.55, 0.65], ["100vw", "0vw", "0vw", "-100vw"]);
  const c2X = useTransform(smoothProgress, [0.55, 0.65], ["100vw", "0vw"]);
  const mvY = useTransform(smoothProgress, [0.80, 0.90], ["100%", "0%"]);

  return (
    <div ref={containerRef} className={styles.scrollContainer}>
      <div className={styles.stickyWrapper}>

        {/* SLOGAN PHASE */}
        <SloganBackgrounds progress={smoothProgress} />
        <div className={styles.sloganContainer}>
          {SLOGAN_TOKENS.map((token, i) => (
            <SloganWord key={i} token={token} progress={smoothProgress} />
          ))}
        </div>

        {/* VIDEO CARD 1 */}
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

        {/* VIDEO CARD 2 */}
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

        <motion.div className={styles.scrollIndicator} style={{ opacity: indicatorOpacity }}>
          <div className={styles.scrollIcon}>
            <FaChevronDown size={12} />
          </div>
          <span>SCROLL TO CONTINUE</span>
        </motion.div>

        {/* MISSION & VISION */}
        <motion.div className={styles.missionVisionPanel} style={{ y: mvY, zIndex: 30 }}>
          <h1>TODU GUAM FOUNDATION</h1>
          <div className={styles.mvCardContainer}>
            <div className={styles.mvCard}>
              <h2>Our Mission</h2>
              <p>To deliver vital primary healthcare, education, and support to the community — providing access to care for the uninsured, underinsured, and medically underserved populations of Guam and the Micronesian region.</p>
            </div>
            <div className={styles.mvCard}>
              <h2>Our Vision</h2>
              <p>To achieve health equity across Guam and the Micronesian region — breaking down barriers, delivering compassionate care, and reducing disparities through mobile clinics, preventative programs, and local specialty care.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}