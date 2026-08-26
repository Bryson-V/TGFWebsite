import AboutMindCareHero from "@/components/sections/caresSection/about/aboutHero";
import CrisisSupportBanner from "@/components/sections/caresSection/about/crisisSupport";
import FirstVisitSteps from "@/components/sections/caresSection/about/firstVisitSteps";
import AboutMindCareHolisticCare from "@/components/sections/caresSection/about/hollisticCare";
import AboutMindCareImpact from "@/components/sections/caresSection/about/impact";
import MindCareTestimonialsSlider from "@/components/sections/caresSection/about/mindCareTestimonialsSlider";
import AboutMindCareMission from "@/components/sections/caresSection/about/mission";

export default function AllNews() {
  return (
    <>
      <AboutMindCareHero />
      <CrisisSupportBanner />
      <AboutMindCareMission />
      <FirstVisitSteps />
      <AboutMindCareHolisticCare />
      <AboutMindCareImpact />
      <MindCareTestimonialsSlider />
    </>
  );
}