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
          <span className={styles.subTag}>SECTION 1</span>
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

        {/* Layout Grid */}
        <div className={styles.grid}>
          <div className={styles.cardsColumn}>
            <AnimatePresence mode="popLayout">
              {filteredItems.map((vac) => (
                <motion.div
                  key={vac.id}
                  className={styles.card}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className={styles.cardTitle}>{vac.title}</h3>
                  <p className={styles.cardDesc}>{vac.description}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Hidden on Mobile via CSS */}
          {imageSrc && (
            <div className={styles.imageColumn}>
              <div className={styles.imageWrapper}>
                <Image
                  src={imageSrc}
                  alt="Vaccination Care"
                  fill
                  className={styles.img}
                  sizes="(max-width: 900px) 100vw, 440px"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}