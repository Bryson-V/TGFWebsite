import Calendar from "@/components/sections/about/upcoming/calendar";
import CommOutreachHero from "@/components/sections/about/upcoming/commOutreachHero";
import MapWrapper from "@/components/sections/about/upcoming/MapWrapper";
import MobileCarePromo from "@/components/sections/about/upcoming/mobileCarePromo";
import RequestLocationSection from "@/components/sections/about/upcoming/requestLocation";

export default function Upcoming() {
  return (
    <>    
      <CommOutreachHero />
      <MobileCarePromo />
      <Calendar />
      <MapWrapper />
      <RequestLocationSection />
    </>
  );
}