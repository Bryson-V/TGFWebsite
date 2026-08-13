import FaqAccordion from "@/components/sections/patient/faq/faqAccordion";
import FaqHero from "@/components/sections/patient/faq/faqHero";
import ResourcesGrid from "@/components/sections/patient/faq/resourcesGrid";

export default function frequentlyAskedQuestions() {
  return (
    <>
      <FaqHero />
      <FaqAccordion />
      <ResourcesGrid />
    </>
  );
}