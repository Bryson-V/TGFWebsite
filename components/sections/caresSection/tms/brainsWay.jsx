"use client";

import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import Container from "@/components/ui/Container";
import styles from "./brainsWay.module.css";

export default function BrainsWayCard() {
  return (
    <section className={styles.section}>
      <Container>
        <motion.div
          className={styles.card}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <div className={styles.content}>
            <span className={styles.badge}>DEEP TMS TECHNOLOGY</span>
            <h3 className={styles.title}>Want to learn more about BrainsWay?</h3>
            <p className={styles.description}>
              Explore the advanced technology, clinical research, and scientific evidence behind the BrainsWay Deep TMS system.
            </p>
          </div>

          <a
            href="https://www.brainsway.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            <span>Visit BrainsWay</span>
            <FiExternalLink className={styles.icon} size={16} />
          </a>
        </motion.div>
      </Container>
    </section>
  );
}