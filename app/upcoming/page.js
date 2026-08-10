import Calendar from "@/components/sections/upcoming/calendar";
import StandaloneMap from "@/components/sections/upcoming/map";
import UpcomingHero from "@/components/sections/upcoming/upcomingHero";

export default function UpcomingPage() {
  return (
    <>    
      <UpcomingHero />
      <Calendar />
      <StandaloneMap />
    </>
  );
}