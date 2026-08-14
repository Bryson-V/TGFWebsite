import ClinicInfo from "@/components/sections/community/mobileCareClinic/clinicInfo";
import InsuranceStats from "@/components/sections/community/mobileCareClinic/insuranceStats";
import MobileCareHero from "@/components/sections/community/mobileCareClinic/mobileCareHero";
import FreeOutreachBanner from "@/components/sections/patient/financialAid/FreeOutreachBanner";

export default function MobileCareClinic() {
  return (
    <>
      <MobileCareHero />
      <FreeOutreachBanner />
      <InsuranceStats />
      <ClinicInfo />
    </>
  );
}