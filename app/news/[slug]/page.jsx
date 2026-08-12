import fs from "fs";
import path from "path";
import matter from "gray-matter";
import styles from "./ArticleContent.module.css";
import MarkdownRenderer from "./MarkdownRenderer";

// 1. Tell Next.js which paths to pre-render during static export
export async function generateStaticParams() {
  const newsDirectory = path.join(process.cwd(), "content/news");

  // Check if directory exists to avoid build crashes if the folder is missing/empty
  if (!fs.existsSync(newsDirectory)) {
    return [];
  }

  const filenames = fs.readdirSync(newsDirectory);

  return filenames
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => ({
      slug: filename.replace(/\.md$/, ""),
    }));
}

// 2. Your existing page component
export default async function NewsArticlePage({ params }) {
  const { slug } = await params;

  const filePath = path.join(process.cwd(), "content/news", `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data: frontmatter, content } = matter(fileContents);

  return (
    <article className={styles.container}>
      <header className={styles.header}>
        {frontmatter?.date && (
          <span className={styles.date}>{frontmatter.date}</span>
        )}
        <h1 className={styles.title}>{frontmatter?.title}</h1>
      </header>

      <div className={styles.articleBody}>
        <MarkdownRenderer content={content} />
      </div>
    </article>
  );
}