"use client";

import { useState } from "react";
import JobBoard from "./JobBoard";
import ApplicationSection from "./ApplicationSection";

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
    <>
      <JobBoard onSelectPosition={handleSelectPosition} />
      <ApplicationSection 
        selectedPosition={selectedPosition} 
        setSelectedPosition={setSelectedPosition} 
      />
    </>
  );
}