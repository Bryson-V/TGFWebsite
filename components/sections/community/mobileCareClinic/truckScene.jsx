"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { getAssetPath } from "@/lib/utils";

function AnimatedPlate() {
  const plateRef = useRef();
  const { invalidate } = useThree();

  useFrame(() => {
    if (plateRef.current && plateRef.current.scale.x < 0.99) {
      plateRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.15);
      invalidate();
    }
  });

  return (
    <mesh ref={plateRef} position={[0, -0.2, 0]} scale={[0, 0, 0]}>
      <cylinderGeometry args={[3.5, 3.5, 0.4, 32]} />
      <meshStandardMaterial color="#888888" roughness={0.7} />
    </mesh>
  );
}

function TruckModel() {
  // 2. Wrap the GLTF path with getAssetPath()
  const { scene } = useGLTF(getAssetPath("/assets/truck.glb")); 
  const truckRef = useRef();
  const { invalidate } = useThree();
  const [startTruck, setStartTruck] = useState(false);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh && child.material) {
        child.material.envMapIntensity = 0;
      }
    });
  }, [scene]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTruck(true);
      invalidate();
    }, 400);
    return () => clearTimeout(timer);
  }, [invalidate]);

  useFrame(() => {
    if (startTruck && truckRef.current && truckRef.current.scale.x < 5.95) {
      truckRef.current.scale.lerp(new THREE.Vector3(6, 6, 6), 0.09);
      invalidate();
    }
  });

  return (
    <primitive 
      ref={truckRef} 
      object={scene} 
      scale={[0, 0, 0]}
      position={[0, 0, 0]} 
      rotation={[0, -Math.PI / 4, 0]} 
    />
  );
}

export default function TruckScene({ isInView = true }) {
  return (
    <Canvas 
      frameloop={isInView ? "demand" : "never"} 
      camera={{ position: [0, 3, 10], fov: 45 }} 
      dpr={1}
      gl={{ powerPreference: "high-performance", antialias: true }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 5]} intensity={1.2} />

      <AnimatedPlate />

      <ContactShadows 
        position={[0, -0.01, 0]} 
        opacity={0.5} 
        scale={8} 
        blur={1.5} 
        far={3} 
        frames={1}
      />

      <TruckModel />

      <OrbitControls
        enablePan={false}
        minDistance={5}
        maxDistance={12}
        maxPolarAngle={Math.PI / 2 - 0.1}
      />
      
      <Environment preset="city" resolution={256}/>
    </Canvas>
  );
}