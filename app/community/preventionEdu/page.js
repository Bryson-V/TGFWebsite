import PastEvents from "@/components/sections/community/preventionEdu/pastEvents";
import PreventionHero from "@/components/sections/community/preventionEdu/preventionHero";
import ProblemStatement from "@/components/sections/community/preventionEdu/problemStatement";

export default function OurStoryPage() {
  return (
    <>    
      <PreventionHero />
      <ProblemStatement />
      <PastEvents />
    </>
  );
}