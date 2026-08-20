import PortalCrossLinks from "@/components/sections/patient/healow/portalCrossLinks";
import PortalFeatures from "@/components/sections/patient/healow/portalFeatures";
import PortalHero from "@/components/sections/patient/healow/portalHero";
import PortalSupport from "@/components/sections/patient/healow/portalSupport";

export default function PatientPortal() {
  return (
    <main>
      <PortalHero />
      <PortalFeatures />
      <PortalSupport />
      <PortalCrossLinks />
    </main>
  );
}