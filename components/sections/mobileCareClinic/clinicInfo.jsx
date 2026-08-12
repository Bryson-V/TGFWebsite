"use client"

import { useState, useEffect, useRef } from "react";
import { FaStethoscope, FaSyringe, FaBaby, FaVenus, FaUserDoctor } from "react-icons/fa6";
import { MdOutlineHealthAndSafety, MdFamilyRestroom } from "react-icons/md";
import { TbActivityHeartbeat } from "react-icons/tb";
import TruckScene from "./truckScene";
import styles from "./clinicInfo.module.css";

const services = [
  { name: "Primary Care Doctor Visits", icon: FaStethoscope, color: "#0f766e" },
  { name: "General Examinations & Health Screenings", icon: MdOutlineHealthAndSafety, color: "#16a34a" },
  { name: "Sports and School Physicals", icon: FaBaby, color: "#0284c7" },
  { name: "Immunizations & TB Shots", icon: FaSyringe, color: "#dc2626" },
  { name: "Oral Evaluations & Vision Tests", icon: TbActivityHeartbeat, color: "#e11d48" },
  { name: "Women's Health Services", icon: FaVenus, color: "#db2777" },
  { name: "Patient Navigation Support", icon: FaUserDoctor, color: "#9333ea" },
  { name: "Family Planning & Vital Health Services", icon: MdFamilyRestroom, color: "#16a34a" }
];

export default function ClinicInfo() {
  const [isInView, setIsInView] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className={styles.infoSection}>
      <div className={styles.container}>
        
        {/* Left Side: 3D Truck Interaction */}
        <div className={styles.modelWrapper}>
          <div className={styles.interactivePrompt}>
            <p>Drag to rotate and explore the mobile clinic ↺</p>
          </div>
          
          <TruckScene isInView={isInView} />
        </div>

        {/* Right Side: Information & Mission */}
        <div className={styles.textWrapper}>
          <span className={styles.eyebrow}>The Solution</span>
          
          {/* New Action Header */}
          <h2 className={styles.heading}>
            We bring the clinic <span className={styles.highlightText}>to you.</span>
          </h2>
          
          <p className={styles.paragraph}>
            Our Mobile Care Clinic travels around the island, bringing free, comprehensive healthcare directly to the communities of Guam that need it most. Whether you have insurance or not, our doors are open.
          </p>
          
          <div className={styles.highlightBox}>
            <p className={styles.paragraph}>
              At the Mobile Care Clinic, we provide basic and preventive health services. These include:
            </p>
            
            <ul className={styles.serviceList}>
              {services.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <li key={index} className={styles.serviceItem}>
                    <span className={styles.iconBadge}>
                      <IconComponent 
                        className={styles.serviceIcon} 
                        style={{ color: item.color }} 
                      />
                    </span>
                    <span>{item.name}</span>
                  </li>
                );
              })}
            </ul>

            <p className={styles.boldText}>
              All these are done at no cost to the patient.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}