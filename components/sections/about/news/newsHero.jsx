"use client";

import React, { useEffect, useRef, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { useGLTF, Center } from '@react-three/drei';
import * as THREE from 'three';
import styles from './newsHero.module.css';

// Prepend base path for GitHub Pages compatibility
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const MODEL_PATH = `${basePath}/assets/sphere.glb`;

const GlowySphere = () => {
  const { scene } = useGLTF(MODEL_PATH);
  const sphereRef = useRef();

  // Clone scene to avoid mutating cached GLTF objects across re-renders
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  useEffect(() => {
    clonedScene.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: new THREE.Color('#0284c7'),
          emissive: new THREE.Color('#38bdf8'),
          emissiveIntensity: 3,
          transparent: true,
          opacity: 0.9,
        });
      }
    });
  }, [clonedScene]);

  // Safely import and call useFrame inside the 3D Canvas tree
  const { useFrame } = require('@react-three/fiber');

  useFrame((state, delta) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += delta * 0.1;
      sphereRef.current.rotation.x = 0.4;
    }
  });

  return (
    <group ref={sphereRef} position={[4, -0.5, 2]}>
      <Center>
        <primitive object={clonedScene} scale={3} />
      </Center>
    </group>
  );
};

// Dynamically import Canvas without SSR to avoid blocking the main thread during initial load
const NewsCanvas = dynamic(
  async () => {
    const { Canvas } = await import('@react-three/fiber');
    const { Suspense } = await import('react');

    return function DynamicCanvas() {
      return (
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Suspense fallback={null}>
            <GlowySphere />
          </Suspense>
        </Canvas>
      );
    };
  },
  { ssr: false }
);

const NewsHero = () => {
  return (
    <section className={styles.heroContainer}>
      {/* Dynamic 3D GLB Background */}
      <div className={styles.canvasContainer}>
        <NewsCanvas />
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

useGLTF.preload(MODEL_PATH);

export default NewsHero;