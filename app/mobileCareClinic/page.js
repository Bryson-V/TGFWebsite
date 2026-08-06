import FreeOutreachBanner from "@/components/sections/financialAid/FreeOutreachBanner";
import MobileCareHero from "@/components/sections/mobileCareClinic/mobileCareHero";
import ServicesTicker from "@/components/sections/mobileCareClinic/servicesTicker";

export default function MobileCareClinicPage() {
  return (
    <>
      <MobileCareHero />
      <ServicesTicker />
      <FreeOutreachBanner />
    </>
  );
}