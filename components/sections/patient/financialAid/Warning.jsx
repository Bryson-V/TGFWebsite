import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import styles from './Warning.module.css';

const WarningBanner = () => {
  return (
    <div className={styles.warningContainer}>
      <div className={styles.icon}>
        <FaExclamationTriangle size={24} />
      </div>
      <span>
        <strong>Please Note:</strong> Financial assistance services only apply to individuals who have received care from the clinic.
      </span>
    </div>
  );
};

export default WarningBanner;