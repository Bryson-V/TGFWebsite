import Hero from "@/components/sections/Hero";
import WhyWereHere from "@/components/sections/WhyWereHere";
import ProgramsGrid from "@/components/sections/ProgramsGrid";
import ImpactStats from "@/components/sections/ImpactStats";
import GetInvolved from "@/components/sections/GetInvolved";
import NewsGrid from "@/components/sections/NewsGrid";
import PressGrid from "@/components/sections/PressGrid";
import NewsletterSignup from "@/components/sections/NewsletterSignup";

/**
 * Homepage
 *
 * This page is intentionally just a list of sections. All the actual
 * markup/logic lives in components/sections/* — to reorder the homepage,
 * reorder these lines. To add a new section, build a component in
 * components/sections/ and drop it in here.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyWereHere />
      <ProgramsGrid />
      <ImpactStats />
      <GetInvolved />
      <NewsGrid />
      <PressGrid />
      <NewsletterSignup />
    </>
  );
}
