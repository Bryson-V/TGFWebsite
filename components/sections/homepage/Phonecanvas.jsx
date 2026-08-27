"use client";

import React, { useRef, useEffect, useState, useCallback, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, useTexture, Center, Image, Clone } from '@react-three/drei';
import * as THREE from 'three';

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

const MODEL_URL = normalizePath('/assets/iphone16.glb');

// Preload the model once to have it stay in memory
useGLTF.preload(MODEL_URL);

function ScreenImage({ url }) {
  return (
    <Image
      url={url}
      transparent
      radius={0.8}
      position={[0, 0, 0.379]}
      scale={[6.7, 14.1]}
      toneMapped={false}
      depthTest={false}
    />
  );
}

function PhoneModel({ activeImage, isMobile }) {
  // Use the exact global string here
  const { scene } = useGLTF(MODEL_URL);
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

        {/* Clone 3d phone to stay persistent */}
        <Clone object={scene} scale={1} position={[0, 0, 0]} />

        {activeImage && (
          <Suspense fallback={null}>
            <ScreenImage url={activeImage} />
          </Suspense>
        )}
      </group>
    </Center>
  );
}

export default function PhoneCanvas({ imageUrls = [], activeImage, isMobile }) {
  const [canvasKey, setCanvasKey] = useState(0);

  useEffect(() => {
    if (imageUrls.length) {
      useTexture.preload(imageUrls);
    }
  }, [imageUrls]);

  const handleCreated = useCallback(({ gl }) => {
    const canvas = gl.domElement;

    const handleLost = (event) => {
      event.preventDefault();
    };

    const handleRestored = () => {
        // Forced a clean remount so r3f rebuilds the whole scene from scratch
        setCanvasKey((k) => k + 1);
    };

    canvas.addEventListener('webglcontextlost', handleLost, false);
    canvas.addEventListener('webglcontextrestored', handleRestored, false);
  }, []);

  return (
    <Canvas
      key={canvasKey}
      camera={{ position: [0, 0, 15], fov: 45 }}
      style={{ pointerEvents: 'auto' }}
      onCreated={handleCreated}
      dpr={[1, 1.5]}
      gl={{ powerPreference: 'default', preserveDrawingBuffer: false }}
      dispose={null}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1.8} />
      <directionalLight position={[-5, 2, -3]} intensity={0.5} />
      <pointLight position={[0, 1, 4]} intensity={0.4} />
      <Suspense fallback={null}>
        <PhoneModel activeImage={activeImage} isMobile={isMobile} />
      </Suspense>
    </Canvas>
  );
}