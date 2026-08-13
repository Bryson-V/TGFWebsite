import CaresAcronymSection from "@/components/sections/community/cares/CareersAcronymSection";
import CaresCharacterStrengthsTree from "@/components/sections/community/cares/CaresCharacterStrengthsTree";
import CaresHelp from "@/components/sections/community/cares/CaresHelp";
import CaresHero from "@/components/sections/community/cares/CaresHero";
import CaresObjectiveSection from "@/components/sections/community/cares/CaresObjectiveSection";
import CaresProgramSection from "@/components/sections/community/cares/CaresProgramSection";
import CaresTargetAudienceSection from "@/components/sections/community/cares/CaresTargetAudienceSection";
import CaresTestimonialsSlider from "@/components/sections/community/cares/CaresTestimonialsSlider";
import CaresViaSurveySection from "@/components/sections/community/cares/CaresViaSurveySection";
import CaresVideoSection from "@/components/sections/community/cares/CaresVideoSection";
import CaresWhy from "@/components/sections/community/cares/CaresWhy";
import LearnMoreCta from "@/components/sections/community/cares/learnMoreCta";

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