export async function getPatientData(filePath = "/excel/patient-data.json") {
  const response = await fetch(filePath);
  if (!response.ok) throw new Error(`Failed to load ${filePath}`);
  return await response.json();
}