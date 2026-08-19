"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, Center, Image } from '@react-three/drei';
import * as THREE from 'three'; 
import styles from './SocialMedia.module.css';

// Base path helper for GitHub Pages compatibility
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const MODEL_PATH = `${basePath}/assets/iphone16.glb`;

const platforms = [
  {
    id: 'instagram',
    name: 'Instagram',
    gradient: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
    image: `${basePath}/images/social/InstaPost.jpg`, 
  },
  {
    id: 'facebook',
    name: 'Facebook',
    gradient: 'linear-gradient(45deg, #1877F2 0%, #033c82 100%)',
    image: `${basePath}/images/social/Facebook.jpg`, 
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    gradient: 'linear-gradient(135deg, #121212 0%, #303030 100%)',
    image: `${basePath}/images/social/TikTok.png`, 
  }
];

const PhoneModel = ({ activeImage }) => {
  const { scene } = useGLTF(MODEL_PATH);
  const groupRef = useRef();

  useFrame((state) => {
    if (!groupRef.current) return;
    
    // Smoothly clamped rotation so it can't flip
    const targetRotX = THREE.MathUtils.clamp(-0.2 + (state.pointer.y * -0.08), -0.5, -0.1);
    const targetRotY = THREE.MathUtils.clamp(0.4 + (state.pointer.x * 0.3), 0.0, 1.0);

    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.1);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.1);
  });

  return (
    <Center position={[-5.5, -0.2, 0]} scale={0.7} rotation={[0, 0, 0.5]}>
      <group ref={groupRef}>
        <primitive object={scene} scale={1} position={[0, 0, 0]} />

        <Image 
          url={activeImage}
          transparent
          radius={0.8}
          position={[0, 0, 0.4]} 
          scale={[6.7, 14.1]} 
          toneMapped={false}
          depthTest={false}
        />
        
      </group>
    </Center>
  );
};

export default function SocialMedia() {
  const [activeIndex, setActiveIndex] = useState(0);
  const hoverTimeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  const handleMouseEnter = (index) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveIndex(index);
    }, 150); 
  };

  const activeData = platforms[activeIndex];

  return (
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
            
            <PhoneModel activeImage={activeData.image} />
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
                <button
                  key={platform.id}
                  className={`${styles.socialBtn} ${isActive ? styles.activeBtn : ''}`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  style={{
                    '--btn-gradient': platform.gradient
                  }}
                >
                  <span>{platform.name}</span>
                  <span>→</span>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

useGLTF.preload(MODEL_PATH);