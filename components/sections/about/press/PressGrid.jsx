import press from "@/content/site-data/press.json";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import NewsCard from "../../homepage/NewsCard";
import Link from "next/link";
import { formatDate } from "@/lib/content";
import styles from "./PressGrid.module.css";

/**
 * PressGrid
 * External press mentions, from content/site-data/press.json. These are
 * plain links (not markdown articles) because the content lives outside
 * this site — on toduguam.com or third-party outlets.
 */
export default function PressGrid() {
  const limitedPress = [...press]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 4);

  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading title="Latest Press Coverage" align="center" />
        
        <div className={styles.grid}>
          {limitedPress.map((item) => (
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

        {/* Bottom Action Bar with View All text link aligned to the right */}
        <div className={styles.footerAction}>
          <Link href="about/allNews" className={styles.viewAllLink}>
            View All &rarr;
          </Link>
        </div>
      </Container>
    </section>
  );
}