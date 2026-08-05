"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import jobsData from "@/content/site-data/jobsData.json";
import styles from "./JobBoard.module.css";

const ArrowIcon = () => (
  <svg className={styles.arrowSvg} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export default function JobBoard() {
  const [filter, setFilter] = useState("all");

  const fixedCategories = [
    { label: "All Categories & Events", value: "all" },
    { label: "Jobs", value: "job" },
    { label: "Outreach & Events", value: "event" },
  ];

  const filteredJobs = filter === "all" 
    ? jobsData 
    : jobsData.filter((item) => 
        item.type?.toLowerCase() === filter || 
        item.category?.toLowerCase() === filter
      );

  const handleClick = (item) => {
    const isEvent = item.type === "event" || item.type === "outreach";

    if (isEvent) {
      window.location.href = item.eventUrl || "/events"; 
      return;
    }

    // Dispatch a custom browser event with the selected job title
    const event = new CustomEvent("selectJobPosition", { detail: item.title });
    window.dispatchEvent(event);

    // Scroll smoothly down to the form
    const applySection = document.getElementById("apply");
    if (applySection) {
      applySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.headerWrapper}>
          <SectionHeading title="Open Positions & Events" align="center" />
          
          <div className={styles.filterContainer}>
            <label htmlFor="category-filter" className={styles.filterLabel}>Filter by:</label>
            <select 
              id="category-filter"
              className={styles.dropdown}
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              {fixedCategories.map((cat, idx) => (
                <option key={idx} value={cat.value}>{cat.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.grid}>
          {filteredJobs.length > 0 ? (
            filteredJobs.map((item, index) => {
              const isEvent = item.type === 'event' || item.type === 'outreach';
              return (
                <div key={index} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <span className={`${styles.badge} ${isEvent ? styles.eventBadge : styles.jobBadge}`}>
                      {item.badge}
                    </span>
                    <span className={styles.category}>{item.category}</span>
                  </div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.description}</p>
                  <div className={styles.cardFooter}>
                    <span className={styles.date}>Date: {item.date}</span>
                    <button 
                      onClick={() => handleClick(item)}
                      className={styles.linkButton}
                    >
                      {isEvent ? 'RSVP / Info' : 'Apply Now'} <ArrowIcon />
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <p className={styles.noResults}>No positions or events found in this category.</p>
          )}
        </div>
      </Container>
    </section>
  );
}