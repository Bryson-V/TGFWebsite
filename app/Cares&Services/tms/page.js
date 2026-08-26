import TmsHero from "@/components/sections/caresSection/tms/tmsHero";
import TmsBreakdown from "@/components/sections/caresSection/tms/tmsBreakdown";
import TmsMachine from "@/components/sections/caresSection/tms/tmsMachine";
import TmsOverview from "@/components/sections/caresSection/tms/tmsOverview";
import TmsFactsMyths from "@/components/sections/caresSection/tms/tmsFactsMyths";
import TmsEligibility from "@/components/sections/caresSection/tms/tmsEligibility";
import BrainsWayCard from "@/components/sections/caresSection/tms/brainsWay";

export default function AllNews() {
  return (
    <>
      <TmsHero />
      <TmsBreakdown />
      <TmsOverview />
      <TmsMachine />
      <BrainsWayCard />
      <TmsEligibility />
      <TmsFactsMyths />
    </>
  );
}