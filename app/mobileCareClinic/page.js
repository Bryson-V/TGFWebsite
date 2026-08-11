import FreeOutreachBanner from "@/components/sections/financialAid/FreeOutreachBanner";
import ClinicInfo from "@/components/sections/mobileCareClinic/clinicInfo";
import MobileCareHero from "@/components/sections/mobileCareClinic/mobileCareHero";

export default function MobileCareClinicPage() {
  return (
    <>
      <MobileCareHero />
      <FreeOutreachBanner />
      <ClinicInfo />
    </>
  );
}