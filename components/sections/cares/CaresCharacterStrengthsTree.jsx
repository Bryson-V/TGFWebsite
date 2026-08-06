"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { mainCategories } from "@/content/site-data/strengthsData";
import styles from "./CaresCharacterStrengthsTree.module.css";

export default function CaresCharacterStrengthsTree() {
  const [showCategories, setShowCategories] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCenterClick = () => {
    if (showCategories) {
      setShowCategories(false);
      setActiveCategory(null);
    } else {
      setShowCategories(true);
      setActiveCategory(mainCategories[0].id);
    }
  };

  const handleCategoryClick = (catId) => {
    setActiveCategory(activeCategory === catId ? null : catId);
  };

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>The 24 Character Strengths</h2>
          
          <div className={styles.stage}>
            
            {/* Top-Left Branch */}
            <div className={`${styles.branchContainer} ${styles.topLeft}`}>
              <CategoryBranch 
                cat={mainCategories[0]} 
                showCategories={showCategories} 
                activeCategory={activeCategory} 
                onCategoryClick={handleCategoryClick} 
              />
            </div>

            {/* Top-Right Branch */}
            <div className={`${styles.branchContainer} ${styles.topRight}`}>
              <CategoryBranch 
                cat={mainCategories[1]} 
                showCategories={showCategories} 
                activeCategory={activeCategory} 
                onCategoryClick={handleCategoryClick} 
              />
            </div>

            {/* Centered Root Wrapper (Isolates centering from Motion transforms) */}
            <div className={styles.rootWrapper}>
              <motion.button 
                className={styles.rootNode}
                onClick={handleCenterClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle character strengths"
              >
                <div className={styles.rootIconWrapper}>
                  <Image 
                    src="/images/cares/cares-logo-icon.png" 
                    alt="CARES Logo" 
                    width={60} 
                    height={60} 
                    className={styles.rootLogo}
                  />
                </div>
              </motion.button>
            </div>

            {/* Bottom-Left Branch */}
            <div className={`${styles.branchContainer} ${styles.bottomLeft}`}>
              <CategoryBranch 
                cat={mainCategories[2]} 
                showCategories={showCategories} 
                activeCategory={activeCategory} 
                onCategoryClick={handleCategoryClick} 
              />
            </div>

            {/* Bottom-Right Branch */}
            <div className={`${styles.branchContainer} ${styles.bottomRight}`}>
              <CategoryBranch 
                cat={mainCategories[3]} 
                showCategories={showCategories} 
                activeCategory={activeCategory} 
                onCategoryClick={handleCategoryClick} 
              />
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}

function CategoryBranch({ cat, showCategories, activeCategory, onCategoryClick }) {
  const isOpen = activeCategory === cat.id;

  return (
    <div className={styles.nodeWrapper}>
      <AnimatePresence>
        {showCategories && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            style={{ width: "100%", display: "flex", justifyContent: "inherit" }}
          >
            <button
              className={`${styles.categoryButton} ${isOpen ? styles.activeCategoryButton : ""}`}
              style={{ borderColor: cat.color }}
              onClick={() => onCategoryClick(cat.id)}
            >
              <span style={{ color: isOpen ? "#ffffff" : cat.color }} className={styles.categoryButtonText}>
                {cat.name}
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showCategories && isOpen && (
          <motion.div 
            className={styles.strengthsCluster}
            initial={{ opacity: 0, scale: 0.8, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 8 }}
            transition={{ duration: 0.2 }}
          >
            {cat.strengths.map((str, sIdx) => (
              <motion.div 
                key={sIdx} 
                initial={{ opacity: 0, scale: 0.5 }}  
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: sIdx * 0.03 }}
              >
                <Link 
                  href={str.link || "#"}
                  className={styles.strengthBubble}
                  style={{ borderColor: cat.color }}
                >
                  <div className={styles.bubbleCircle} style={{ backgroundColor: `${cat.color}20`, color: cat.color }}>
                    {str.name.charAt(0)}
                  </div>
                  <span className={styles.bubbleText}>{str.name}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}