import { getLatestNews, formatDate } from "@/lib/content";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import NewsCard from "../homepage/NewsCard";
import styles from "./NewsGrid.module.css";

/**
 * NewsGrid
 * Pulls the latest articles from content/news/*.md via lib/content.js.
 * To publish a new story, add a new .md file to content/news — see
 * content/README.md for the exact steps. No code changes required.
 */
export default function NewsArchive() {
  const articles = getLatestNews(100).sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <section className={styles.section}>
      <Container>
        {/* Added align="center" to perfectly match the other sections */}
        <SectionHeading title="All News & Updates" align="center" />
        <div className={styles.grid}>
          {articles.map((article) => (
            <NewsCard
              key={article.slug}
              title={article.title}
              image={article.image}
              href={`/news/${article.slug}`}
              date={formatDate(article.date)}
              excerpt={article.excerpt}
              color="#1A365D" 
            />
          ))}
        </div>
      </Container>
    </section>
  );
}