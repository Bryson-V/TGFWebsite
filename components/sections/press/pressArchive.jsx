import press from "@/content/site-data/press.json";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import NewsCard from "../homepage/NewsCard";
import styles from "./PressGrid.module.css";
import { formatDate } from "@/lib/content";

/**
 * PressGrid
 * External press mentions, from content/site-data/press.json. These are
 * plain links (not markdown articles) because the content lives outside
 * this site — on toduguam.com or third-party outlets.
 */
export default function PressArchive() {
  // Sort from newest to oldest based on the date field
  const sortedPress = [...press].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading title="Press Coverage" align="center" />
        <div className={styles.grid}>
          {sortedPress.map((item) => (
           <NewsCard 
              key={item.title} 
              title={item.title} 
              image={item.image} 
              href={item.href}
              tag={item.tag}
              source={item.source}
              color={item.color}
              date={formatDate(item.date)}
            />
          ))} 
        </div>
      </Container>
    </section>
  );
}