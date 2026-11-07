"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './discountTable.module.css';

const feeData = {
    1: { a: 15960, b: 19950, c: 23940, d: 27930, e: 31920 },
    2: { a: 21640, b: 27050, c: 32460, d: 37870, e: 43280 },
    3: { a: 27320, b: 34150, c: 40980, d: 47810, e: 54640 },
    4: { a: 33000, b: 41250, c: 49500, d: 57750, e: 66000 },
    5: { a: 38680, b: 48350, c: 58020, d: 67690, e: 77360 },
    6: { a: 44360, b: 55450, c: 66540, d: 77630, e: 88720 },
    7: { a: 50040, b: 62550, c: 75060, d: 87570, e: 100080 },
    8: { a: 55720, b: 69650, c: 83580, d: 97510, e: 111440 },
};

const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(amount);
};

export default function DiscountTable() {
    const [familySize, setFamilySize] = useState(1);

    const calculateLimits = (size) => {
        if (size <= 8) return feeData[size];

        const extraPeople = size - 8;
        const base = feeData[8];

        return { // [cite: 1]
            a: base.a + (5680 * extraPeople),
            b: base.b + (7100 * extraPeople),
            c: base.c + (8520 * extraPeople),
            d: base.d + (9940 * extraPeople),
            e: base.e + (11360 * extraPeople)
        };
    };

    const currentLimits = calculateLimits(familySize);

    const tiers = [
        { name: 'Tier A', pay: '$50 Nominal Fee', limit: `At or below ${formatCurrency(currentLimits.a)}`, color: '#1a472a', desc: 'Highest discount' },
        { name: 'Tier B', pay: '20% of bill', limit: `Up to ${formatCurrency(currentLimits.b)}`, color: '#25633b', desc: 'High discount' },
        { name: 'Tier C', pay: '40% of bill', limit: `Up to ${formatCurrency(currentLimits.c)}`, color: '#2f7d4c', desc: 'Moderate discount' },
        { name: 'Tier D', pay: '60% of bill', limit: `Up to ${formatCurrency(currentLimits.d)}`, color: '#3a995d', desc: 'Standard discount' },
        { name: 'Tier E', pay: '80% of bill', limit: `Up to ${formatCurrency(currentLimits.e)}`, color: '#45b36e', desc: 'Base discount' },
        { name: 'Private Pay', pay: '100% of bill', limit: `Over ${formatCurrency(currentLimits.e)}`, color: '#666666', desc: 'Standard rates apply' },
    ];

    return (
        <div className={styles.sectionWrapper}>
            <motion.div
                className={styles.headerContainer}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className={styles.title}>Calculate Your Estimated Discount</h2>
                <p className={styles.subtitle}>Select the number of people living in your household to see your eligible income brackets.</p>
            </motion.div>

            <div className={styles.interactiveContainer}>
                {/* Family Size Selector */}
                <div className={styles.selectorWrapper}>
                    <p className={styles.selectorLabel}>Household Size:</p>
                    <div className={styles.buttonGroup}>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                            <motion.button
                                key={num}
                                className={`${styles.sizeButton} ${familySize === num ? styles.activeButton : ''}`}
                                onClick={() => setFamilySize(num)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {num}{num === 12 ? '+' : ''}
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Dynamic Tier Display */}
                <div className={styles.tiersContainer}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={familySize}
                            className={styles.tiersGrid}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {tiers.map((tier, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.tierCard}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className={styles.tierHeader} style={{ backgroundColor: tier.color }}>
                                        <span className={styles.tierName}>{tier.name}</span>
                                        <span className={styles.tierPay}>{tier.pay}</span>
                                    </div>
                                    <div className={styles.tierBody}>
                                        <p className={styles.tierAnnualLabel}>Annual Household Income:</p>
                                        <p className={styles.tierLimit}>{tier.limit}</p>
                                        <p className={styles.tierDesc}>{tier.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Disclaimer Section */}
                <div style={{ marginTop: '2.5rem', padding: '1.5rem', backgroundColor: '#f9fdfa', borderRadius: '8px', border: '1px solid #e5ece7' }}>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: '#555', textAlign: 'center', lineHeight: '1.6' }}>
                        *Income limits are based on annual gross (before-tax) income. <br />
                        <strong>For each additional person beyond 8, the income limits increase by:</strong><br />
                        Tier A: $5,680 | Tier B: $7,100 | Tier C: $8,520 | Tier D: $9,940 | Tier E: $11,360.
                    </p>
                </div>
            </div>
        </div>
    );
}