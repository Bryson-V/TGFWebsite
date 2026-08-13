import Container from "@/components/ui/Container";
import styles from "./termsConditionsContent.module.css";

/**
 * TermsConditionsContent
 * A single modular text component containing the Todu Guam Foundation Terms and Conditions.
 */
export default function TermsConditionsContent() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <h1 className={styles.pageTitle}>TERMS &amp; CONDITIONS</h1>
        
        <div className={styles.card}>
          <p className={styles.text}>
            The Todu Guam Foundation (referred to as us or we) is a registered 501(c)(3) non-profit, charitable organization that provides no cost medical and preventative care, education, support to low income children and families in the United States territory of Guam. We operate the website <a href="https://toduguam.com" target="_blank" rel="noopener noreferrer" className={styles.link}>https://toduguam.com</a>.
          </p>
          
          <p className={styles.text}>
            These are the Terms and Conditions which govern each use you make of the donation payment services provided through the Website.
          </p>

          <p className={styles.text}>
            These Terms and Conditions apply separately to each single donation that you make. Except as provided for in section 6, ‘Monthly Donations’, and unless specified by you, they do not form a contract allowing for future or successive transactions to be set up. By confirming on the Website that you wish to make a donation you agree to be bound by these Terms and Conditions for that donation.
          </p>

          <h2 className={styles.heading}>(1) The Donation Services</h2>
          <p className={styles.text}>
            We will use your donation at our discretion but within our stated charitable objectives.
          </p>
          <p className={styles.text}>
            All payments through the Website are to be made by check or with PayPal.
          </p>

          <h2 className={styles.heading}>(2) Unauthorised Card use and Fraudulent Use of Checks</h2>
          <p className={styles.text}>
            If you become aware of fraudulent use of your card or check, or if it is lost or stolen, you must notify your card provider and/or bank.
          </p>

          <h2 className={styles.heading}>(4) Information from you</h2>
          <p className={styles.text}>
            Before we can process a donation you must provide (i) your name, address and email address; and (ii) details of the credit or debit card that you wish to use to fund the donation. Paypal will then use this information to process your donation. It is your responsibility to ensure you have provided the correct information when making a donation.
          </p>
          <p className={styles.text}>
            We won’t share your personal details with any other third party other than is set out in our Privacy Policy. Our Privacy Policy forms part of these Donation Payment Terms and Conditions and by agreeing to these Terms and Conditions you are also agreeing to the way we use and protect your personal information in line with our Privacy Policy.
          </p>

          <h2 className={styles.heading}>(5) Refund Policy</h2>
          <p className={styles.text}>
            If you make an error in your donation please contact us within 14 days either by email at <a href="mailto:foundation@toduguam.com" className={styles.link}>foundation@toduguam.com</a>, by phone at <a href="tel:+16719890731" className={styles.link}>+1-671-989-0731</a>, or by post to: The TODU GUAM FOUNDATION, 125 Tun Jesus Crisostomo Street, Tamuning, GUAM.
          </p>

          <h2 className={styles.heading}>(6) Monthly Donations</h2>
          <p className={styles.text}>
            These Donation Payment Terms and Conditions will only apply to successive donations made through the Website via Paypal where you can set up a monthly donation. When you set up a regular donation you will be scheduling a series of donations to be made on the day of the month that you choose until further notice. You agree that these Terms and Conditions will apply to each of the donations in that series.
          </p>
          <p className={styles.text}>
            To cancel your regular donation please contact us at <a href="mailto:foundation@toduguam.com" className={styles.link}>foundation@toduguam.com</a>.
          </p>

          <h2 className={styles.heading}>(7) General</h2>
          <p className={styles.text}>
            We reserve the right to amend these Donation Payment Terms and Conditions at any time.
          </p>
          <p className={styles.text}>
            These Donation Payment Terms and Conditions are governed by U.S. law and are subject to the exclusive jurisdiction of the United States territorial courts of Guam.
          </p>

          <h2 className={styles.heading}>(8) Disclaimer</h2>
          <p className={styles.text}>
            The Todu Guam Foundation, does not warrant that the functions contained in the materials will be uninterrupted or error-free, that existing unknown defects will be corrected, or that this site or the server that makes it available are clean of viruses or other harmful components.
          </p>
          <p className={styles.text}>
            The Todu Guam Foundation, does not warrant or make any representations regarding the materials in this site in terms of their correctness, accuracy, reliability, or otherwise. With that being said, if you have any questions, please contact us directly. If you see an error or experience a problem on the Todu Guam Foundation Website, contact us so we can amend the problem.
          </p>

          <h3 className={styles.subheading}>To contact us:</h3>
          <ul className={styles.list}>
            <li>
              <strong>E-mail:</strong> <a href="mailto:peoplefirst@toduguam.com" className={styles.link}>peoplefirst@toduguam.com</a>
            </li>
            <li>
              <strong>Postal address:</strong> 125 Tun Jesus Crisostomo Street, Tamuning, Guam
            </li>
          </ul>

          <div className={styles.footerNote}>
            Last Updated: August 4, 2026
          </div>
        </div>
      </Container>
    </section>
  );
}