"use client"

// CHANGED: Imported useEffect to help manage our hover delay
import React, { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, Center, Image } from '@react-three/drei';
import styles from './SocialMedia.module.css';

const platforms = [
  {
    id: 'instagram',
    name: 'Instagram',
    gradient: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
    image: '/images/social/InstaPost.jpg', 
    textColor: '#ffffff', 
    accentColor: '#ffe4e6', 
  },
  {
    id: 'facebook',
    name: 'Facebook',
    gradient: 'linear-gradient(45deg, #1877F2 0%, #033c82 100%)',
    image: '/images/social/InstaPost.jpg', 
    textColor: '#ffffff', 
    accentColor: '#93c5fd', 
  },
  {
    id: 'twitter',
    name: 'X (Twitter)',
    gradient: 'linear-gradient(45deg, #000000 0%, #222222 100%)',
    image: '/images/social/InstaPost.jpg', 
    textColor: '#ffffff', 
    accentColor: '#9ca3af', 
  }
];

const PhoneModel = ({ activeImage, accentColor }) => {
  const { scene } = useGLTF('/assets/iphone16.glb');
  const groupRef = useRef();

  useFrame((state) => {
    if (!groupRef.current) return;
    
    // PHONE ORIENTATION
    const targetRotX = -0.3 + (state.pointer.y * -0.3);
    const targetRotY = 0.5 + (state.pointer.x * 0.4);

    groupRef.current.rotation.x += (targetRotX - groupRef.current.rotation.x) * 0.1;
    groupRef.current.rotation.y += (targetRotY - groupRef.current.rotation.y) * 0.1;

    groupRef.current.rotation.z = 0.5; 
  });

  return (
    <Center position={[-9.0, -1.5, 0]}>
      <group ref={groupRef}>
        <primitive object={scene} scale={1} position={[0, 0, 0]} />

        <Image 
          url={activeImage}
          transparent
          radius={0.8}
          position={[0, 0, 0.4]} 
          scale={[6.7, 14]} 
          toneMapped={false}
          depthTest={false}
        />
        
      </group>
    </Center>
  );
};

export default function SocialMedia() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // CHANGED: Added a reference to store our timer
  const hoverTimeoutRef = useRef(null);

  // CHANGED: Cleanup the timer if the component unmounts
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  // CHANGED: New function to handle the delayed hover
  const handleMouseEnter = (index) => {
    // 1. Clear any existing timers so they don't stack up
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    // 2. Set a new timer for 150ms before changing the background
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveIndex(index);
    }, 150); 
  };

  const activeData = platforms[activeIndex];

  return (
    <section className={styles.container}>
      
      {/* Background Layers with zIndex fix */}
      {platforms.map((platform, index) => {
        const isActive = activeIndex === index;
        return (
          <div 
            key={platform.id}
            className={styles.bgLayer}
            style={{
              background: platform.gradient,
              opacity: isActive ? 1 : 0,
              zIndex: isActive ? 1 : 0 
            }}
          />
        );
      })}

      <div className={styles.contentWrapper}>
        
        <div className={styles.canvasContainer}>
          <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
            <ambientLight intensity={1} />
            <directionalLight position={[5, 5, 5]} intensity={2} />
            <Environment preset="city" />
            
            <PhoneModel 
              activeImage={activeData.image} 
              accentColor={activeData.accentColor} 
            />
          </Canvas>
        </div>

        <div className={styles.textContent}>
          <div>
            <span 
              className={styles.subtitle} 
              style={{ color: activeData.accentColor }}
            >
              Stay Connected
            </span>
            <h2 
              className={styles.title} 
              style={{ color: activeData.textColor }}
            >
              Check out our latest post.
            </h2>
          </div>

          <div className={styles.buttonGroup}>
            {platforms.map((platform, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={platform.id}
                  className={styles.socialBtn}
                  onMouseEnter={() => handleMouseEnter(index)}
                  style={{
                    color: platform.textColor,
                    border: `2px solid ${isActive ? platform.accentColor : 'rgba(255, 255, 255, 0.3)'}`
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

useGLTF.preload('/assets/iphone16.glb');