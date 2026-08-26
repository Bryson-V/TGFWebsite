"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import styles from "./PatientNavigationGrid.module.css";

export default function PatientNavigationGrid() {
  const assistanceTracks = [
    {
      title: "Medicaid & Medically Indigent Program (MIP)",
      description: (
        <>
          Our navigators guide you step-by-step through local application processes, paperwork requirements, and renewals. Learn more about federal guidelines at <a href="https://www.medicaid.gov/" target="_blank" rel="noopener noreferrer" className={styles.inlineLink}>Medicaid.gov</a>.
        </>
      ),
    },
    {
      title: "Sliding Fee Scale Program",
      description: "Qualified individuals receive adjusted pricing for clinic services. Check out our application guidelines and required proof of income.  *NOTE: Only for care received in the clinic",
    },
    {
        title: "Payment Plan",
        description: "Individuals that receive care in the clinic may be eligible for a monthly payment plan, with no additional fees",
    },
  ];    

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.headingWrapper}>
          <SectionHeading title="Navigation &amp; Financial Assistance Services" align="center" />
        </div>
        <div className={styles.grid}>
          {assistanceTracks.map((track, idx) => (
            <div key={idx} className={styles.card}>
              <h4>{track.title}</h4>
              <p>{track.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}