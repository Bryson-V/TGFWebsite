import styles from "./servicesTicker.module.css";
import servicesData from "@/content/site-data/services.json";

import { FaStethoscope, FaSyringe, FaBaby, FaFemale } from "react-icons/fa";
import { MdOutlineHealthAndSafety, MdFamilyRestroom } from "react-icons/md";
import { TbActivityHeartbeat } from "react-icons/tb";
import { FaUserDoctor } from "react-icons/fa6";

const iconMap = {
  FaStethoscope: FaStethoscope,
  MdOutlineHealthAndSafety: MdOutlineHealthAndSafety,
  FaSyringe: FaSyringe,
  FaBaby: FaBaby,
  FaFemale: FaFemale,
  TbActivityHeartbeat: TbActivityHeartbeat,
  FaUserDoctor: FaUserDoctor,
  MdFamilyRestroom: MdFamilyRestroom
};

export default function ServicesTicker() {
  return (
    <div className={styles.tickerWrapper}>
      <div className={styles.tickerTrack}>
        {/* Read services from JSON file */}
        {[...servicesData, ...servicesData].map((service, index) => {
          
          const IconComponent = iconMap[service.iconName]; 
          
          return (
            <div key={index} className={styles.tickerItem}>
              <span 
                className={styles.bullet} 
                style={{ color: service.color || "#99f6e4" }} // Default color
              >
                {IconComponent ? <IconComponent /> : "✦"}
              </span>
              {service.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}