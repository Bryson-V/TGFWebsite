import TmsHero from "@/components/sections/mindCare/tms/tmsHero";
import TmsBreakdown from "@/components/sections/mindCare/tms/tmsBreakdown";
import TmsMachine from "@/components/sections/mindCare/tms/tmsMachine";
import TmsOverview from "@/components/sections/mindCare/tms/tmsOverview";
import TmsFactsMyths from "@/components/sections/mindCare/tms/tmsFactsMyths";

export default function AllNews() {
  return (
    <>
      <TmsHero />
      <TmsBreakdown />
      <TmsOverview />
      <TmsMachine />
      <TmsFactsMyths />
    </>
  );
}