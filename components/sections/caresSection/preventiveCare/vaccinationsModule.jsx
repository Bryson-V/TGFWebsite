"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import vaccinationsData from "@/content/site-data/vaccinations.json";
import styles from "./vaccinationsModule.module.css";

export default function VaccinationsModule({ imageSrc }) {
  const [filter, setFilter] = useState("all");

  const filteredItems = vaccinationsData.filter((item) => {
    if (filter === "all") return true;
    return item.category === filter;
  });

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subTag}>VACCINATION CARE</span>
          <h2 className={styles.title}>Essential Vaccinations</h2>
          <p className={styles.description}>
            Vaccines are essential to protecting both individual health and the surrounding community against preventable illness.
          </p>
        </div>

        {/* Category Filter */}
        <div className={styles.filterGroup}>
          {["all", "adult", "child", "senior"].map((cat) => (
            <button
              key={cat}
              type="button"
              className={`${styles.filterBtn} ${filter === cat ? styles.filterBtnActive : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat === "all" ? "All Vaccines" : `${cat.charAt(0).toUpperCase() + cat.slice(1)} Vaccines`}
            </button>
          ))}
        </div>

        {/* Smooth Grid Container */}
        <div className={styles.cardsGridWrapper}>
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className={styles.cardsGrid}
            >
              {filteredItems.map((vac) => (
                <div key={vac.id} className={styles.card}>
                  <h3 className={styles.cardTitle}>{vac.title}</h3>
                  <p className={styles.cardDesc}>{vac.description}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Optional Banner Image */}
        {imageSrc && (
          <div className={styles.bannerImageWrapper}>
            <Image
              src={imageSrc}
              alt="Vaccination Care"
              fill
              className={styles.img}
              sizes="100vw"
            />
          </div>
        )}
      </div>
    </section>
  );
}