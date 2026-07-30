import { getArticleBySlug, getLatestNews, formatDate } from "@/lib/content";
import Container from "@/components/ui/Container";
import { notFound } from "next/navigation";

export default async function NewsArticlePage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main style={{ padding: "4rem 0 6rem 0" }}>
      <Container>
        <article style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", lineHeight: "1.2" }}>
            {article.title}
          </h1>
          
          <p style={{ color: "#666", marginBottom: "2rem", fontSize: "1rem" }}>
            {formatDate(article.date)}
          </p>

          {article.image && (
            <div style={{ marginBottom: "2.5rem", borderRadius: "8px", overflow: "hidden" }}>
              <img 
                src={article.image} 
                alt={article.title} 
                style={{ width: "100%", maxHeight: "450px", objectFit: "cover", display: "block" }} 
              />
            </div>
          )}

          {/* Clean styled prose container for article content */}
          <div 
            style={{ lineHeight: "1.8", fontSize: "1.1rem", color: "#333" }}
            dangerouslySetInnerHTML={{ 
              __html: article.content.replace(/\n/g, '<br />') 
            }} 
          />
        </article>
      </Container>
    </main>
  );
}

export async function generateStaticParams() {
  const articles = getLatestNews(100);
  return articles.map((article) => ({
    slug: article.slug,
  }));
}