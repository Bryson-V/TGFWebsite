import StoryHero from "@/components/sections/ourStory/storyHero";
import WelcomeSection from "@/components/sections/ourStory/welcomeSection";
import ImpactStats from "@/components/sections/homepage/ImpactStats";
import MissionStatement from "@/components/sections/ourStory/missionStatement";
import Timeline from "@/components/sections/ourStory/timeline";

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
      <StoryHero />
      <WelcomeSection /> 
      <ImpactStats />
      <MissionStatement />
      <Timeline />
      {/* Add your other "Our Story" sections here */}
    </>
  );
}