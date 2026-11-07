import InsuranceHero from "@/components/sections/patient/insurance/insuranceHero";
import Insurances from "@/components/sections/patient/insurance/insurances";
import NoInsurance from "@/components/sections/patient/insurance/noInsurance";

export default function Insurance() {
  return (
    <>
      <InsuranceHero />
      <Insurances />
      <NoInsurance />
    </>
  );
}