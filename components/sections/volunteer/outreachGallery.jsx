"use client";

import { useState, useEffect } from "react";
import Image from '@/components/ui/Image';
import Link from "next/link";
import Container from "@/components/ui/Container";
import styles from "./outreachGallery.module.css";
import galleryData from "@/content/site-data/outreaches.json";

export default function OutreachGallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const DISPLAY_LIMIT = 6;
  const displayedGallery = galleryData.slice(0, DISPLAY_LIMIT);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const showNext = () => {
    setSelectedIndex((prev) => (prev === displayedGallery.length - 1 ? 0 : prev + 1));
  };

  const showPrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? displayedGallery.length - 1 : prev - 1));
  };

  const activePhoto = selectedIndex !== null ? displayedGallery[selectedIndex] : null;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>OUR WORK IN ACTION</p>
            <h2 className={styles.title}>Outreach Gallery</h2>
            <p className={styles.subtitle}>
              Every photo tells the story of a village served, a family cared for, and a community growing healthier.
            </p>
          </div>
        </div>

        {/* Masonry Grid (Now using displayedGallery instead of galleryData) */}
        <div className={styles.masonryGrid}>
          {displayedGallery.map((item, index) => (
            <div 
              key={item.id} 
              className={styles.masonryItem}
              onClick={() => setSelectedIndex(index)}
            >
              <div className={styles.imageWrapper}>
                <Image 
                  src={item.src}
                  alt={item.title}
                  width={600}
                  height={400}
                  className={styles.image}
                  style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                />
                
                <div className={styles.hoverOverlay}>
                  <div className={styles.hoverContent}>
                    <h3 className={styles.hoverTitle}>{item.title}</h3>
                    <p className={styles.hoverLocation}>
                      <span className={styles.pinIcon}>
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24" 
                          fill="#ef4444" 
                          style={{ width: '1.2em', height: '1.2em' }}
                        >
                          <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg>
                      </span>
                      {item.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className={styles.viewAllContainer}>
          <Link href="/allOutreaches" className={styles.viewAllLink}>
            View all coverage →
          </Link>
        </div>
      </Container>

      {activePhoto && (
        <div className={styles.modalBackdrop} onClick={() => setSelectedIndex(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setSelectedIndex(null)}>✕</button>
            
            <div className={styles.modalSplit}>
              <div className={styles.modalImageContainer}>
                <Image 
                  src={activePhoto.src}
                  alt={activePhoto.title}
                  fill
                  className={styles.modalImg}
                />
                <div className={styles.modalBadge}>
                  <strong>{activePhoto.residents}</strong> residents served
                </div>
              </div>

              <div className={styles.modalDetails}>
                <h3 className={styles.modalTitle}>{activePhoto.title}</h3>
                <p className={styles.modalMeta}>{activePhoto.location} • {activePhoto.date}</p>
                <p className={styles.modalDesc}>{activePhoto.description}</p>
                
                <div className={styles.modalNav}>
                  <button onClick={showPrev} className={styles.navBtn}>← Previous</button>
                  <span className={styles.counter}>{selectedIndex + 1} / {displayedGallery.length}</span>
                  <button onClick={showNext} className={styles.navBtn}>Next →</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}