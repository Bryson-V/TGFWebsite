import CervicalCalloutModule from "@/components/sections/healingForWomen/cervicalCallout";
import CervicalCancerModule from "@/components/sections/healingForWomen/cervicalCancerModule";
import CervicalStatsModule from "@/components/sections/healingForWomen/cervicalStats";
import HealingHero from "@/components/sections/healingForWomen/healingHero";
import HealingServicesModule from "@/components/sections/healingForWomen/healingServices";
import WomenHealthModule from "@/components/sections/healingForWomen/womenHealth";

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