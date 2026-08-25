import ObgynCta from "@/components/sections/caresSection/womenHealth/obgynCta";
import ObgynHero from "@/components/sections/caresSection/womenHealth/obgynHero";
import ObgynServices from "@/components/sections/caresSection/womenHealth/obgynServices";
import ObgynTeamSection from "@/components/sections/caresSection/womenHealth/obgynTeam";

export default function AllNews() {
  return (
    <>
      <ObgynHero />
      <ObgynCta />
      <ObgynServices />
      <ObgynTeamSection />
    </>
  );
}