import OutreachGallery from "@/components/sections/community/outreachGallery/outreachGallery";
import VolunteerHero from "@/components/sections/about/volunteer/volunteerHero";
import VolunteerRoles from "@/components/sections/about/volunteer/volunteerRoles";

export default function Volunteer() {
  return (
    <>
      <VolunteerHero />
      <VolunteerRoles />
      <OutreachGallery />
    </>
  );
}