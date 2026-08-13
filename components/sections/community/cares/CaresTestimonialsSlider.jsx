"use client";

import { useState, useEffect } from "react";
import Container from "@/components/ui/Container";
import testimonialsData from "@/content/site-data/testimonials.json";
import styles from "./CaresTestimonialsSlider.module.css";

export default function CaresTestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-scroll effect every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const triggerTransition = (newIndex) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsAnimating(false);
    }, 300); // Matches CSS transition duration
  };

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? testimonialsData.length - 1 : currentIndex - 1;
    triggerTransition(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % testimonialsData.length;
    triggerTransition(newIndex);
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.sliderContainer}>
          
          {/* Left Arrow */}
          <button 
            onClick={handlePrev} 
            className={`${styles.arrowButton} ${styles.prevButton}`}
            aria-label="Previous testimonial"
          >
            &#10094;
          </button>

          {/* Testimonial Card with Smooth Fade/Slide Animation */}
          <div className={`${styles.card} ${isAnimating ? styles.fadeOut : styles.fadeIn}`}>
            <p className={styles.quote}>&ldquo;{currentTestimonial.quote}&rdquo;</p>
            <div className={styles.authorBlock}>
              <span className={styles.author}>{currentTestimonial.author}</span>
              <span className={styles.role}>{currentTestimonial.role}</span>
            </div>
          </div>

          {/* Right Arrow */}
          <button 
            onClick={handleNext} 
            className={`${styles.arrowButton} ${styles.nextButton}`}
            aria-label="Next testimonial"
          >
            &#10095;
          </button>

        </div>

        {/* Pagination Dots */}
        <div className={styles.dotsContainer}>
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => triggerTransition(index)}
              className={`${styles.dot} ${currentIndex === index ? styles.activeDot : ""}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}