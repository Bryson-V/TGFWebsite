import Hero from "@/components/sections/homepage/Hero";
import WhyWereHere from "@/components/sections/homepage/WhyWereHere";
import ProgramsWheel from "@/components/sections/homepage/ProgramsWheel";
import ImpactStats from "@/components/sections/homepage/ImpactStats";
import GetInvolved from "@/components/sections/homepage/GetInvolved";
import NewsGrid from "@/components/sections/homepage/NewsGrid";
import PressGrid from "@/components/sections/homepage/PressGrid";
import NewsletterSignup from "@/components/sections/homepage/NewsletterSignup";

/**
 * Homepage
 *
 * This page is intentionally just a list of sections. All the actual
 * markup/logic lives in components/sections/* — to reorder the homepage,
 * reorder these lines. To add a new section, build a component in
 * components/sections/homepage and drop it in here.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyWereHere />
      <ProgramsWheel />
      <ImpactStats />
      <GetInvolved />
      <NewsGrid />
      <PressGrid />
      <NewsletterSignup />
    </>
  );
}
