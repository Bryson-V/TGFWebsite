import StoryHero from "@/components/sections/about/ourStory/storyHero";
import WelcomeSection from "@/components/sections/about/ourStory/welcomeSection";
import ImpactStats from "@/components/sections/homepage/ImpactStats";
import MissionStatement from "@/components/sections/about/ourStory/missionStatement";
import Timeline from "@/components/sections/about/ourStory/timeline";

export default function OurStoryPage() {
  return (
    <>    
      <StoryHero />
      <WelcomeSection /> 
      <ImpactStats />
      <MissionStatement />
      <Timeline />
    </>
  );
}