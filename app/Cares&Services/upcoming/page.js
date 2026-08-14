import Calendar from "@/components/sections/caresSection/upcoming/calendar";
import MapWrapper from "@/components/sections/caresSection/upcoming/MapWrapper";
import RequestLocationSection from "@/components/sections/caresSection/upcoming/requestLocation";
import UpcomingHero from "@/components/sections/caresSection/upcoming/upcomingHero";
export default function UpcomingPage() {
  return (
    <>    
      <UpcomingHero />
      <Calendar />
      <MapWrapper />
      <RequestLocationSection />
    </>
  );
}