"use client";

import ReactMarkdown from "react-markdown";
import styles from "./ArticleContent.module.css";

// Helper function to allow http, https, mailto, and tel protocols
function customUrlTransform(url) {
  if (!url) return "";
  const allowedProtocols = ["http:", "https:", "mailto:", "tel:"];
  
  try {
    const isAllowed = allowedProtocols.some((protocol) =>
      url.toLowerCase().startsWith(protocol)
    );
    
    if (isAllowed || url.startsWith("/") || url.startsWith("#")) {
      return url;
    }
  } catch (e) {
    // Fallback
  }

  return url;
}

export default function MarkdownRenderer({ content }) {
  return (
    <ReactMarkdown
      urlTransform={customUrlTransform}
      components={{
        a: ({ href = "", children, ...props }) => {
          const isButton = href.endsWith("#button");
          const cleanHref = isButton ? href.replace("#button", "") : href;

          const isTel = cleanHref.startsWith("tel:");
          const isMailto = cleanHref.startsWith("mailto:");
          const isExternal = cleanHref.startsWith("http") && !isTel && !isMailto;

          return (
            <a
              {...props}
              href={cleanHref}
              className={isButton ? styles.buttonLink : styles.standardLink}
              target={isExternal || isMailto ? "_blank" : undefined}
              rel={isExternal || isMailto ? "noopener noreferrer" : undefined}
              onClick={(e) => {
                // If it's a mailto link, force open in a new browser tab
                if (isMailto) {
                  e.preventDefault();
                  window.open(cleanHref, "_blank", "noopener,noreferrer");
                }
              }}
            >
              {children}
            </a>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}