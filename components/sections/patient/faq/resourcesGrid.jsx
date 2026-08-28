import Image from '@/components/ui/Image';
import Container from "@/components/ui/Container";
import resourcesData from "@/content/site-data/resourcesData.json";
import styles from "./resourcesGrid.module.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";


export default function ResourcesGrid() {
  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.heading}>RESOURCES</h2>
        <div className={styles.grid}>
          {resourcesData.map((item) => {
            const imageSrc = getImagePath(item.image);
            const pdfSrc = getImagePath(item.pdf);

            return (
              <div key={item.id} className={styles.card}>
                {/* Clicking the image wrapper opens the PDF preview */}
                <a
                  href={pdfSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.imageLink}
                  aria-label={`Preview ${item.title}`}
                >
                  <div className={styles.imageWrapper}>
                    <Image
                      src={imageSrc}
                      alt={item.title}
                      width={400}
                      height={520}
                      className={styles.thumbnail}
                    />
                  </div>
                </a>
                
                {/* Preview Button */}
                <a
                  href={pdfSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.previewButton}
                >
                  PREVIEW
                </a>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}