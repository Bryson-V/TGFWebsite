"use client";

import React, { useState, useRef, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, Center, Image, Clone } from '@react-three/drei';
import * as THREE from 'three'; 
import styles from './SocialMedia.module.css';
import platformsData from '@/content/site-data/socialMedia.json';

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

const PhoneModel = ({ activeImage, isMobile }) => {
  const modelPath = normalizePath('/assets/iphone16.glb');
  const { scene } = useGLTF(modelPath);
  const groupRef = useRef();

  useFrame((state) => {
    if (!groupRef.current) return;

    const targetRotX = THREE.MathUtils.clamp(-0.2 + (state.pointer.y * -0.08), -0.5, -0.1);
    const targetRotY = THREE.MathUtils.clamp(0.4 + (state.pointer.x * 0.3), 0.0, 1.0);

    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.1);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.1);
  });

  const xPosition = isMobile ? -1.0 : -5.5; 
  const phoneScale = isMobile ? 0.55 : 0.7;

  return (
    <Center position={[xPosition, -0.2, 0]} scale={phoneScale} rotation={[0, 0, 0.5]}>
      <group ref={groupRef}>
        
        {/* Used <Clone> instead of <primitive> to prevent the white texture crash */}
        <Clone object={scene} scale={1} position={[0, 0, 0]} />

        {activeImage && (
          <Image 
            url={activeImage}
            transparent
            radius={0.8}
            position={[0, 0, 0.379]} 
            scale={[6.7, 14.1]} 
            toneMapped={false}
            depthTest={false}
          />
        )}
      </group>
    </Center>
  );
};

export default function SocialMedia() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const hoverTimeoutRef = useRef(null);
  const platforms = getPlatforms();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const modelPath = normalizePath('/assets/iphone16.glb');
      useGLTF.preload(modelPath);

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
            <Canvas 
              camera={{ position: [0, 0, 15], fov: 45 }}
              style={{ pointerEvents: 'auto' }} 
            >
              <ambientLight intensity={1} />
              <directionalLight position={[5, 5, 5]} intensity={2} />
              <Environment preset="city" />
              
              <Suspense fallback={null}>
                <PhoneModel activeImage={activeData.image} isMobile={isMobile} />
              </Suspense>
            </Canvas>
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