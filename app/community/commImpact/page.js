import PatientDataVisualizer from "@/components/sections/community/impact/PatientDataVisualizer.jsx";

export const metadata = {
  title: "Patient Demographics | Todu Guam Foundation",
  description: "Internal patient demographic distributions and statistics.",
};

export default function PatientsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6">
        <PatientDataVisualizer filePath="/excel/patient-data.xlsx" />
    </main>
  );
}