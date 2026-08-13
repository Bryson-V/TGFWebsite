import CollaborativeCare from "@/components/sections/mindCare/psychiatry/collaborativeCare";
import PsychiatryHero from "@/components/sections/mindCare/psychiatry/psychiatryHero";
import PsychiatryOverview from "@/components/sections/mindCare/psychiatry/psychiatryOverview";
import PsychiatryServices from "@/components/sections/mindCare/psychiatry/psychiatryServices";

export default function AllNews() {
  return (
    <>
      <PsychiatryHero />
      <CollaborativeCare />
      <PsychiatryOverview />
      <PsychiatryServices />
    </>
  );
}