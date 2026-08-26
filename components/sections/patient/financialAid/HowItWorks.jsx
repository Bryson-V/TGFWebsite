"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import styles from "./HowItWorks.module.css";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Check Eligibility",
      description: "Review income guidelines, residency requirements, and see if you qualify for local programs like MIP, Medicaid, or our Sliding Fee Scale."
    },
    {
      number: "02",
      title: "Connect with a Navigator",
      description: "Schedule a one-on-one consultation online or visit our team directly for compassionate, personalized guidance."
    },
    {
      number: "03",
      title: "Document Verification",
      description: "Work hand-in-hand with your navigator to compile, check, and submit all necessary paperwork seamlessly."
    },
    {
      number: "04",
      title: "Receive Care",
      description: "Finalize your coverage or discounted rate and get continuous, low-cost or free access to clinic visits."
    }
  ];

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.headingWrapper}>
          <SectionHeading title="How Financial Navigation Works" align="center" />
        </div>
        <div className={styles.grid}>
          {steps.map((step, index) => (
            <div key={index} className={styles.card}>
              <span className={styles.stepNumber}>{step.number}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}