import PrimaryCareCta from "@/components/sections/caresSection/primary/primaryCta";
import PrimaryCareHero from "@/components/sections/caresSection/primary/primaryHero";
import PrimaryCareResources from "@/components/sections/caresSection/primary/primaryResources";
import PrimaryCareServices from "@/components/sections/caresSection/primary/primaryServices";
import PrimaryCareTeamSection from "@/components/sections/caresSection/primary/primaryTeam";

export default function AllNews() {
  return (
    <>
    <PrimaryCareHero />
    <PrimaryCareCta />
    <PrimaryCareServices />
    <PrimaryCareResources />
    <PrimaryCareTeamSection />
    </>
  );
}