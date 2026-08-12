"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { getAssetPath } from "@/lib/utils"; // 1. Import helper function
import styles from "./pastEvents.module.css";
import events from "@/content/site-data/pastEvents.json"; 

export default function PastEvents() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); 

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50; 
    if (info.offset.x < -swipeThreshold) {
      handleNext();
    } else if (info.offset.x > swipeThreshold) {
      handlePrev();
    }
  };

  // Card animation (slides normally)
  const slideVariants = {
    hidden: (direction) => ({
      x: direction > 0 ? 400 : -400,
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, type: "spring", bounce: 0.2 }
    },
    exit: (direction) => ({
      x: direction > 0 ? -400 : 400,
      opacity: 0,
      transition: { duration: 0.3 }
    })
  };

  const imageVariants = {
    hidden: (direction) => ({
      x: direction > 0 ? -150 : 150,
      scale: 1.15,
    }),
    visible: {
      x: 0,
      scale: 1.15, 
      transition: { duration: 0.4, type: "spring", bounce: 0.2 }
    },
    exit: (direction) => ({
      x: direction > 0 ? 150 : -150,
      scale: 1.15,
      transition: { duration: 0.3 }
    })
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <h4 className={styles.subtitle}>HISTORY</h4>
          <h2 className={styles.mainTitle}>Past Forum Events</h2>
          <p className={styles.headerDesc}>
            Swipe or use arrows to view our past community education outreaches.
          </p>
        </div>

        <div className={styles.galleryWrapper}>
          
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              drag="x" 
              dragConstraints={{ left: 0, right: 0 }} 
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              className={styles.slideCard}
            >
              
              <div className={styles.imageColumn}>
                {/* 2. Wrap image path with getAssetPath() */}
                <motion.img 
                  custom={direction}
                  variants={imageVariants}
                  src={getAssetPath(events[currentIndex].image)} 
                  alt={events[currentIndex].title}
                  className={styles.image}
                  draggable="false" 
                />
                <div className={styles.dragHint}>← Drag to navigate →</div>
              </div>

              <div className={styles.textColumn}>
                <span className={styles.dateBadge}>{events[currentIndex].date}</span>
                <h3 className={styles.eventTitle}>{events[currentIndex].title}</h3>
                <p className={styles.speaker}>{events[currentIndex].speaker}</p>
                
                <div className={styles.topicBox}>
                  <strong>Topic:</strong> {events[currentIndex].topic}
                </div>
                
                <p className={styles.description}>
                  {events[currentIndex].description}
                </p>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className={styles.controls}>
            <button onClick={handlePrev} className={styles.arrowButton}>
              <FaChevronLeft />
            </button>
            <div className={styles.dots}>
              {events.map((_, index) => (
                <button 
                  key={index} 
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`${styles.dot} ${currentIndex === index ? styles.activeDot : ""}`}
                />
              ))}
            </div>
            <button onClick={handleNext} className={styles.arrowButton}>
              <FaChevronRight />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}