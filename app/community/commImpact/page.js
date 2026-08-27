import CancerCareSupport from "@/components/sections/community/impact/CancerCareSupport";
import ImpactHero from "@/components/sections/community/impact/impactHero";
import Partner from "@/components/sections/community/impact/partners";
import PatientDataVisualizer from "@/components/sections/community/impact/PatientDataVisualizer.jsx";

export default function PatientsPage() {
  return (
    <>
        <ImpactHero />
        <PatientDataVisualizer filePath="/excel/patient-data.xlsx" />
        <Partner />
    </>
  );
}