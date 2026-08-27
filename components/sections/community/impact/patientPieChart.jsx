"use client";

import React, { useState, useMemo, useRef, useEffect, useCallback } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";

const SLICE_COLORS = [
  "#00d2d3", // Bright Cyan
  "#0070f3", // Vibrant Blue
  "#7928ca", // Purple
  "#f43f5e", // Magenta / Pink
  "#1d4ed8", // Dark Royal Blue
  "#10b981", // Emerald Green
  "#f59e0b", // Amber
];

const MIN_ARC_ANGLE = 0.1;

function PieSlice({ startAngle, endAngle, color, label, isActive, onHover, onClick }) {
  const meshRef = useRef();

  // Create geometry once per slice angle range
  const geometry = useMemo(() => {
    const innerRadius = 0.9;
    const outerRadius = 1.6;
    const thetaLength = endAngle - startAngle;

    return new THREE.RingGeometry(
      innerRadius,
      outerRadius,
      32,
      1,
      startAngle,
      thetaLength
    );
  }, [startAngle, endAngle]);

  // Animate target scale smoothly frame-by-frame
  useFrame(() => {
    if (meshRef.current) {
      const targetScale = isActive ? 1.08 : 1.0;
      meshRef.current.scale.x = THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, 0.15);
      meshRef.current.scale.y = THREE.MathUtils.lerp(meshRef.current.scale.y, targetScale, 0.15);
    }
  });

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      onPointerOver={(e) => {
        e.stopPropagation();
        onHover(label);
      }}
      onPointerOut={() => onHover(null)}
      onClick={(e) => {
        e.stopPropagation();
        onClick(label);
      }}
    >
      <meshBasicMaterial color={color} side={THREE.DoubleSide} />
    </mesh>
  );
}

export default function PatientPieChart({ data = [] }) {
  const [hoveredLabel, setHoveredLabel] = useState(null);
  const [selectedLabel, setSelectedLabel] = useState(null);
  const containerRef = useRef(null);
  const clickTimeoutRef = useRef(null);

  // Generate a unique key based on dataset content so canvas cleanly updates across tab swaps
  const dataKey = useMemo(() => {
    return data.map((d) => `${d.name}-${d.value}`).join("|");
  }, [data]);

  // Reset selected/hovered state whenever active tab/dataset changes
  useEffect(() => {
    setSelectedLabel(null);
    setHoveredLabel(null);
  }, [dataKey]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setSelectedLabel(null);
      }
    }
    document.addEventListener("pointerdown", handleClickOutside);
    return () => document.removeEventListener("pointerdown", handleClickOutside);
  }, []);

  const totalValue = useMemo(
    () => data.reduce((acc, curr) => acc + curr.value, 0),
    [data]
  );

  const slices = useMemo(() => {
    if (!data.length || totalValue <= 0) return [];

    const rawSlices = data.map((item, index) => {
      const ratio = item.value / totalValue;
      const rawAngle = ratio * Math.PI * 2;
      const displayPct = ratio > 0 && ratio < 0.01 ? 1 : Math.round(ratio * 100);

      return {
        ...item,
        percentage: displayPct,
        angleLength: Math.max(rawAngle, MIN_ARC_ANGLE),
        color: SLICE_COLORS[index % SLICE_COLORS.length],
      };
    });

    const totalAngle = rawSlices.reduce((acc, item) => acc + item.angleLength, 0);
    const scaleFactor = (Math.PI * 2) / totalAngle;

    let currentAngle = Math.PI / 2;

    return rawSlices.map((item) => {
      const scaledAngleLength = item.angleLength * scaleFactor;
      const startAngle = currentAngle;
      const endAngle = currentAngle - scaledAngleLength;
      currentAngle = endAngle;

      return {
        ...item,
        startAngle: endAngle,
        endAngle: startAngle,
      };
    });
  }, [data, totalValue]);

  // Anti-spam debounce on clicks
  const handleSelect = useCallback((label) => {
    if (clickTimeoutRef.current) return;

    setSelectedLabel((prev) => (prev === label ? null : label));

    clickTimeoutRef.current = setTimeout(() => {
      clickTimeoutRef.current = null;
    }, 180);
  }, []);

  const activeLabel = hoveredLabel !== null ? hoveredLabel : selectedLabel;
  const activeSlice = slices.find((s) => s.name === activeLabel);

  return (
    <div ref={containerRef} style={{ width: "100%", position: "relative" }}>
      <div style={{ height: "380px", width: "100%", touchAction: "none", position: "relative" }}>
        <Canvas camera={{ position: [0, 0, 4.8], fov: 42 }}>
          <group key={dataKey} position={[0, 0, 0]}>
            {slices.map((slice) => {
              const isActive = activeLabel === slice.name;

              return (
                <PieSlice
                  key={slice.name}
                  {...slice}
                  label={slice.name}
                  isActive={isActive}
                  onHover={setHoveredLabel}
                  onClick={handleSelect}
                />
              );
            })}
          </group>

          {/* Dynamic Center Display */}
          <Html position={[0, 0, 0]} center style={{ pointerEvents: "none" }}>
            <div
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "120px",
                userSelect: "none",
              }}
            >
              <div
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "800",
                  color: "#0f172a",
                  lineHeight: "1.2",
                  transition: "all 0.2s ease",
                }}
              >
                {activeSlice
                  ? `${activeSlice.percentage}% ${activeSlice.name}`
                  : "100% Overall"}
              </div>
              <div
                style={{
                  fontSize: "0.72rem",
                  fontWeight: "600",
                  color: "#64748b",
                  marginTop: "3px",
                  lineHeight: "1.1",
                }}
              >
                {activeSlice
                  ? `${activeSlice.value.toLocaleString()} entries`
                  : `${totalValue.toLocaleString()} entries`}
              </div>
            </div>
          </Html>
        </Canvas>
      </div>

      {/* Non-shifting Interactive Legend */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "0.75rem",
          marginTop: "0.5rem",
          paddingTop: "1rem",
          borderTop: "1px dashed #e2e8f0",
        }}
      >
        {slices.map((slice) => {
          const isSelected = selectedLabel === slice.name;
          const isActive = activeLabel === slice.name;

          return (
            <button
              key={slice.name}
              type="button"
              onClick={() => handleSelect(slice.name)}
              onMouseEnter={() => setHoveredLabel(slice.name)}
              onMouseLeave={() => setHoveredLabel(null)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
                padding: "6px 12px",
                borderRadius: "8px",
                border: "2px solid",
                borderColor: isSelected ? slice.color : "transparent",
                boxShadow: isSelected ? "none" : "inset 0 0 0 1px #e2e8f0",
                backgroundColor: isActive ? "#f1f5f9" : "#ffffff",
                transition: "background-color 0.15s ease, border-color 0.15s ease",
                outline: "none",
                WebkitTapHighlightColor: "transparent",
              }}
            >
              <span
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "3px",
                  backgroundColor: slice.color,
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
              <span style={{ fontSize: "0.85rem", fontWeight: isActive ? "700" : "500", color: "#334155" }}>
                {slice.name}: <strong>{slice.percentage}%</strong>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}