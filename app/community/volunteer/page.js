import OutreachGallery from "@/components/sections/community/outreachGallery/outreachGallery";
import VolunteerHero from "@/components/sections/community/volunteer/volunteerHero";
import VolunteerRoles from "@/components/sections/community/volunteer/volunteerRoles";

export default function Volunteer() {
  return (
    <>
      <VolunteerHero />
      <VolunteerRoles />
      <OutreachGallery />
    </>
  );
}