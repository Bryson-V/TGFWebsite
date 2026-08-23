import NewsArchive from "@/components/sections/about/news/newsArchive";
import EndoCtaBanner from "@/components/sections/caresSection/endoDiabetes/endoCTA";
import EndoHero from "@/components/sections/caresSection/endoDiabetes/endoHero";
import EndoResources from "@/components/sections/caresSection/endoDiabetes/endoResources";
import EndoServices from "@/components/sections/caresSection/endoDiabetes/endoServices";

export default function AllNews() {
  return (
    <>
    <EndoHero />
    <EndoServices />
    <EndoResources />
    <EndoCtaBanner /> 
    </>
  );
}