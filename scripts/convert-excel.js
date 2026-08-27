const fs = require("fs");
const path = require("path");
const XLSX = require("xlsx");

function getAgeRangeGroup(rawAge) {
  const age = parseInt(rawAge, 10);
  if (isNaN(age)) return "Unspecified";
  if (age < 18) return "0–17";
  if (age <= 34) return "18–34";
  if (age <= 49) return "35–49";
  if (age <= 64) return "50–64";
  return "65+";
}

function getRaceCategory(rawRace) {
  if (!rawRace) return "Declined / Unspecified";
  const race = String(rawRace).trim();

  if (/decline/i.test(race) || /unspecified/i.test(race) || race === "" || race === "NA") {
    return "Declined / Unspecified";
  }

  const nhpiList = [
    "Aleutian Islander", "Carolinian", "Chamorro", "Chuukese", "Kosraean",
    "Marshallese", "Micronesian", "Palauan", "Pohnpeian", "Yapese"
  ];
  if (nhpiList.some((r) => r.toLowerCase() === race.toLowerCase()) || /pacific islander/i.test(race)) {
    return "NHPI";
  }

  const asianList = ["Chinese", "Filipino", "Korean", "Japanese", "Asian"];
  if (asianList.some((r) => r.toLowerCase() === race.toLowerCase())) {
    return "Asian";
  }

  const whiteList = ["English", "European", "White"];
  if (whiteList.some((r) => r.toLowerCase() === race.toLowerCase())) {
    return "White";
  }

  return race;
}

function getGenderCategory(rawGender) {
  if (!rawGender) return "Unspecified";
  const g = String(rawGender).trim().toLowerCase();
  if (g === "female") return "Female";
  if (g === "male") return "Male";
  return String(rawGender).trim();
}

function getLocationCategory(rawFacility) {
  if (!rawFacility) return "Other / Unspecified";
  const facility = String(rawFacility).trim();

  if (/mobile/i.test(facility)) {
    return "Mobile Clinic";
  }
  if (/health|wellness|center|main|clinic/i.test(facility)) {
    return "Health & Wellness Center";
  }

  return "Other / Unspecified";
}

function isSelfPayEntry(rawInsurance) {
  if (!rawInsurance) return true;
  const ins = String(rawInsurance).trim().toLowerCase();
  return /self|uninsured|cash|out of pocket|none|n\/a|^$/i.test(ins);
}

const inputPath = path.join(process.cwd(), "public", "excel", "patient-data.xlsx");
const outputPath = path.join(process.cwd(), "public", "excel", "patient-data.json");

console.log("Processing Excel file with location-segmented breakdowns and Self-Pay counts...");

if (!fs.existsSync(inputPath)) {
  console.error(`Error: File not found at ${inputPath}`);
  process.exit(1);
}

const workbook = XLSX.readFile(inputPath);
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const jsonData = XLSX.utils.sheet_to_json(sheet, { defval: "Unspecified" });

function createDataset() {
  return { total: 0, selfPay: 0, age: {}, race: {}, gender: {} };
}

const datasets = {
  all: createDataset(),
  center: createDataset(),
  mobile: createDataset(),
};

jsonData.forEach((row) => {
  const ageKey = Object.keys(row).find((k) => /age/i.test(k));
  const raceKey = Object.keys(row).find((k) => /race/i.test(k));
  const genderKey = Object.keys(row).find((k) => /gender/i.test(k));
  const locationKey = Object.keys(row).find((k) => /facility|location|appointment/i.test(k));
  const insuranceKey = Object.keys(row).find((k) => /insurance|payor|payer|coverage/i.test(k));

  const age = ageKey ? getAgeRangeGroup(row[ageKey]) : "Unspecified";
  const race = raceKey ? getRaceCategory(row[raceKey]) : "Declined / Unspecified";
  const gender = genderKey ? getGenderCategory(row[genderKey]) : "Unspecified";
  const location = locationKey ? getLocationCategory(row[locationKey]) : "Other / Unspecified";
  const isSelfPay = insuranceKey ? isSelfPayEntry(row[insuranceKey]) : true;

  // Record into 'All' dataset
  datasets.all.total++;
  if (isSelfPay) datasets.all.selfPay++;
  datasets.all.age[age] = (datasets.all.age[age] || 0) + 1;
  datasets.all.race[race] = (datasets.all.race[race] || 0) + 1;
  datasets.all.gender[gender] = (datasets.all.gender[gender] || 0) + 1;

  // Record into specific location dataset
  const targetDataset = location === "Mobile Clinic" ? datasets.mobile : location === "Health & Wellness Center" ? datasets.center : null;

  if (targetDataset) {
    targetDataset.total++;
    if (isSelfPay) targetDataset.selfPay++;
    targetDataset.age[age] = (targetDataset.age[age] || 0) + 1;
    targetDataset.race[race] = (targetDataset.race[race] || 0) + 1;
    targetDataset.gender[gender] = (targetDataset.gender[gender] || 0) + 1;
  }
});

const formatAndGroupData = (countObj, totalPatients) => {
  if (!totalPatients) return [];
  let otherCount = 0;
  const result = [];

  Object.entries(countObj).forEach(([name, value]) => {
    const percentage = (value / totalPatients) * 100;
    if (percentage < 5) {
      otherCount += value;
    } else {
      result.push({ name, value, percentage: Math.round(percentage) });
    }
  });

  if (otherCount > 0) {
    const calculatedPct = (otherCount / totalPatients) * 100;
    const displayPct = calculatedPct > 0 && calculatedPct < 1 ? 1 : Math.round(calculatedPct);
    result.push({ name: "Other", value: otherCount, percentage: displayPct });
  }

  return result.sort((a, b) => b.value - a.value);
};

function formatDataset(ds) {
  return {
    totalPatients: ds.total,
    selfPayCount: ds.selfPay,
    selfPayPercentage: ds.total > 0 ? Math.round((ds.selfPay / ds.total) * 100) : 0,
    chartData: {
      age: formatAndGroupData(ds.age, ds.total),
      race: formatAndGroupData(ds.race, ds.total),
      gender: formatAndGroupData(ds.gender, ds.total),
    },
  };
}

const outputData = {
  all: formatDataset(datasets.all),
  center: formatDataset(datasets.center),
  mobile: formatDataset(datasets.mobile),
};

fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2));
console.log(`Success! Exported location-segmented dataset with standalone Self-Pay counts to ${outputPath}`);