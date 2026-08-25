import Calendar from "@/components/sections/community/commOutreach/calendar";
import CommOutreachHero from "@/components/sections/community/commOutreach/commOutreachHero";
import MapWrapper from "@/components/sections/community/commOutreach/MapWrapper";
import MobileCarePromo from "@/components/sections/community/commOutreach/mobileCarePromo";
import RequestLocationSection from "@/components/sections/community/commOutreach/requestLocation";

export default function CommunityOutreachPage() {
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