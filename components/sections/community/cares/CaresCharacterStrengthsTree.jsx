"use client";

import { useState, useEffect } from "react";
import Image from "@/components/ui/Image";
import { getAssetPath } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaShieldAlt, FaMountain, FaCheckCircle, FaBolt,
  FaHeart, FaGift, FaComments, FaSpa, FaThumbsUp,
  FaStar, FaSmileBeam, FaWater, FaTachometerAlt,
  FaTasks, FaLink, FaHandshake, FaUserShield,
  FaBalanceScale, FaFlag, FaEye, FaBookOpen,
  FaPaperPlane, FaSearch, FaPalette, FaArrowLeft
} from "react-icons/fa";
import styles from "./CaresCharacterStrengthsTree.module.css";
import treeData from "@/content/site-data/characterStrengths.json";

const iconMap = {
  FaShieldAlt, FaMountain, FaCheckCircle, FaBolt,
  FaHeart, FaGift, FaComments, FaSpa, FaThumbsUp,
  FaStar, FaSmileBeam, FaWater, FaTachometerAlt,
  FaTasks, FaLink, FaHandshake, FaUserShield,
  FaBalanceScale, FaFlag, FaEye, FaBookOpen,
  FaPaperPlane, FaSearch, FaPalette
};

const SPRING_TRANSITION = { type: "spring", damping: 25, stiffness: 80 };
const EXIT_TRANSITION = { duration: 0.3, ease: "easeInOut" };

const getRelativeSubBranchPos = (index, total) => {
  const radius = 420;

  let startAngle = -150;
  let endAngle = -30;

  if (total === 1) {
    startAngle = -90; endAngle = -90;
  } else if (total === 2) {
    startAngle = -120; endAngle = -60;
  } else if (total === 3) {
    startAngle = -135; endAngle = -45;
  }

  const angleStep = total > 1 ? (endAngle - startAngle) / (total - 1) : 0;
  const angleDeg = startAngle + index * angleStep;
  const angleRad = (angleDeg * Math.PI) / 180;

  return {
    x: radius * Math.cos(angleRad),
    y: radius * Math.sin(angleRad)
  };
};

export default function CaresCharacterStrengthsTree() {
  const [selectedBranch, setSelectedBranch] = useState(null);

  const handleBranchClick = (branch) => {
    if (branch.subBranches && branch.subBranches.length > 0) {
      setSelectedBranch(branch);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerCard}>
          <div className={styles.badge}>Explore</div>
          <h2 className={styles.title}>The 24 Character Strengths</h2>
          <p className={styles.subtitle}>Click on the categories below to learn more about each strength.</p>
        </div>

        <div className={styles.treeWrapper} style={{ position: 'relative' }}>

          <AnimatePresence>
            {selectedBranch && (
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onClick={() => setSelectedBranch(null)}
                style={{
                  position: 'absolute', top: '15px', left: '15px', zIndex: 10,
                  padding: '10px 24px', background: '#042F2E',
                  color: 'white', border: '2px solid #00A89E', borderRadius: '30px',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px',
                  fontSize: '18px', fontWeight: 'bold'
                }}
              >
                <FaArrowLeft /> Back
              </motion.button>
            )}
          </AnimatePresence>

          <svg viewBox="0 0 1000 900" className={styles.treeSvg} xmlns="http://www.w3.org/2000/svg">

            <defs>
              <clipPath id="logoClip">
                <circle cx="500" cy="430" r="50" />
              </clipPath>
            </defs>

            <rect
              x="0" y="0" width="1000" height="900"
              fill="transparent"
              onClick={() => selectedBranch && setSelectedBranch(null)}
              style={{ pointerEvents: selectedBranch ? 'all' : 'none' }}
            />

            <motion.g
              className={styles.branchLines}
              animate={{ opacity: selectedBranch ? 0 : 1 }}
              transition={{ 
                duration: selectedBranch ? 0.2 : 0.8, 
                delay: selectedBranch ? 0 : 0.3 
              }}
              style={{ pointerEvents: 'none' }}
            >
              {treeData.mainBranches.map((branch) => (
                <path
                  key={`line-${branch.id}`}
                  d={`M500,430 L${branch.x},${branch.y}`}
                  className={styles.mainLine}
                  stroke={branch.bgColor}
                />
              ))}
            </motion.g>

            <motion.g
              className={styles.centralLogo}
              initial={{ opacity: 1, scale: 1 }}
              animate={{
                opacity: selectedBranch ? 0 : 1,
                scale: selectedBranch ? 0.8 : 1,
              }}
              transition={SPRING_TRANSITION}
              style={{ pointerEvents: 'none' }}
            >
              <circle cx="500" cy="430" r="65" fill="#00A89E" stroke="#042F2E" strokeWidth="4" />

              <foreignObject x="450" y="380" width="100" height="100" clipPath="url(#logoClip)">
                <Image
                  src="/images/CommunityAndImpact/cares/cares-thumb.jpeg"
                  alt="CARES Logo"
                  width={100}
                  height={100}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </foreignObject>
            </motion.g>

            <g className={styles.bubbles}>
              {treeData.mainBranches.map((branch) => {
                const isSelected = selectedBranch?.id === branch.id;
                const isHidden = selectedBranch && !isSelected;

                const targetX = isSelected ? 500 : branch.x;
                const targetY = isSelected ? 850 : branch.y;
                const targetRadius = isSelected ? 260 : branch.radius;

                return (
                  <motion.g
                    key={branch.id}
                    initial={{ x: branch.x, y: branch.y, scale: 1, opacity: 1, filter: "drop-shadow(0px 0px 0px rgba(0,0,0,0))" }}
                    animate={{
                      x: targetX,
                      y: targetY,
                      opacity: isHidden ? 0 : 1,
                      scale: isHidden ? 0.85 : 1,
                      filter: "drop-shadow(0px 0px 0px rgba(0,0,0,0))"
                    }}
                    transition={SPRING_TRANSITION}
                    onClick={() => !selectedBranch && handleBranchClick(branch)}
                    whileHover={!selectedBranch ? {
                      scale: 1.05,
                      filter: `drop-shadow(0px 0px 16px ${branch.color})`
                    } : undefined}
                    style={{
                      pointerEvents: isHidden ? 'none' : 'auto',
                      cursor: isSelected ? "default" : "pointer"
                    }}
                  >

                    <AnimatePresence>
                      {isSelected && branch.subBranches.map((sub, i) => {
                        const total = branch.subBranches.length;
                        const pos = getRelativeSubBranchPos(i, total);
                        return (
                          <motion.path
                            key={`zoom-line-${sub.id}`}
                            d={`M0,0 L${pos.x},${pos.y}`}
                            stroke={branch.bgColor}
                            strokeWidth="4"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1, transition: SPRING_TRANSITION }}
                            exit={{ pathLength: 0, opacity: 0, transition: EXIT_TRANSITION }}
                          />
                        );
                      })}
                    </AnimatePresence>

                    <motion.circle
                      cx="0" cy="0"
                      initial={{ r: branch.radius }}
                      animate={{ r: targetRadius }}
                      transition={SPRING_TRANSITION}
                      fill={branch.color}
                      stroke={branch.bgColor}
                      strokeWidth={isSelected ? "8" : "4"}
                    />

                    <text
                      x="0"
                      y={isSelected ? -150 : 0}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fill={branch.bgColor}
                      fontSize={isSelected ? "36px" : "16px"}
                      fontWeight="800"
                      style={{ transition: "all 0.5s ease" }}
                    >
                      {branch.label}
                    </text>

                    <AnimatePresence>
                      {isSelected && branch.subBranches.map((sub, i) => {
                        const total = branch.subBranches.length;
                        const pos = getRelativeSubBranchPos(i, total);
                        const IconComponent = iconMap[sub.icon];

                        return (
                          <motion.a
                            key={`zoom-sub-${sub.id}`}
                            href={getAssetPath(sub.link)}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                            animate={{
                              x: pos.x, y: pos.y, scale: 1, opacity: 1,
                              transition: SPRING_TRANSITION
                            }}
                            exit={{ x: 0, y: 0, scale: 0, opacity: 0, transition: EXIT_TRANSITION }}
                            whileHover={{
                              scale: 1.15,
                              filter: `drop-shadow(0px 0px 14px ${branch.color})`
                            }}
                            style={{ cursor: "pointer" }}
                          >
                            <circle cx="0" cy="0" r="55" fill={branch.color} stroke={branch.bgColor} strokeWidth="5" />

                            <foreignObject x="-30" y="-35" width="60" height="60">
                              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                {IconComponent && <IconComponent color={branch.bgColor} size={32} />}
                              </div>
                            </foreignObject>

                            <text x="0" y="-75" textAnchor="middle" fill={branch.bgColor} fontSize="20px" fontWeight="700">
                              {sub.label}
                            </text>
                          </motion.a>
                        );
                      })}
                    </AnimatePresence>

                  </motion.g>
                );
              })}
            </g>

          </svg>
        </div>
      </div>
    </section>
  );
}