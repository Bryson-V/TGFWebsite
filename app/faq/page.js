import FaqAccordion from "@/components/sections/faq/faqAccordion";
import FaqHero from "@/components/sections/faq/faqHero";
import ResourcesGrid from "@/components/sections/faq/resourcesGrid";

export default function frequentlyAskedQuestions() {
  return (
    <>
      <FaqHero />
      <FaqAccordion />
      <ResourcesGrid />
    </>
  );
}