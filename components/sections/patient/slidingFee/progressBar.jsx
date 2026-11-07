"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFileDownload, FaClipboardList, FaInbox, FaArrowRight, FaTimes, FaCheckCircle, FaFileAlt } from 'react-icons/fa';
import styles from './progressBar.module.css';
import progressData from '@/content/site-data/progressData.json';
import checklist from '@/content/site-data/slidingChecklist.json';

const iconMap = {
  FaFileDownload: FaFileDownload,
  FaClipboardList: FaClipboardList,
  FaInbox: FaInbox
};

export default function ProgressBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isModalOpen]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        <motion.div 
          className={styles.stepsContainer}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {progressData.map((step, index) => {
            const Icon = iconMap[step.iconName];
            const isModalAction = step.action === 'openModal';

            // Helper wrapper to render either a Link, a Button, or plain content for the top part
            const StepWrapper = ({ children }) => {
              if (isModalAction) {
                return (
                  <div 
                    onClick={() => setIsModalOpen(true)} 
                    style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}
                  >
                    {children}
                  </div>
                );
              }
              if (step.link) {
                return (
                  <Link 
                    href={step.link} 
                    className={styles.stepClickableWrapper}
                  >
                    {children}
                  </Link>
                );
              }
              return <div className={styles.stepContent}>{children}</div>;
            };

            return (
              <React.Fragment key={step.id}>
                <motion.div className={styles.step} variants={itemVariants}>
                  <StepWrapper>
                    <div className={styles.iconWrapper}>
                      {Icon && <Icon className={styles.icon} />}
                    </div>
                    <h3 className={styles.title}>{step.title}</h3>
                    <p className={styles.description}>{step.description}</p>
                  </StepWrapper>
                  
                  {/* Keep the bottom text link/button visible for clarity */}
                  {isModalAction ? (
                    <button 
                      onClick={() => setIsModalOpen(true)} 
                      className={styles.actionButton}
                    >
                      {step.linkLabel}
                    </button>
                  ) : step.link ? (
                    <Link 
                      href={step.link} 
                      className={styles.pdfLink}
                    >
                      {step.linkLabel}
                    </Link>
                  ) : null}
                </motion.div>

                {index < progressData.length - 1 && (
                  <motion.div className={styles.connector} variants={itemVariants}>
                    <div className={styles.line}></div>
                    <FaArrowRight className={styles.arrowIcon} />
                  </motion.div>
                )}
              </React.Fragment>
            );
          })}
        </motion.div>
      </div>

      {/* The Checklist Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
            <motion.div 
              className={styles.modalContent}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeButton} onClick={() => setIsModalOpen(false)}>
                <FaTimes />
              </button>
              
              <h3 className={styles.modalTitle}>Application Checklist</h3>
              <p className={styles.modalSubtitle}>Everything you need to complete Step 2</p>

              <div className={styles.modalBody}>
                <div className={styles.modalSection}>
                  <h4 className={styles.sectionTitle}>
                    <FaFileAlt className={styles.sectionIcon}/> 
                    1. Income Sources <span style={{fontSize: "0.9rem", color: "#666", fontWeight: "normal"}}>(Provide proof <strong>if applicable</strong>)</span>
                  </h4>
                  <p className={styles.docNote}>Identify if any of these apply to your household:</p>
                  
                  <ul className={styles.checkList} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
                    {checklist.incomeTypes.map((item, index) => (
                      <li key={`income-${index}`} style={{ fontSize: "0.85rem" }}>
                        <FaCheckCircle className={styles.checkIcon} /> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.modalSection}>
                  <h4 className={styles.sectionTitle}>
                    <FaCheckCircle className={styles.sectionIcon}/> 
                    2. Acceptable Proof <span style={{fontSize: "0.9rem", color: "#cf0700", fontWeight: "normal"}}>(<strong>Required</strong> for applicable income)</span>
                  </h4>
                  <p className={styles.docNote}>Attach copies of the following documents to prove the income listed above:</p>
                  <ul className={styles.checkList}>
                    {checklist.acceptableProof.map((item, index) => (
                      <li key={`proof-${index}`}>
                        <FaCheckCircle className={styles.checkIcon} /> 
                        {item.includes('IMPORTANT:') ? (
                          <span>
                            {item.split('(IMPORTANT:')[0]}
                            <strong style={{ color: "#cf0700" }}><br/>(IMPORTANT:{item.split('(IMPORTANT:')[1]}</strong>
                          </span>
                        ) : (
                          item
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}