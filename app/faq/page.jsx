import FaqAccordion from "@/components/sections/faq/faqAccordion";
import FaqHero from "@/components/sections/faq/faqHero";
import ResourcesGrid from "@/components/sections/faq/resourcesGrid";

// Import other relevant sections for your "Our Story" page here

/**
 * OurStoryPage
 * 
 * The "Our Story" page component featuring the new StoryHero banner
 * and subsequent story-specific sections.
 */
export default function OurStoryPage() {
  return (
    <>
      <FaqHero />
      <FaqAccordion />
      <ResourcesGrid />
      {/* Add your other "Our Story" sections here */}
    </>
  );
}