import PreparationCTA from "@/components/sections/caresSection/preventiveCare/prepCTA";
import PreventiveHero from "@/components/sections/caresSection/preventiveCare/preventiveHero";
import ScreeningsModule from "@/components/sections/caresSection/preventiveCare/screeningsModule";
import VaccinationsModule from "@/components/sections/caresSection/preventiveCare/vaccinationsModule";

export default function Screening() {
  return (
    <>
    <PreventiveHero />
    <ScreeningsModule />
    <VaccinationsModule />
    </>
  );
}