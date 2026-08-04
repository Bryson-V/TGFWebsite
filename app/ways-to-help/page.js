import QRModule from "@/components/sections/volunteer/QR";
import VolunteerHero from "@/components/sections/volunteer/volunteerHero";
import VolunteerRoles from "@/components/sections/volunteer/volunteerRoles";

export default function Volunteer() {
  return (
    <>
      <VolunteerHero />
      <VolunteerRoles />
      <QRModule />
    </>
  );
}