"use client";

import React, { useRef, useEffect, Suspense } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { getAssetPath } from "@/lib/utils";
import styles from "./aboutHero.module.css";

function BrainModel() {
  const { scene } = useGLTF(getAssetPath("/assets/BrainWire.glb"));
  const groupRef = useRef();

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshBasicMaterial({
          color: new THREE.Color("#ffffff"),
          transparent: true,
          opacity: 0.6, 
        });
      }
    });
  }, [scene]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0015;
      groupRef.current.rotation.x = 0.05;
    }
  });

  return (
    <group ref={groupRef} scale={[4, 4, 4]}>
      <primitive object={scene} />
    </group>
  );
}

export default function AboutMindCareHero() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]); 

  return (
    <section ref={containerRef} className={styles.heroContainer}>
      
      {/* 3D Background Canvas */}
      <div className={styles.canvasWrapper}>
        <Canvas 
          camera={{ position: [0, 0, 15], fov: 45 }} 
          dpr={[1, 2]} 
          gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={null}>
            <BrainModel />
          </Suspense>
          <OrbitControls enablePan={false} enableZoom={false} />
        </Canvas>
      </div>

      <div className={styles.cyanOverlay} />

      {/* Text Content */}
      <motion.div 
        className={styles.content} 
        style={{ y: textY, opacity: textOpacity }} 
      >
        <h5 className={styles.subtitle}>TODU GUAM FOUNDATION · OUR MISSION</h5>
        
        <h1 className={styles.title}>
          About Mind Care
        </h1>
        
        <p className={styles.description}>
          A holistic, whole-person approach to behavioral health integrating biological, cultural, and personal care.
        </p>
      </motion.div>
      
    </section>
  );
}

useGLTF.preload(getAssetPath("/assets/BrainWire.glb"));