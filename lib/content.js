// lib/content.js
//
// Small helper library that reads the content files in /content and turns
// them into plain JS data that components can render.
//
// This file is the ONLY place that touches the filesystem. If you ever want
// to swap file-based content for a database or headless CMS later, this is
// the only file you'd need to rewrite — every component that calls these
// functions would keep working unchanged.

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const NEWS_DIR = path.join(process.cwd(), "content", "news");

/**
 * Reads every .md file in content/news, parses its frontmatter, and
 * returns an array of article objects sorted newest-first.
 *
 * Each article looks like:
 * {
 *   slug: "felis-pasgua",          // derived from the filename
 *   title: "...",
 *   date: "2025-12-20",
 *   image: "/images/news/...",
 *   excerpt: "...",
 *   content: "..."                 // raw markdown body, unused on the homepage today
 * }
 */
export function getAllNews() {
  const filenames = fs.readdirSync(NEWS_DIR).filter((name) => name.endsWith(".md"));

  const articles = filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const fullPath = path.join(NEWS_DIR, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || "Untitled",
      date: data.date || null,
      image: data.image || "/images/logo/tgf-logo.png",
      excerpt: data.excerpt || "",
      content,
    };
  });

  // Newest first
  return articles.sort((a, b) => new Date(b.date) - new Date(a.date));
}

/**
 * Returns the N most recent news articles. Used by the homepage's
 * "Latest News & Updates" section.
 */
export function getLatestNews(count = 6) {
  return getAllNews().slice(0, count);
}

/**
 * Formats an ISO date string ("2026-06-01") into the site's display
 * format ("June 1, 2026"). Centralizing this here means every card
 * shows dates the same way.
 */
export function formatDate(isoDate) {
  if (!isoDate) return "";
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
