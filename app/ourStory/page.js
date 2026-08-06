import StoryHero from "@/components/sections/ourStory/storyHero";
import WelcomeSection from "@/components/sections/ourStory/welcomeSection";
import ImpactStats from "@/components/sections/homepage/ImpactStats";
import MissionStatement from "@/components/sections/ourStory/missionStatement";
import Timeline from "@/components/sections/ourStory/timeline";

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