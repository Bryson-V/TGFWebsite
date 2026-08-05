import CancerCareSupport from "@/components/sections/financialAid/CancerCareSupport";
import EligibilityQuiz from "@/components/sections/financialAid/EligibilityQuiz";
import FreeOutreachBanner from "@/components/sections/financialAid/FreeOutreachBanner";
import HowItWorks from "@/components/sections/financialAid/HowItWorks";
import PatientNavigationGrid from "@/components/sections/financialAid/PatientNavigationGrid";
import SlidingFeeRedirectCard from "@/components/sections/financialAid/SlidingFeeRedirectCard";

export default function FinancialAid() {
  return (
    <>
    <FreeOutreachBanner />
    <CancerCareSupport />
    <PatientNavigationGrid />
    <HowItWorks />
    <SlidingFeeRedirectCard />
    </>
  );
}