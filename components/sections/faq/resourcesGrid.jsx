import Image from '@/components/ui/Image';
import Container from "@/components/ui/Container";
import resourcesData from "@/content/site-data/resourcesData.json";
import styles from "./resourcesGrid.module.css";

/**
 * ResourcesGrid
 * Displays resource preview cards where both the thumbnail image
 * and the preview button open the PDF in a new tab for viewing.
 */
export default function ResourcesGrid() {
  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.heading}>RESOURCES</h2>
        <div className={styles.grid}>
          {resourcesData.map((item) => (
            <div key={item.id} className={styles.card}>
              {/* Clicking the image wrapper opens the PDF preview */}
              <a
                href={item.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.imageLink}
                aria-label={`Preview ${item.title}`}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={520}
                    className={styles.thumbnail}
                  />
                </div>
              </a>
              
              {/* Preview Button */}
              <a
                href={item.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.previewButton}
              >
                PREVIEW
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}