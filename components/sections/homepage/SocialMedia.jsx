"use client";

import React, { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import styles from './SocialMedia.module.css';
import platformsData from '@/content/site-data/socialMedia.json';

// Lazy load the 3D canvas
const SocialMedia3D = dynamic(() => import('./Phonecanvas'), {
  ssr: false,
  loading: () => <p style={{ textAlign: 'center', color: 'gray' }}>Loading 3D Experience...</p>
});

const getBasePath = () => {
  const path = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return path.endsWith('/') ? path.slice(0, -1) : path;
};

const normalizePath = (path) => {
  if (!path) return '';
  const basePath = getBasePath();
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
};

const getPlatforms = () => {
  return platformsData.map((platform) => ({
    ...platform,
    image: normalizePath(platform.image)
  }));
};

export default function SocialMedia() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const hoverTimeoutRef = useRef(null);
  const platforms = getPlatforms();
  
  // Extract all images so the PhoneCanvas can preload textures
  const imageUrls = platforms.map(p => p.image);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkMobile = () => setIsMobile(window.innerWidth <= 968);
      checkMobile();
      window.addEventListener('resize', checkMobile);

      return () => {
        window.removeEventListener('resize', checkMobile);
        if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
      };
    }
  }, []);

  const handleMouseEnter = (index) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveIndex(index);
    }, 150);
  };

  const activeData = platforms[activeIndex] || {};

  return (
    <div className={styles.sectionWrapper}>
      <section className={styles.container}>
        <div className={styles.contentWrapper}>
          
          <div className={styles.canvasContainer}>
            <SocialMedia3D 
              activeImage={activeData.image} 
              imageUrls={imageUrls} 
              isMobile={isMobile} 
            />
          </div>

          <div className={styles.textContent}>
            <div>
              <span className={styles.subtitle}>
                Stay Connected
              </span>
              <h2 className={styles.title}>
                Check out our latest post.
              </h2>
            </div>

            <div className={styles.buttonGroup}>
              {platforms.map((platform, index) => {
                const isActive = activeIndex === index;
                return (
                  <a
                    key={platform.id}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.socialBtn} ${isActive ? styles.activeBtn : ''}`}
                    onMouseEnter={() => handleMouseEnter(index)}
                    style={{
                      '--btn-gradient': platform.gradient
                    }}
                  >
                    <span>{platform.name}</span>
                    <span>→</span>
                  </a>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}