"use client";

import { useState } from "react";
import { FiRefreshCw } from "react-icons/fi";
import styles from "./tmsBreakdown.module.css";

export default function TmsBreakdown() {
  const [flippedCards, setFlippedCards] = useState({});

  const breakdownItems = [
    {
      id: "T",
      letter: "T",
      term: "Transcranial",
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
                    <FiRefreshCw className={styles.flipIcon} size={16} />
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