import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const NEWS_DIR = path.join(process.cwd(), 'content/news');

// 1. Format Date Helper
export function formatDate(dateString) {
  if (!dateString) return '';
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  try {
    return new Date(dateString).toLocaleDateString('en-US', options);
  } catch (e) {
    return dateString;
  }
}

// 2. Get All News / Latest News
export function getLatestNews(limit = 10) {
  if (!fs.existsSync(NEWS_DIR)) {
    return [];
  }

  const filenames = fs.readdirSync(NEWS_DIR);
  const articles = filenames
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const slug = file.replace(/\.md$/, '');
      const filePath = path.join(NEWS_DIR, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || '',
        image: data.image || '',
        excerpt: data.excerpt || content.slice(0, 150) + '...',
        content: content.replace(/\r\n/g, '\n'),
        ...data,
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return articles.slice(0, limit);
}

// 3. Get Single Article by Slug
export function getArticleBySlug(slug) {
  if (!slug) return null;

  const cleanSlug = slug.replace(/\.md$/, '');
  const filePath = path.join(NEWS_DIR, `${cleanSlug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug: cleanSlug,
      title: data.title || 'Untitled',
      date: data.date || '',
      image: data.image || '',
      content: content.replace(/\r\n/g, '\n'), // Normalizes Windows line endings to prevent hydration mismatches
      ...data,
    };
  } catch (error) {
    console.error("Error reading markdown file:", error);
    return null;
  }
}