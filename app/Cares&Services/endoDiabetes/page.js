import EndoCtaBanner from "@/components/sections/caresSection/endoDiabetes/endoCTA";
import EndoHero from "@/components/sections/caresSection/endoDiabetes/endoHero";
import EndoServices from "@/components/sections/caresSection/endoDiabetes/endoServices";
import EndoTeamSection from "@/components/sections/caresSection/endoDiabetes/endoTeam";

export default function AllNews() {
  return (
    <>
    <EndoHero />
    <EndoCtaBanner /> 
    <EndoServices />
    <EndoTeamSection />
    </>
  );
}