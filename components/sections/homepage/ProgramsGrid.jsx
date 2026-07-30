import programs from "@/content/site-data/programs.json";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProgramCard from "./ProgramCard";
import styles from "./ProgramsGrid.module.css";

/**
 * ProgramsGrid
 * Renders one card per entry in content/site-data/programs.json.
 * To add, remove, or reorder a program, edit that file — this component
 * doesn't need to change.
 */
export default function ProgramsGrid() {
  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading
          align="center"
          title={
            <>
              Together, we are working towards a{" "}
              <span className={styles.accent}>healthier, happier Guam.</span>
            </>
          }
          subtitle="Our mission is to provide access to care for the underserved. Todu Guam's programs aim to provide healthcare and education with no cost to those who need them most."
        />
        <div className={styles.grid}>
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </Container>
    </section>
  );
}
