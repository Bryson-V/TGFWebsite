import TmsHero from "@/components/sections/mindCare/tms/tmsHero";
import TmsBreakdown from "@/components/sections/mindCare/tms/tmsBreakdown";
import TmsMachine from "@/components/sections/mindCare/tms/tmsMachine";
import TmsOverview from "@/components/sections/mindCare/tms/tmsOverview";
import TmsFactsMyths from "@/components/sections/mindCare/tms/tmsFactsMyths";
import TmsEligibility from "@/components/sections/mindCare/tms/tmsEligibility";
import BrainsWayCard from "@/components/sections/mindCare/tms/brainsWay";

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