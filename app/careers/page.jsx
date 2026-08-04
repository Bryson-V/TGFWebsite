import Container from "@/components/ui/Container";
import CareersHero from "@/components/sections/careers/CareersHero";
import JobBoard from "@/components/sections/careers/JobBoard";
import ApplicationSection from "@/components/sections/careers/ApplicationSection";
import styles from "./CareersPage.module.css";
import CareerCategories from "@/components/sections/careers/CareerCategories";

export const metadata = {
  title: "Careers | Todu Guam Foundation",
  description: "Join our healthcare team. Explore open positions, hiring events, and submit your CV.",
};

export default function CareersPage() {
  return (
    <main className={styles.pageWrapper}>
      <CareersHero />
      <JobBoard />
      <CareerCategories />
      <ApplicationSection />
    </main>
  );
}