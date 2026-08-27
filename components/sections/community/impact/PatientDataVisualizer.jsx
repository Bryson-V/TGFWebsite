"use client";

import { useState, useEffect } from "react";
import { parsePatientExcel } from "./parsePatientExcel";
import PatientPieChart from "./patientPieChart";
import { Users, Loader2 } from "lucide-react";

export default function PatientDataVisualizer({ filePath = "/excel/patient-data.xlsx" }) {
  const [loading, setLoading] = useState(true);
  const [totalPatients, setTotalPatients] = useState(0);
  const [chartData, setChartData] = useState({ age: [], race: [], gender: [] });
  const [selectedTag, setSelectedTag] = useState("gender");

  useEffect(() => {
    async function loadData() {
      try {
        const { totalPatients, chartData } = await parsePatientExcel(filePath);
        setTotalPatients(totalPatients);
        setChartData(chartData);
      } catch (err) {
        console.error("Error loading patient dataset:", err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [filePath]);

  if (loading) {
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
        <p style={{ color: "#4b5563", fontWeight: "500", fontSize: "0.95rem" }}>Loading patient dataset...</p>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "2rem auto",
        padding: "2rem",
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        border: "1px solid #e5e7eb",
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* Title */}
      <h2 style={{ fontSize: "1.75rem", fontWeight: "800", color: "#0f172a", marginBottom: "1.5rem", letterSpacing: "-0.025em" }}>
        Patient Demographics Overview
      </h2>

      {/* Hero Stat Card */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1.25rem",
          padding: "1.5rem 1.75rem",
          backgroundColor: "#f0fdf4",
          border: "1px solid #bbf7d0",
          borderRadius: "12px",
          marginBottom: "1.75rem",
        }}
      >
        <div
          style={{
            padding: "0.875rem",
            backgroundColor: "#dcfce7",
            borderRadius: "10px",
            color: "#15803d",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Users style={{ width: "32px", height: "32px" }} />
        </div>
        <div>
          <span style={{ fontSize: "0.85rem", fontWeight: "700", color: "#166534", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Total Patients Recorded
          </span>
          <div style={{ fontSize: "2.25rem", fontWeight: "800", color: "#14532d", lineHeight: "1.1", marginTop: "2px" }}>
            {totalPatients.toLocaleString()}
          </div>
        </div>
      </div>

      {/* Filter Buttons */}
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
                padding: "0.625rem 1.25rem",
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

      {/* Chart Section */}
      <div style={{ borderTop: "1px solid #f1f5f9", paddingTop: "1rem" }}>
        <PatientPieChart data={chartData[selectedTag]} />
      </div>
    </div>
  );
}