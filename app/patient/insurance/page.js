import InsuranceHero from "@/components/sections/patient/insurance/insuranceHero";
import Insurances from "@/components/sections/patient/insurance/insurances";
import NoInsurance from "@/components/sections/patient/insurance/noInsurance";

export default function AllNews() {
  return (
    <>
      <InsuranceHero />
      <Insurances />
      <NoInsurance />
    </>
  );
}