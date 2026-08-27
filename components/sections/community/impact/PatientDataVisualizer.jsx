"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { getPatientData } from "@/lib/getPatientData";
import { Users, Loader2, MapPin, HeartHandshake } from "lucide-react";

// Dynamic import for your 3D PatientPieChart component
const PatientPieChart = dynamic(() => import("./patientPieChart"), {
  ssr: false,
  loading: () => (
    <div style={{ padding: "4rem", textAlign: "center", color: "#6b7280" }}>
      Loading 3D visualization...
    </div>
  ),
});

export default function PatientDataVisualizer({ filePath = "/excel/patient-data.json" }) {
  const [loading, setLoading] = useState(true);
  const [fullData, setFullData] = useState(null);
  
  // Selected Filters
  const [selectedLocation, setSelectedLocation] = useState("all"); // 'all', 'center', 'mobile'
  const [selectedTag, setSelectedTag] = useState("gender"); // 'gender', 'race', 'age'

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getPatientData(filePath);
        setFullData(data);
      } catch (err) {
        console.error("Error loading patient dataset:", err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [filePath]);

  if (loading || !fullData) {
    return (
      <div
        style={{
          maxWidth: "900px",
          margin: "2rem auto",
          padding: "3rem",
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          border: "1px solid #e5e7eb",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
          textAlign: "center",
        }}
      >
        <Loader2 style={{ width: "32px", height: "32px", color: "#059669", margin: "0 auto 12px auto" }} className="animate-spin" />
        <p style={{ color: "#4b5563", fontWeight: "500", fontSize: "0.95rem" }}>
          Loading demographics dashboard...
        </p>
      </div>
    );
  }

  // Active dataset according to location selection
  const activeDataset = fullData[selectedLocation] || fullData.all;
  const activeChartData = activeDataset?.chartData?.[selectedTag] || [];

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "2rem auto",
        padding: "2rem",
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        border: "1px solid #e5e7eb",
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* Title */}
      <h2 style={{ fontSize: "1.75rem", fontWeight: "800", color: "#0f172a", marginBottom: "1.25rem", letterSpacing: "-0.025em" }}>
        Patient Demographics Overview
      </h2>

      {/* Facility Location Selection Bar */}
      <div style={{ marginBottom: "1.5rem" }}>
        <span style={{ fontSize: "0.8rem", fontWeight: "700", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.05em", display: "block", marginBottom: "0.5rem" }}>
          Select Location
        </span>
        <div style={{ display: "flex", gap: "0.5rem", padding: "4px", backgroundColor: "#f1f5f9", borderRadius: "10px", width: "fit-content", flexWrap: "wrap" }}>
          {[
            { key: "all", label: "All Facilities" },
            { key: "center", label: "Health & Wellness Center" },
            { key: "mobile", label: "Mobile Clinic" },
          ].map(({ key, label }) => {
            const isActive = selectedLocation === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedLocation(key)}
                style={{
                  padding: "0.5rem 1rem",
                  borderRadius: "7px",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  border: "none",
                  backgroundColor: isActive ? "#ffffff" : "transparent",
                  color: isActive ? "#0f172a" : "#64748b",
                  boxShadow: isActive ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
                  transition: "all 0.15s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <MapPin style={{ width: "14px", height: "14px", color: isActive ? "#059669" : "#94a3b8" }} />
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Hero Stat Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1.25rem",
          marginBottom: "1.5rem",
        }}
      >
        {/* Total Patients Card */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.25rem",
            padding: "1.25rem 1.5rem",
            backgroundColor: "#f0fdf4",
            border: "1px solid #bbf7d0",
            borderRadius: "12px",
          }}
        >
          <div
            style={{
              padding: "0.75rem",
              backgroundColor: "#dcfce7",
              borderRadius: "10px",
              color: "#15803d",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Users style={{ width: "28px", height: "28px" }} />
          </div>
          <div>
            <span style={{ fontSize: "0.8rem", fontWeight: "700", color: "#166534", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Total Patients ({selectedLocation === "all" ? "All Locations" : selectedLocation === "center" ? "Center" : "Mobile"})
            </span>
            <div style={{ fontSize: "1.85rem", fontWeight: "800", color: "#14532d", lineHeight: "1.1", marginTop: "2px" }}>
              {(activeDataset?.totalPatients || 0).toLocaleString()}
            </div>
          </div>
        </div>

        {/* Underserved Metric Card */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.25rem",
            padding: "1.25rem 1.5rem",
            backgroundColor: "#f8fafc",
            border: "1px solid #e2e8f0",
            borderRadius: "12px",
          }}
        >
          <div
            style={{
              padding: "0.75rem",
              backgroundColor: "#e2e8f0",
              borderRadius: "10px",
              color: "#334155",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <HeartHandshake style={{ width: "28px", height: "28px" }} />
          </div>
          <div>
            <span style={{ fontSize: "0.8rem", fontWeight: "700", color: "#475569", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Underserved
            </span>
            <div style={{ fontSize: "1.85rem", fontWeight: "800", color: "#0f172a", lineHeight: "1.1", marginTop: "2px" }}>
              {(activeDataset?.selfPayCount || 0).toLocaleString()}+
            </div>
          </div>
        </div>
      </div>

      {/* Demographic Category Buttons */}
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem" }}>
        {[
          { key: "gender", label: "Patient Gender" },
          { key: "race", label: "Patient Race" },
          { key: "age", label: "Patient Age" },
        ].map(({ key, label }) => {
          const isActive = selectedTag === key;
          return (
            <button
              key={key}
              onClick={() => setSelectedTag(key)}
              style={{
                padding: "0.5rem 1.125rem",
                borderRadius: "8px",
                fontSize: "0.875rem",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.15s ease",
                border: isActive ? "1px solid #047857" : "1px solid #e5e7eb",
                backgroundColor: isActive ? "#047857" : "#ffffff",
                color: isActive ? "#ffffff" : "#4b5563",
                boxShadow: isActive ? "0 2px 4px rgba(4, 120, 87, 0.2)" : "none",
              }}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* 3D Chart Display */}
      <div style={{ borderTop: "1px solid #f1f5f9", paddingTop: "1rem" }}>
        <PatientPieChart data={activeChartData} />
      </div>
    </div>
  );
}