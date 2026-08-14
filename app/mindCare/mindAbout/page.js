import AboutMindCareHero from "@/components/sections/mindCare/about/aboutHero";
import CrisisSupportBanner from "@/components/sections/mindCare/about/crisisSupport";
import FirstVisitSteps from "@/components/sections/mindCare/about/firstVisitSteps";
import AboutMindCareHolisticCare from "@/components/sections/mindCare/about/hollisticCare";
import AboutMindCareImpact from "@/components/sections/mindCare/about/impact";
import MindCareTestimonialsSlider from "@/components/sections/mindCare/about/mindCareTestimonialsSlider";
import AboutMindCareMission from "@/components/sections/mindCare/about/mission";

export default function AllNews() {
  return (
    <>
        <AboutMindCareHero/>
        <CrisisSupportBanner />
        <AboutMindCareMission />
                <FirstVisitSteps />

        <AboutMindCareHolisticCare />
        <AboutMindCareImpact />
        <MindCareTestimonialsSlider />

    </>
  );
}