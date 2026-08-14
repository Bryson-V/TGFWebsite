import FinanceHero from "@/components/sections/patient/financialAid/financeHero";
import FreeOutreachBanner from "@/components/sections/patient/financialAid/FreeOutreachBanner";
import HowItWorks from "@/components/sections/patient/financialAid/HowItWorks";
import PatientNavigationGrid from "@/components/sections/patient/financialAid/PatientNavigationGrid";
import SlidingFeeRedirectCard from "@/components/sections/patient/financialAid/SlidingFeeRedirectCard";

export default function FinancialAid() {
  return (
    <>
      <FinanceHero />
      <FreeOutreachBanner />
      <PatientNavigationGrid />
      <HowItWorks />
      <SlidingFeeRedirectCard />
    </>
  );
}