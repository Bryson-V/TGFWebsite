import fs from "fs";
import path from "path";
import matter from "gray-matter";
import styles from "./ArticleContent.module.css";
import MarkdownRenderer from "./MarkdownRenderer";

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