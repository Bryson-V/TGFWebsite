import * as XLSX from "xlsx";

/**
 * Maps a raw numeric age into standardized demographic age brackets.
 */
function getAgeRangeGroup(rawAge) {
  const age = parseInt(rawAge, 10);
  if (isNaN(age)) return "Unspecified";

  if (age < 18) return "0–17";
  if (age <= 34) return "18–34";
  if (age <= 49) return "35–49";
  if (age <= 64) return "50–64";
  return "65+";
}
function getEthnicity(){
    
}

export async function parsePatientExcel(filePath = "/excel/patient-data.xlsx") {
  const response = await fetch(filePath);
  if (!response.ok) throw new Error(`Failed to fetch ${filePath}`);

  const arrayBuffer = await response.arrayBuffer();
  const workbook = XLSX.read(new Uint8Array(arrayBuffer), { type: "array" });
  const sheet = workbook.Sheets[workbook.SheetNames[0]];

  const jsonData = XLSX.utils.sheet_to_json(sheet, { defval: "Unspecified" });
  const totalPatients = jsonData.length;

  const counts = { age: {}, race: {}, gender: {} };

  jsonData.forEach((row) => {
    const ageKey = Object.keys(row).find((k) => /age/i.test(k));
    const raceKey = Object.keys(row).find((k) => /race/i.test(k));
    const genderKey = Object.keys(row).find((k) => /gender/i.test(k));

    // Convert raw age values to standardized range brackets
    const rawAge = ageKey ? row[ageKey] : "Unspecified";
    const age = getAgeRangeGroup(rawAge);

    const race = raceKey ? String(row[raceKey]).trim() : "Unspecified";
    const gender = genderKey ? String(row[genderKey]).trim() : "Unspecified";

    counts.age[age] = (counts.age[age] || 0) + 1;
    counts.race[race] = (counts.race[race] || 0) + 1;
    counts.gender[gender] = (counts.gender[gender] || 0) + 1;
  });

  const formatAndGroupData = (countObj) => {
    let otherCount = 0;
    const result = [];

    Object.entries(countObj).forEach(([name, value]) => {
      const percentage = (value / totalPatients) * 100;

      if (percentage < 5) {
        otherCount += value;
      } else {
        result.push({ name, value });
      }
    });

    if (otherCount > 0) {
      result.push({ name: "Other", value: otherCount });
    }

    return result.sort((a, b) => b.value - a.value);
  };

  return {
    totalPatients,
    chartData: {
      age: formatAndGroupData(counts.age),
      race: formatAndGroupData(counts.race),
      gender: formatAndGroupData(counts.gender),
    },
  };
}