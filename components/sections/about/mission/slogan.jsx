import React from 'react';
import { motion, useTransform } from 'framer-motion';
import styles from './storyBoard.module.css';

const SloganWord = ({ token, progress }) => {
  // Slogan phase ends at 48% (0.48) of the total scroll
  const step = 0.48 / 11; 
  const wordIn = token.seq * step;
  const wordOn = wordIn + (step * 0.55);

  const opacity = useTransform(
    progress, 
    [wordIn - 0.02, wordIn, wordOn, 0.48, 0.52], 
    [0, 0, 1, 1, 0]
  );
  const y = useTransform(progress, [wordIn, wordOn], ["50%", "0%"]);
  const filter = useTransform(progress, [wordIn, wordOn], ["blur(10px)", "blur(0px)"]);

  return (
    <motion.span
      className={styles.word}
      style={{ opacity, y, filter }}
    >
      {token.word}
    </motion.span>
  );
};

export default SloganWord;