"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
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

const timelineEvents = [
  {
    date: "August 7, 2016",
    title: "First Mobile Care Clinic Outreach",
    description:
      "Our founder, Senator Dennis G. Rodriguez Jr., organizes the first outreach at Paradise Fitness in Hagåtña. Over 100 patients receive no-cost healthcare services with volunteer medical staff.",
    image: "/images/story/august-2016-outreach.webp",
    alt: "First Mobile Care Clinic outreach at Paradise Fitness",
  },
  {
    date: "Sep 2016 – Feb 2017",
    title: "Expanding Community Outreaches",
    description:
      "The Mobile Care Clinic provides ongoing assistance to Guam's underserved residents through additional community events, reaching over 500 patients.",
    image: "/images/story/community-outreach-2017.webp",
    alt: "Mobile Care Clinic serving community members",
  },
  {
    date: "February 28, 2017",
    title: "Official 501(c)(3) Nonprofit Registration",
    description:
      "Our Board of Directors is officially formed, and Todu Guam Foundation registers as a 501(c)(3) nonprofit organization.",
    image: "/images/story/board-formation-2017.webp",
    alt: "Todu Guam Foundation Board of Directors formation",
  },
  {
    date: "May 15–16, 2017",
    title: "First Health Prevention & Education Event",
    description:
      "Our inaugural lay forum hosts over 200 attendees featuring Dr. Evan Vista (rheumatologist) and Dr. Maria Deanna Ramiscal (dermatologist).",
    image: "/images/story/lay-forum-2017.webp",
    alt: "Health Prevention and Education lay forum event",
  },
  {
    date: "August 19, 2017",
    title: "Dededo Medical Outreach",
    description:
      "Basic healthcare services are delivered to 300 patients during a targeted outreach event at Asahi Abai in Dededo.",
    image: "/images/story/dededo-outreach-2017.webp",
    alt: "Medical outreach at Asahi Abai in Dededo",
  },
  {
    date: "August 20, 2017",
    title: "Health Prevention & Education",
    description: "Over 200 people attend the lay forum featuring Dr. Evan Vista (a rheumatologist) and Dr. Maria Deanna Ramiscal (a dermatologist).",
    image: "/images/story/health-prevention-2017.webp",
    alt: "Health Prevention & Education"

  },
  {
    date: "2017 – 2019",
    title: "Volunteer Growth & Continuous Care",
    description:
      "Medical outreaches expand island-wide. As volunteer recruitment climbs, our organizational capacity grows to serve more families.",
    image: "/images/story/outreach-growth.webp",
    alt: "Todu Guam Foundation volunteers assisting patients",
  },
  {
    date: "2020",
    title: "COVID-19 Patient Navigation & Relief",
    description:
      "In response to the pandemic, we launch our Patient Navigation and Financial Assistance Program, delivering vital goods, medical care, and back-to-school physical vouchers.",
    image: "/images/story/covid-relief-2020.webp",
    alt: "Patient Navigation and Financial Assistance distribution",
  },
  {
    date: "2021",
    title: "Sustained Navigation & Support",
    description:
      "Continued execution of the Patient Navigation and Financial Assistance Program to assist residents experiencing economic and health hardships.",
    image: "/images/story/patient-support-2021.webp",
    alt: "Sustained patient navigation support services",
  },
  {
    date: "2022",
    title: "CARES Movement Launch & 5,000+ Milestone",
    description:
      "We launch the CARES Movement across GDOE schools to foster youth resiliency. Total patients served through the Mobile Care Clinic surpasses 5,000.",
    image: "/images/story/cares-movement-2022.webp",
    alt: "CARES Movement rollout in Guam schools",
  },
];

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
      {/* Blue Node (CSS ::before pseudo-element renders the grey preview dot behind it) */}
      <motion.div
        className={styles.node}
        style={{
          scale: hasReachedEnd ? 1 : calcNodeScale,
          opacity: hasReachedEnd ? 1 : calcNodeOpacity,
        }}
      />

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
            sizes="(max-width: 768px) 100vw, 400px"
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
              <a href="/get-involved" className={styles.primaryBtn}>
                Get Involved
              </a>
              <a href="/donate" className={styles.secondaryBtn}>
                Support Our Mission
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}