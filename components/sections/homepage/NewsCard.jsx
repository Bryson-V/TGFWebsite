import Image from "next/image";
import Link from "next/link";
import styles from "./NewsCard.module.css";

function getPublisherName(href, customSource) {
  if (customSource) return customSource;
  
  try {
    const url = new URL(href);
    return url.hostname.replace("www.", "").split(".")[0].toUpperCase();
  } catch (error) {
    return "Read Article"; 
  }
}

export default function NewsCard({ title, image, href, tag, source, company, color, date }) {
  const publisherSource = source || company;
  const finalColor = color || getTagColor(tag);
  const publisher = getPublisherName(href, publisherSource);

  const isExternal = typeof href === "string" && /^https?:\/\//i.test(href);

  const linkProps = isExternal
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link 
      href={href} 
      {...linkProps}
      className={styles.card}
      style={{ "--card-theme": finalColor }} 
    >
      <div className={styles.imageWrapper}>
        <Image 
          src={image} 
          alt={title} 
          fill 
          className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {tag && (
          <span className={styles.tag}>
            {tag}
          </span>
        )}
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        
        {/* Bottom Footer Bar */}
        <div className={styles.footerBar}>
          {/* Left Side: Icon FIRST, then Publisher Name */}
          <div className={styles.publisherGroup}>
            {isExternal && (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.linkIcon}>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            )}
            <span className={styles.publisherName}>{publisher}</span>
          </div>

          {/* Right Side: Date */}
          {date && <span className={styles.date}>{date}</span>}
        </div>
      </div>
    </Link>
  );
}