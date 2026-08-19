import { getLatestNews, formatDate } from "@/lib/content";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import NewsCard from "../../homepage/NewsCard";
import styles from "./NewsGrid.module.css";

/**
 * NewsGrid
 * Pulls the latest articles from content/news/*.md via lib/content.js.
 * To publish a new story, add a new .md file to content/news — see
 * content/README.md for the exact steps. No code changes required.
 */
export default function NewsArchive() {
  // Sort from newest to oldest based on the date field
  const articles = getLatestNews(100).sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading title="All News & Updates" align="center" />
        <div className={styles.grid}>
          {articles.map((article, index) => (
            <NewsCard
              key={article.slug}
              title={article.title}
              image={article.image}
              href={`/news/${article.slug}`}
              date={formatDate(article.date)}
              excerpt={article.excerpt}
              color="#1A365D"
              // Eagerly load only the first image above the fold
              priority={index === 0} 
            />
          ))}
        </div>
      </Container>
    </section>
  );
}