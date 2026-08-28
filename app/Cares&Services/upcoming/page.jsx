import Calendar from "@/components/sections/caresSection/upcoming/calendar";
import CommOutreachHero from "@/components/sections/caresSection/upcoming/commOutreachHero";
import MapWrapper from "@/components/sections/caresSection/upcoming/MapWrapper";
import MobileCarePromo from "@/components/sections/caresSection/upcoming/mobileCarePromo";
import RequestLocationSection from "@/components/sections/caresSection/upcoming/requestLocation";

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