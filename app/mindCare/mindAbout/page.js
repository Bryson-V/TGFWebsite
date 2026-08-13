import AboutMindCareHero from "@/components/sections/mindCare/about/aboutHero";
import AboutMindCareHolisticCare from "@/components/sections/mindCare/about/hollisticCare";
import AboutMindCareImpact from "@/components/sections/mindCare/about/impact";
import AboutMindCareMission from "@/components/sections/mindCare/about/mission";

export default function AllNews() {
  return (
    <>
        <AboutMindCareHero/>
        <AboutMindCareMission />
        <AboutMindCareHolisticCare />
        <AboutMindCareImpact />
    </>
  );
}