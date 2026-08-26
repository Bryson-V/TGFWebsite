"use client";

import { useState } from "react";
import styles from "./tmsBreakdown.module.css";

export default function TmsBreakdown() {
  const [flippedCards, setFlippedCards] = useState({});

  const breakdownItems = [
    {
      id: "T",
      letter: "T",
      term: "Transcranial",
      shortDesc: "Through the Skull",
      definition:
        "Works through the skull, acting from the outside to the inside without surgical implantation, anesthesia, or physical invasiveness."
    },
    {
      id: "M",
      letter: "M",
      term: "Magnetic",
      definition:
        "Uses carefully controlled magnetic fields—similar in principle to an MRI—to influence brain cell activity without raw electrical currents."
    },
    {
      id: "S",
      letter: "S",
      term: "Stimulation",
      definition:
        "Produces gentle magnetic pulses that create electrical changes within targeted brain tissue to adjust underactive neural networks."
    }
  ];

  const toggleCard = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleKeyDown = (e, id) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleCard(id);
    }
  };

  return (
    <section className={styles.breakdownContainer}>
      <div className={styles.headerWrapper}>
        <h2 className={styles.sectionTitle}>Breaking Down the Acronym</h2>
        <p className={styles.subtitle}>
          Click on any card below to reveal what the letters in TMS stand for.
        </p>
      </div>

      <div className={styles.grid}>
        {breakdownItems.map((item) => {
          const isFlipped = Boolean(flippedCards[item.id]);

          return (
            <div
              key={item.id}
              className={styles.cardContainer}
              onClick={() => toggleCard(item.id)}
              onKeyDown={(e) => handleKeyDown(e, item.id)}
              tabIndex={0}
              role="button"
              aria-pressed={isFlipped}
              aria-label={`Letter ${item.letter}. Click to ${
                isFlipped ? "hide" : "reveal"
              } details.`}
            >
              <div
                className={`${styles.cardInner} ${
                  isFlipped ? styles.isFlipped : ""
                }`}
              >
                {/* FRONT FACE */}
                <div className={styles.cardFront}>
                  <div className={styles.giantLetter}>{item.letter}</div>
                  <span className={styles.clickPrompt}>
                    <svg
                      className={styles.pointerIcon}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                      />
                    </svg>
                    Click to flip
                  </span>
                </div>

                {/* BACK FACE */}
                <div className={styles.cardBack}>
                  <div className={styles.badge}>{item.letter}</div>
                  <h3 className={styles.cardTitle}>{item.term}</h3>
                  <p className={styles.cardText}>{item.definition}</p>
                  <span className={styles.flipBackHint}>Click to flip back</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}