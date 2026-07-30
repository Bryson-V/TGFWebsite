"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./StatCounter.module.css";

/**
 * StatCounter
 * Counts up from 0 to `value` once it scrolls into view. Respects
 * prefers-reduced-motion by jumping straight to the final number.
 */
export default function StatCounter({ value, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            if (prefersReducedMotion) {
              setCount(value);
              return;
            }

            const duration = 1400;
            const startTime = performance.now();

            function tick(now) {
              const progress = Math.min((now - startTime) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
              setCount(Math.round(eased * value));
              if (progress < 1) requestAnimationFrame(tick);
            }

            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div className={styles.stat} ref={ref}>
      <span className={styles.value}>{count.toLocaleString("en-US")}</span>
      <p className={styles.label}>{label}</p>
    </div>
  );
}
