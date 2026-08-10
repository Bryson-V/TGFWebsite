import CancerCareSupport from "@/components/sections/financialAid/CancerCareSupport";
import FinanceHero from "@/components/sections/financialAid/financeHero";
import FreeOutreachBanner from "@/components/sections/financialAid/FreeOutreachBanner";
import HowItWorks from "@/components/sections/financialAid/HowItWorks";
import PatientNavigationGrid from "@/components/sections/financialAid/PatientNavigationGrid";
import SlidingFeeRedirectCard from "@/components/sections/financialAid/SlidingFeeRedirectCard";

export default function FinancialAid() {
  return (
    <>
      <FinanceHero />
      <FreeOutreachBanner />
      <CancerCareSupport />
      <PatientNavigationGrid />
      <HowItWorks />
      <SlidingFeeRedirectCard />
    </>
  );
}