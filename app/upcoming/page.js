import Calendar from "@/components/sections/upcoming/calendar";
import MapWrapper from "@/components/sections/upcoming/MapWrapper";
import RequestLocation from "@/components/sections/upcoming/requestLocation";
import UpcomingHero from "@/components/sections/upcoming/upcomingHero";

export default function UpcomingPage() {
  return (
    <>    
      <UpcomingHero />
      <Calendar />
      <MapWrapper />
      <RequestLocation />
    </>
  );
}