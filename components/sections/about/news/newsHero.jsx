"use client"

import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Center } from '@react-three/drei';
import * as THREE from 'three';
import styles from './newsHero.module.css';

const GlowySphere = () => {
  const { scene } = useGLTF('assets/sphere.glb');
  const sphereRef = useRef();

  useEffect(() => {
    scene.traverse((child) => {
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
  }, [scene]);

  useFrame((state, delta) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += delta * 0.1; // Rotation speed
      sphereRef.current.rotation.x = 0.4; // Angled rotation
    }
  });

  return (
    <group ref={sphereRef} position={[4, -0.5, 2]}>
      <Center>
        <primitive object={scene} scale={3} />
      </Center>
    </group>
  );
};

const NewsHero = () => {
  return (
    <section className={styles.heroContainer}>
      
      {/* 3D GLB Background */}
      <div className={styles.canvasContainer}>
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          
          <GlowySphere />

        </Canvas>
      </div>

      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <span className={styles.subtitle}>TODU GUAM FOUNDATION · ABOUT US</span>
        <h1 className={styles.title}>
          News <span className={styles.brightText}>&</span> Media
        </h1>
        <p className={styles.description}>
          Discover the latest stories, press releases, and announcements. 
          <br />Dive into what's happening behind the scenes.
        </p>
      </div>
      
    </section>
  );
};

useGLTF.preload('assets/sphere.glb');

export default NewsHero;