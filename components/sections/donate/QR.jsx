import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import styles from "./QR.module.css";

export default function QRModule() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <p className={styles.eyebrow}>WAYS TO GIVE</p>
          <h2 className={styles.title}>Support our mission with a donation</h2>
        </div>

        <div className={styles.grid}>
          {/* Left Column: QR Code & Clickable Link */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>SCAN TO DONATE</h3>
            <div className={styles.qrContainer}>
              <div className={styles.qrBox}>
                <Image 
                  src="/images/donate/DonateQR.jpg" 
                  alt="QR code to donate to Todu Guam Foundation"
                  width={250}
                  height={250}
                  className={styles.qrImage}
                />
              </div>
              <p className={styles.qrInstruction}>Point your camera here</p>
              
              {/* Clickable link updated */}
              <Link 
                href="https://www.paypal.com/donate/?hosted_button_id=N7E56HC6NXHUE&source=qr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.qrLink}
              >
                Or click here to donate online →
              </Link>
            </div>
          </div>

          {/* Right Column: Online & Mail Options */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>DONATE ONLINE</h3>
            
            <div className={styles.donateOption}>
              <div className={styles.optionHeader}>
                <span className={styles.paypalText}><strong>Pay</strong>Pal</span>
                <p className={styles.optionDesc}>Fast, secure, and no account required.</p>
              </div>
              <Link 
                href="https://www.paypal.com/donate/?hosted_button_id=N7E56HC6NXHUE&source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.primaryButton}
              >
                Donate with PayPal
              </Link>
            </div>

            <div className={styles.divider}></div>

            <div className={styles.donateOption}>
              <div className={styles.optionHeader}>
                <h4 className={styles.optionTitle}>Check or Money Order</h4>
                <p className={styles.optionDesc}>
                  Make payable to <strong>Todu Guam Foundation</strong> and mail to: <br/>
                  125 Tun Jesus Crisostomo St, Tamuning, Guam 96913.
                </p>
              </div>
              <Link href="mailto:info@toduguam.com" className={styles.secondaryButton}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Tax Deductible Callout */}
        <div className={styles.taxCallout}>
          <p>
            Todu Guam Foundation is a 501(c)(3) nonprofit. All donations are tax-deductible to the fullest extent allowed by law. 
            <br />
            <strong> For tax write-off documentation, please send us an email with proof of your donation and we will gladly prepare your receipt.</strong>
          </p>
        </div>
      </Container>
    </section>
  );
}