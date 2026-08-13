"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import styles from "./EligibilityQuiz.module.css";

export default function EligibilityQuiz() {
  const [step, setStep] = useState(1);
  const [isResident, setIsResident] = useState(null);
  const [hasCoverage, setHasCoverage] = useState(null);
  const [result, setResult] = useState(null);

  const handleResidentAnswer = (answer) => {
    setIsResident(answer);
    setStep(2);
  };

  const handleCoverageAnswer = (answer) => {
    setHasCoverage(answer);
    // Determine result based on logic
    if (!answer) {
      setResult("Medicaid / MIP & Sliding Fee Scale");
    } else {
      setResult("Sliding Fee Scale (for co-pays & uncovered services)");
    }
    setStep(3);
  };

  const resetQuiz = () => {
    setStep(1);
    setIsResident(null);
    setHasCoverage(null);
    setResult(null);
  };

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.quizWrapper}>
          <SectionHeading title="Find Your Assistance Program" align="center" />
          <p className={styles.subtitle}>Take our quick 2-step survey to see what support matches your situation.</p>

          <div className={styles.card}>
            {step === 1 && (
              <div className={styles.questionStep}>
                <span className={styles.stepIndicator}>Question 1 of 2</span>
                <h3>Are you a current resident of Guam?</h3>
                <div className={styles.buttonGroup}>
                  <button onClick={() => handleResidentAnswer(true)} className={styles.optionButton}>
                    Yes, I live in Guam
                  </button>
                  <button onClick={() => handleResidentAnswer(false)} className={styles.optionButton}>
                    No / Not Sure
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className={styles.questionStep}>
                <span className={styles.stepIndicator}>Question 2 of 2</span>
                <h3>Do you currently have active health insurance coverage (such as private insurance or Stilt/TakeCare)?</h3>
                <div className={styles.buttonGroup}>
                  <button onClick={() => handleCoverageAnswer(true)} className={styles.optionButton}>
                    Yes, I have coverage
                  </button>
                  <button onClick={() => handleCoverageAnswer(false)} className={styles.optionButton}>
                    No, I am uninsured
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className={styles.resultStep}>
                <span className={styles.resultEyebrow}>Recommended Track</span>
                <h3>Based on your answers, you may benefit most from:</h3>
                <div className={styles.resultBadge}>{result}</div>
                <p>
                  Our patient navigators can assist you with paperwork and direct applications. 
                  Connect with us to get started.
                </p>
                <div className={styles.resultActions}>
                  <a href="#apply" className={styles.primaryButton}>Speak with a Navigator</a>
                  <button onClick={resetQuiz} className={styles.secondaryButton}>Retake Quiz</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}