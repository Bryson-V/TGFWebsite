import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import styles from './outreachInfo.module.css';
import timelineSteps from '@/content/site-data/outreachInfo.json';

const OutreachInfo = () => {
  const getStep = (id) => timelineSteps.find((s) => String(s.id) === id);

  const step1 = getStep('1');
  const step2 = getStep('2');
  const step3A = getStep('3A');
  const step3B = getStep('3B');
  const step4 = getStep('4');

  const renderCard = (step) => {
    if (!step) return null;
    return (
      <div className={`${styles.content} ${step.isWarning ? styles.warningContent : ''}`}>
        <div className={styles.titleContainer}>
          {step.isWarning && <FaExclamationTriangle className={styles.warningIcon} />}
          <h3 className={styles.title}>{step.title}</h3>
        </div>
        <p className={styles.description}>
          {step.isWarning ? <strong>{step.description}</strong> : step.description}
        </p>
      </div>
    );
  };

  return (
    <div className={styles.timelineContainer}>
      <h2 className={styles.header}>Patient Journey & Guidelines</h2>

      <div className={styles.gridContainer}>
        {/* SVG Fork Overlay connecting 2 -> 3A & 3B */}
        <svg className={styles.forkSvg} viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Top branch to 3A */}
          <path
            d="M 0,50 L 30,50 L 70,18 L 100,18"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="3"
            vectorEffect="non-scaling-stroke"
          />
          {/* Bottom branch to 3B */}
          <path
            d="M 0,50 L 30,50 L 70,82 L 100,82"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="3"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Step 1 with connecting line to 2 */}
        <div className={`${styles.timelineItem} ${styles.col1} ${styles.connectRight}`}>
          <div className={styles.timelineNode}>
            <span className={styles.number}>{step1?.id}</span>
          </div>
          {renderCard(step1)}
        </div>

        {/* Step 2 */}
        <div className={`${styles.timelineItem} ${styles.col2}`}>
          <div className={styles.timelineNode}>
            <span className={styles.number}>{step2?.id}</span>
          </div>
          {renderCard(step2)}
        </div>

        {/* Step 3A */}
        <div className={`${styles.timelineItem} ${styles.col3}`}>
          <div className={styles.timelineNode}>
            <span className={styles.number}>{step3A?.id}</span>
          </div>
          {renderCard(step3A)}
        </div>

        {/* Step 3B with connecting line to 4 */}
        <div className={`${styles.timelineItem} ${styles.col3Row2} ${styles.connectRight}`}>
          <div className={styles.timelineNode}>
            <span className={styles.number}>{step3B?.id}</span>
          </div>
          {renderCard(step3B)}
        </div>

        {/* Step 4 */}
        <div className={`${styles.timelineItem} ${styles.col4Row2}`}>
          <div className={styles.timelineNode}>
            <span className={styles.number}>{step4?.id}</span>
          </div>
          {renderCard(step4)}
        </div>
      </div>
    </div>
  );
};

export default OutreachInfo;