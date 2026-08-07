import CaresAcronymSection from "@/components/sections/cares/CareersAcronymSection";
import CaresCharacterStrengthsTree from "@/components/sections/cares/CaresCharacterStrengthsTree";
import CaresHero from "@/components/sections/cares/CaresHero";
import CaresObjectiveSection from "@/components/sections/cares/CaresObjectiveSection";
import CaresProgramSection from "@/components/sections/cares/CaresProgramSection";
import CaresTargetAudienceSection from "@/components/sections/cares/CaresTargetAudienceSection";
import CaresTestimonialsSlider from "@/components/sections/cares/CaresTestimonialsSlider";
import CaresViaSurveySection from "@/components/sections/cares/CaresViaSurveySection";
import CaresVideoSection from "@/components/sections/cares/CaresVideoSection";
import CaresWhyAndHelpSection from "@/components/sections/cares/CaresWhyAndHelp";


export default function Cares() {
  return (
    <>
      <CaresHero />
      <CaresVideoSection />
      <CaresObjectiveSection />
      <CaresAcronymSection />
      <CaresProgramSection />
      <CaresTargetAudienceSection />
      <CaresWhyAndHelpSection />
      <CaresTestimonialsSlider />
      <CaresCharacterStrengthsTree />
      <CaresViaSurveySection />
    </>
  );
}