import press from "@/content/site-data/press.json";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import NewsCard from "./NewsCard";
import styles from "./PressGrid.module.css";

/**
 * PressGrid
 * External press mentions, from content/site-data/press.json. These are
 * plain links (not markdown articles) because the content lives outside
 * this site — on toduguam.com or third-party outlets.
 */
export default function PressGrid() {
  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading title="Todu Guam in the News" align="center" />
        <div className={styles.grid}>
          {press.map((item) => (
           <NewsCard 
              key={item.title} 
              title={item.title} 
              image={item.image} 
              href={item.href} 
              tag={item.tag}
              source={item.source}
              color={item.color}
            />
          ))} 
        </div>
      </Container>
    </section>
  );
}
