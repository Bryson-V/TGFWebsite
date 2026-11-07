import DiscountTable from "@/components/sections/patient/slidingFee/discountTable";
import ProgramOverview from "@/components/sections/patient/slidingFee/programOverview";
import ProgressBar from "@/components/sections/patient/slidingFee/progressBar";
import SlidingFeeHero from "@/components/sections/patient/slidingFee/slidingFeeHero";

export default function SlidingFee() {
  return (
    <>
      <SlidingFeeHero />
      <ProgramOverview />
      <DiscountTable />
      <ProgressBar />
    </>
  );
}