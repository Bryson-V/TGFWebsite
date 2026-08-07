"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import styles from "./galleryPage.module.css";
import galleryData from "@/content/site-data/outreaches.json";

export default function FullGalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Handle Keyboard Navigation for Modal
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
    setSelectedIndex((prev) => (prev === galleryData.length - 1 ? 0 : prev + 1));
  };

  const showPrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? galleryData.length - 1 : prev - 1));
  };

  const activePhoto = selectedIndex !== null ? galleryData[selectedIndex] : null;

  return (
    <main className={styles.pageWrapper}>
      <Container>
        {/* Page Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>Outreach Gallery</h1>
          <p className={styles.subtitle}>
            Explore our full history of community events, mobile clinics, and health education initiatives across the island.
          </p>
        </div>

        {/* Full Masonry Grid (Shows ALL items in the JSON) */}
        <div className={styles.masonryGrid}>
          {galleryData.map((item, index) => (
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
                
                {/* Hover Overlay & Slide-up Text */}
                <div className={styles.hoverOverlay}>
                  <div className={styles.hoverContent}>
                    <h3 className={styles.hoverTitle}>{item.title}</h3>
                    <p className={styles.hoverLocation}>
                      <span className={styles.pinIcon}>📍</span> {item.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Lightbox Modal Popup */}
      {activePhoto && (
        <div className={styles.modalBackdrop} onClick={() => setSelectedIndex(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setSelectedIndex(null)}>✕</button>
            
            <div className={styles.modalSplit}>
              {/* Left: Image */}
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

              {/* Right: Details */}
              <div className={styles.modalDetails}>
                <h3 className={styles.modalTitle}>{activePhoto.title}</h3>
                <p className={styles.modalMeta}>{activePhoto.location} • {activePhoto.date}</p>
                <p className={styles.modalDesc}>{activePhoto.description}</p>
                
                {/* Navigation Controls */}
                <div className={styles.modalNav}>
                  <button onClick={showPrev} className={styles.navBtn}>← Previous</button>
                  <span className={styles.counter}>{selectedIndex + 1} / {galleryData.length}</span>
                  <button onClick={showNext} className={styles.navBtn}>Next →</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}