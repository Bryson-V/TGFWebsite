import CaresAcronymSection from "@/components/sections/cares/CareersAcronymSection";
import CaresCharacterStrengthsTree from "@/components/sections/cares/CaresCharacterStrengthsTree";
import CaresHelp from "@/components/sections/cares/CaresHelp";
import CaresHero from "@/components/sections/cares/CaresHero";
import CaresObjectiveSection from "@/components/sections/cares/CaresObjectiveSection";
import CaresProgramSection from "@/components/sections/cares/CaresProgramSection";
import CaresTargetAudienceSection from "@/components/sections/cares/CaresTargetAudienceSection";
import CaresTestimonialsSlider from "@/components/sections/cares/CaresTestimonialsSlider";
import CaresViaSurveySection from "@/components/sections/cares/CaresViaSurveySection";
import CaresVideoSection from "@/components/sections/cares/CaresVideoSection";
import CaresWhy from "@/components/sections/cares/CaresWhy";
import LearnMoreCta from "@/components/sections/cares/learnMoreCta";

export default function Cares() {
  return (
    <>
    {/* 1. Introduction & Mission */}
    <CaresHero />
    <CaresAcronymSection />
    <CaresObjectiveSection />
    <CaresVideoSection />
    <CaresWhy />

    {/* 2. Empathy Hook & Peer Proof */}
    <CaresTargetAudienceSection />
    <CaresTestimonialsSlider />

    {/* 3. Program Structure */}
    <CaresProgramSection />

    {/* 4. Curriculum & Interactive Tool */}
    <CaresHelp />
    <CaresCharacterStrengthsTree />

    {/* 5. Next Steps / Resources */}
    <LearnMoreCta />
    <CaresViaSurveySection />
    </>
  );
}