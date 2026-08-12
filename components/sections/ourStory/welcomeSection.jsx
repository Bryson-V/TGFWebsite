import Image from '@/components/ui/Image';
import Container from "@/components/ui/Container";
import styles from "./welcomeSection.module.css";

export default function WelcomeSection() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        {/* Left Side: Image */}
        <div className={styles.imageWrapper}>
          <Image
            src="/images/story/founders.webp" // Update path to your image
            alt="TGF Founders"
            fill
            sizes="(max-width: 992px) 100vw, 450px"
            className={styles.image}
            priority
          />
        </div>

        {/* Right Side: Text Content */}
        <div className={styles.content}>
          <h2 className={styles.title}>
            Welcome to the Todu Guam Foundation (TGF)!
          </h2>

          <div className={styles.bodyText}>
            <p>
              Established in 2016, TGF is an esteemed 501(c)(3) non-profit
              organization dedicated to addressing health disparities and
              promoting health equity on the beautiful island of Guam.
            </p>

            <p>
              Our journey began under the visionary leadership of former Senator
              Dennis G. Rodriguez, Jr., who served as Chairman of the Committee
              on Health in the 31st to 34th Guam Legislature. Recognizing the
              alarming health disparities and inequities prevalent in our
              community, Senator Rodriguez envisioned a transformative approach to
              ensuring access to healthcare for the most vulnerable populations.
            </p>

            <p>
              In pursuit of this vision, Senator Rodriguez, his wife Lena, and
              their family took a groundbreaking step by inaugurating Guam's
              first mobile health clinic. This milestone was accompanied by a
              remarkable medical outreach program, which provided essential
              healthcare services to uninsured and underinsured residents of
              Guam, entirely free of charge.
            </p>

            <p>
              Inspired by the success of these early initiatives, the Todu Guam
              Foundation was officially established. Since then, TGF has
              garnered widespread recognition, not only locally but also
              nationally, for its unwavering commitment to its mission of
              delivering vital primary healthcare, education, and support to
              our community.
            </p>

            <p>
              At TGF, we firmly believe in breaking down barriers to healthcare
              access, empowering individuals, and advocating for health equity.
              Through strategic collaborations, community partnerships, and a
              dedicated team of healthcare professionals, we strive to create
              a healthier, more equitable future for all residents of Guam.
            </p>
          </div>
        </div>

        {/* Right Accent Bar */}
        <div className={styles.accentBar} />
      </Container>
    </section>
  );
}