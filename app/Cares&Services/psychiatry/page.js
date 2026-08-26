import CollaborativeCare from "@/components/sections/caresSection/psychiatry/collaborativeCare";
import PsychiatryHero from "@/components/sections/caresSection/psychiatry/psychiatryHero";
import PsychiatryOverview from "@/components/sections/caresSection/psychiatry/psychiatryOverview";
import PsychiatryServices from "@/components/sections/caresSection/psychiatry/psychiatryServices";

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