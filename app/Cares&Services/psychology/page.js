import CollaborativeCare from "@/components/sections/caresSection/psychiatry/collaborativeCare";
import PsychologyHero from "@/components/sections/caresSection/psychology/psychologyHero";
import PsychologyOverview from "@/components/sections/caresSection/psychology/psychologyOverview";
import PsychologyServices from "@/components/sections/caresSection/psychology/psychologyServices";

export default function AllNews() {
  return (
    <>
      <PsychologyHero />
      <CollaborativeCare />
      <PsychologyOverview />
      <PsychologyServices />
    </>
  );
}