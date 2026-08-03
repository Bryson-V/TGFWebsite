import Image from "next/image";
import styles from "./NewsCard.module.css";

// 1. Helper to assign brand colors based on the tag name (Fallback)
function getTagColor(tag) {
  if (!tag) return "#00A89E"; 
  
  const t = tag.toLowerCase();
  if (t.includes("health")) return "#00A89E"; 
  if (t.includes("community")) return "#f87171"; 
  if (t.includes("event")) return "#f59e0b"; 
  if (t.includes("education")) return "#1877F2"; 
  
  return "#00A89E"; 
}

// 2. Helper to figure out the publisher's name from the URL
function getPublisherName(href, customSource) {
  if (customSource) return customSource;
  
  try {
    const url = new URL(href);
    const domain = url.hostname.toLowerCase();
    
    if (domain.includes("mbjguam.com")) return "Marianas Business Journal";
    if (domain.includes("guampdn.com")) return "Pacific Daily News";
    if (domain.includes("postguam.com")) return "The Guam Daily Post";
    if (domain.includes("kuam.com")) return "KUAM News";
    if (domain.includes("pacificislandtimes.com")) return "Pacific Island Times";
    
    return domain.replace("www.", "");
  } catch (error) {
    return "Read Article"; 
  }
}

export default function NewsCard({ title, image, href, tag, source, color, date }) {
  const finalColor = color || getTagColor(tag);
  const publisher = getPublisherName(href, source);

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
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
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.linkIcon}>
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            <span className={styles.publisherName}>{publisher}</span>
          </div>

          {/* Right Side: Date */}
          {date && <span className={styles.date}>{date}</span>}
        </div>
      </div>
    </a>
  );
}