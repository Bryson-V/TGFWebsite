import CervicalCalloutModule from "@/components/sections/community/healingForWomen/cervicalCallout";
import CervicalCancerModule from "@/components/sections/community/healingForWomen/cervicalCancerModule";
import CervicalStatsModule from "@/components/sections/community/healingForWomen/cervicalStats";
import HealingHero from "@/components/sections/community/healingForWomen/healingHero";
import HealingServicesModule from "@/components/sections/community/healingForWomen/healingServices";
import WomenHealthModule from "@/components/sections/community/healingForWomen/womenHealth";

export default function Healing() {
  return (
    <>
    <HealingHero />
    <WomenHealthModule />
    <CervicalCancerModule />
    <CervicalStatsModule />
    <CervicalCalloutModule />
    <HealingServicesModule />
    </>
  );
}