import CollaborativeCare from "@/components/sections/mindCare/psychiatry/collaborativeCare";
import PsychologyHero from "@/components/sections/mindCare/psychology/psychologyHero";
import PsychologyOverview from "@/components/sections/mindCare/psychology/psychologyOverview";
import PsychologyServices from "@/components/sections/mindCare/psychology/psychologyServices";

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