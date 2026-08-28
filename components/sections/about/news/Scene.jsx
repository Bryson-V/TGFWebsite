"use client";

import React, { useEffect, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Center } from '@react-three/drei';
import * as THREE from 'three';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const MODEL_PATH = `/assets/sphere.glb`;

const GlowySphere = () => {
  const { scene } = useGLTF(MODEL_PATH);
  const sphereRef = useRef();

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

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <GlowySphere />
    </Canvas>
  );
}

useGLTF.preload(MODEL_PATH);