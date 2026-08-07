import PastEvents from "@/components/sections/preventionEdu/pastEvents";
import PreventionHero from "@/components/sections/preventionEdu/preventionHero";
import ProblemStatement from "@/components/sections/preventionEdu/problemStatement";

export default function OurStoryPage() {
  return (
    <>    
      <PreventionHero />
      <ProblemStatement />
      <PastEvents />
    </>
  );
}