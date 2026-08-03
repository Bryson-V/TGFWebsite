"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import faqData from "@/content/faqQ&A/faqData.json";
import styles from "./faqAccordion.module.css";

/**
 * FaqAccordion
 * Interactive accordion section allowing users to click a question
 * to toggle the dropdown answer.
 */
export default function FaqAccordion() {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.accordionList}>
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className={`${styles.item} ${isOpen ? styles.open : ""}`}>
                <button
                  type="button"
                  className={styles.questionButton}
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.questionText}>{item.question}</span>
                  <span className={styles.icon}>{isOpen ? "−" : "+"}</span>
                </button>
                <div className={styles.answerWrapper}>
                  <div className={styles.answerContent}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}