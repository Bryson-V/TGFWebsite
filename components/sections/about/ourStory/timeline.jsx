"use client";

import { useRef, useState, useEffect } from "react";
import Image from '@/components/ui/Image';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
  useMotionValue,
} from "framer-motion";
import Container from "@/components/ui/Container";
import styles from "./timeline.module.css";

import timelineEvents from "@/content/site-data/timelineEvents.json";

function TimelineItem({
  event,
  index,
  eventThreshold,
  progressValue,
  hasReachedEnd,
  itemRef,
}) {
  const isEven = index % 2 === 0;

  const calcNodeScale = useTransform(
    progressValue,
    [eventThreshold - 0.01, eventThreshold],
    [0, 1],
    { clamp: true }
  );
  const calcNodeOpacity = useTransform(
    progressValue,
    [eventThreshold - 0.01, eventThreshold],
    [0, 1],
    { clamp: true }
  );
  const calcBranchScaleX = useTransform(
    progressValue,
    [eventThreshold, eventThreshold + 0.02],
    [0, 1],
    { clamp: true }
  );
  const calcCardOpacity = useTransform(
    progressValue,
    [eventThreshold + 0.005, eventThreshold + 0.03],
    [0, 1],
    { clamp: true }
  );
  const calcCardScale = useTransform(
    progressValue,
    [eventThreshold + 0.005, eventThreshold + 0.03],
    [0.95, 1],
    { clamp: true }
  );
  const calcCardY = useTransform(
    progressValue,
    [eventThreshold + 0.005, eventThreshold + 0.03],
    [15, 0],
    { clamp: true }
  );

  return (
    <div
      ref={itemRef}
      className={`${styles.timelineItem} ${
        isEven ? styles.itemLeft : styles.itemRight
      }`}
    >
      {/* Grey Preview Node */}
      <div className={styles.previewNode} />

      {/* Blue Active Node */}
      <div className={styles.node}>
        <motion.div
          className={styles.nodeActive}
          style={{
            scale: hasReachedEnd ? 1 : calcNodeScale,
            opacity: hasReachedEnd ? 1 : calcNodeOpacity,
          }}
        />
      </div>

      <motion.div
        className={styles.branch}
        style={{
          scaleX: hasReachedEnd ? 1 : calcBranchScaleX,
        }}
      />

      <motion.div
        className={styles.card}
        style={{
          opacity: hasReachedEnd ? 1 : calcCardOpacity,
          scale: hasReachedEnd ? 1 : calcCardScale,
          y: hasReachedEnd ? 0 : calcCardY,
        }}
      >
        <div className={styles.cardImageWrapper}>
          <Image
            src={event.image}
            alt={event.alt}
            fill
            sizes="(max-width: 768px) 100%, 400px"
            className={styles.image}
          />
        </div>

        <div className={styles.cardBody}>
          <span className={styles.dateBadge}>{event.date}</span>
          <h3 className={styles.cardTitle}>{event.title}</h3>
          <p className={styles.cardDescription}>{event.description}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default function Timeline() {
  const timelineRef = useRef(null);
  const itemRefs = useRef([]);

  const [thresholds, setThresholds] = useState([]);
  const [hasReachedEnd, setHasReachedEnd] = useState(false);
  const maxProgressRef = useRef(0);
  const maxProgressValue = useMotionValue(0);

  useEffect(() => {
    if (!timelineRef.current || itemRefs.current.length === 0) return;

    const measureThresholds = () => {
      const containerHeight =
        timelineRef.current.getBoundingClientRect().height;
      if (!containerHeight) return;

      const calculated = itemRefs.current.map((itemEl) => {
        if (!itemEl) return 0;
        const itemTop = itemEl.offsetTop;
        return itemTop / containerHeight;
      });

      setThresholds(calculated);
    };

    measureThresholds();
    window.addEventListener("resize", measureThresholds);
    return () => window.removeEventListener("resize", measureThresholds);
  }, []);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 60%", "end 60%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 22,
    restDelta: 0.001,
  });

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    if (hasReachedEnd) return;

    if (latest > maxProgressRef.current) {
      maxProgressRef.current = latest;
      maxProgressValue.set(latest);
    }

    if (latest >= 0.999) {
      setHasReachedEnd(true);
      maxProgressValue.set(1);
    }
  });

  const calcTrunkHeight = useTransform(
    maxProgressValue,
    [0, 1],
    ["0%", "100%"],
    { clamp: true }
  );

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.headerWrapper}>
          <h2 className={styles.heading}>Our Growing Impact</h2>
          <div className={styles.underline} />
          <p className={styles.subheading}>
            Watch our roots expand as we continue bringing health equity to Guam.
          </p>
        </div>

        <div className={styles.timeline} ref={timelineRef}>
          <div className={styles.trunkBackground} />

          <motion.div
            className={styles.trunkActive}
            style={{
              height: hasReachedEnd ? "100%" : calcTrunkHeight,
            }}
          />

          <motion.div
            className={styles.scrollMarker}
            style={{
              top: hasReachedEnd ? "100%" : calcTrunkHeight,
            }}
          />

          {timelineEvents.map((event, index) => {
            const eventThreshold =
              thresholds[index] ??
              (timelineEvents.length > 1
                ? index / (timelineEvents.length - 1)
                : 0);

            return (
              <TimelineItem
                key={index}
                event={event}
                index={index}
                eventThreshold={eventThreshold}
                progressValue={maxProgressValue}
                hasReachedEnd={hasReachedEnd}
                itemRef={(el) => (itemRefs.current[index] = el)}
              />
            );
          })}
        </div>

        <div className={styles.ctaWrapper}>
          <motion.div
            className={styles.ctaCard}
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              type: "spring",
              stiffness: 90,
              damping: 16,
            }}
          >
            <span className={styles.ctaTagline}>The Movement Continues</span>
            <h3 className={styles.ctaHeading}>
              This is not where our story ends.
            </h3>
            <p className={styles.ctaText}>
              Join us today to be part of the movement bringing accessible
              healthcare, education, and resilience to every corner of Guam.
            </p>

            <div className={styles.ctaButtonGroup}>
              <a href="volunteer" className={styles.primaryBtn}>
                Get Involved
              </a>
              <a href="../donate" className={styles.secondaryBtn}>
                Support Our Mission
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}