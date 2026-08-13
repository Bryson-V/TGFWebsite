"use client";

import { useState } from "react";
import CareersHero from "@/components/sections/community/careers/CareersHero";
import JobBoard from "@/components/sections/community/careers/JobBoard";
import CareerCategories from "@/components/sections/community/careers/CareerCategories";
import ApplicationSection from "@/components/sections/community/careers/ApplicationSection";
import styles from "./CareersPage.module.css";

export default function CareersPage() {
  const [selectedPosition, setSelectedPosition] = useState("");

  const handleSelectPosition = (title) => {
    setSelectedPosition(title);
    
    // Smooth scroll down to the application form
    const applySection = document.getElementById("apply");
    if (applySection) {
      applySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className={styles.pageWrapper}>
      <CareersHero />
      <JobBoard onSelectPosition={handleSelectPosition} />
      <CareerCategories onSelectCategory={handleSelectPosition} />
      <ApplicationSection 
        selectedPosition={selectedPosition} 
        setSelectedPosition={setSelectedPosition} 
      />
    </main>
  );
}