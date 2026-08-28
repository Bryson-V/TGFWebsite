"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import styles from './newsHero.module.css';

const Scene = dynamic(() => import('./Scene'), { 
  ssr: false,
  loading: () => <div className={styles.canvasPlaceholder}></div> 
});

const NewsHero = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.canvasContainer}>
        <Scene />
      </div>

      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <span className={styles.subtitle}>TODU GUAM FOUNDATION · ABOUT US</span>
        <h1 className={styles.title}>
          News <span className={styles.brightText}>&</span> Media
        </h1>
        <p className={styles.description}>
          Discover the latest stories, press releases, and announcements. 
          <br />
          Dive into what's happening behind the scenes.
        </p>
      </div>
    </section>
  );
};

export default NewsHero;