import NewsArchive from "@/components/sections/about/news/newsArchive";
import NewsHero from "@/components/sections/about/news/newsHero";
import PressArchive from "@/components/sections/about/press/pressArchive";

export default function AllNews() {
  return (
    <>
      <NewsHero />
      <NewsArchive />
      <PressArchive />
    </>
  );
}