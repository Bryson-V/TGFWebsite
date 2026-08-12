import FreeOutreachBanner from "@/components/sections/financialAid/FreeOutreachBanner";
import ClinicInfo from "@/components/sections/mobileCareClinic/clinicInfo";
import InsuranceStats from "@/components/sections/mobileCareClinic/insuranceStats";
import MobileCareHero from "@/components/sections/mobileCareClinic/mobileCareHero";
import Partner from "@/components/sections/mobileCareClinic/partners";

export default function MobileCareClinicPage() {
  return (
    <>
      <MobileCareHero />
      <FreeOutreachBanner />
      <InsuranceStats />
      <ClinicInfo />
      <Partner />
    </>
  );
}