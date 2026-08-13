import Container from "@/components/ui/Container";
import styles from "./privacyContent.module.css";

/**
 * PrivacyPolicyContent
 * A single modular text component containing the Todu Guam Foundation Privacy Policy,
 * featuring the policy update date at the bottom.
 */
export default function PrivacyPolicyContent() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <h1 className={styles.pageTitle}>PRIVACY POLICY</h1>
        
        <div className={styles.card}>
          <p className={styles.text}>
            Your privacy is critically important to us. At the Todu Guam Foundation we have a few Fundamental Principles:
          </p>
          
          <ul className={styles.list}>
            <li>We don’t ask you for personal information unless we truly need it.</li>
            <li>We don’t share your personal information with anyone except to comply with the law or protect our rights.</li>
            <li>We don’t store personal information on our servers unless required for the on-going operation of one of our services.</li>
            <li>We aim to make it as simple as possible for you to control what’s visible to the public, seen by search engines, kept private, and permanently deleted.</li>
          </ul>

          <p className={styles.text}>
            The Todu Guam Foundation (“Todu Guam Foundation”) operates Toduguam.com. It is the Todu Guam Foundation’s policy to respect your privacy regarding any information we may collect while operating our website.
          </p>

          <h2 className={styles.heading}>Website Visitors</h2>
          <p className={styles.text}>
            Like most website operators, The Todu Guam Foundation collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request. The Todu Guam Foundation’s purpose in collecting non-personally identifying information is to better understand how The Todu Guam Foundation’s visitors use its website. From time to time, the Todu Guam Foundation may release non-personally-identifying information in the aggregate, e.g., by publishing a report on trends in the usage of its website.
          </p>
          <p className={styles.text}>
            The Todu Guam Foundation also collects potentially personally-identifying information like Internet Protocol (IP) addresses for logged in users and for users leaving comments. The Todu Guam Foundation only discloses logged in user and commenter IP addresses under the same circumstances that it uses and discloses personally-identifying information as described below, except that blog commenter IP addresses are visible and disclosed to the administrators of the blog where the comment was left.
          </p>

          <h2 className={styles.heading}>Gathering of Personally-Identifying Information</h2>
          <p className={styles.text}>
            Certain visitors to the Todu Guam Foundation website choose to interact with the Todu Guam Foundation in ways that require the Todu Guam Foundation to gather personally-identifying information. The amount and type of information that the Todu Guam Foundation gathers depends on the nature of the interaction (e.g. Todu Guam Newsletter or when making a donation). Those who engage in transactions with the Todu Guam Foundation are asked to provide additional information, including as necessary the personal and financial information required to process those transactions. In each case, the Todu Guam Foundation collects such information only insofar as is necessary or appropriate to fulfill the purpose of the visitor’s interaction with the Todu Guam Foundation. The Todu Guam Foundation does not disclose personally-identifying information other than as described below. And visitors can always refuse to supply personally-identifying information, with the caveat that it may prevent them from engaging in certain website-related activities.
          </p>

          <h2 className={styles.heading}>Aggregated Statistics</h2>
          <p className={styles.text}>
            The Todu Guam Foundation may collect statistics about the behavior of visitors to its website. For instance, the Todu Guam Foundation may monitor the most popular posts on toduguam.com and may display this information publicly or provide it to others. However, the Todu Guam Foundation does not disclose personally-identifying information other than as described below.
          </p>

          <h2 className={styles.heading}>Protection of Certain Personally-Identifying Information</h2>
          <p className={styles.text}>
            The Todu Guam Foundation discloses potentially personally-identifying and personally-identifying information only to those of its employees, contractors and affiliated organizations that (i) need to know that information in order to process it on the Todu Guam Foundation’s behalf or to provide services available at the Todu Guam Foundation’s website, and (ii) that have agreed not to disclose it to others. The Todu Guam Foundation will not rent or sell potentially personally-identifying and personally-identifying information to anyone. Other than to its employees, contractors and affiliated organizations, as described above, the Todu Guam Foundation discloses potentially personally-identifying and personally-identifying information only in response to a subpoena, court order or other governmental request, or when the Todu Guam Foundation believes in good faith that disclosure is reasonably necessary to protect the property or rights of the Todu Guam Foundation, third parties or the public at large. The Todu Guam Foundation takes all measures reasonably necessary to protect against the unauthorized access, use, alteration or destruction of potentially personally-identifying and personally-identifying information.
          </p>

          <h2 className={styles.heading}>Cookies</h2>
          <p className={styles.text}>
            A cookie is a string of information that a website stores on a visitor’s computer, and that the visitor’s browser provides to the website each time the visitor returns. The Todu Guam Foundation uses cookies to help it’s website (toduguam.com) identify and track visitors, their usage of the toduguam.com website, and their website access preferences. The Todu Guam Foundation’s visitors who do not wish to have cookies placed on their computers should set their browsers to refuse cookies before using the toduguam.com website, with the drawback that certain features of the Todu Guam Foundation’s website may not function properly without the aid of cookies.
          </p>

          <h2 className={styles.heading}>Business Transfers</h2>
          <p className={styles.text}>
            If the Todu Guam Foundation, or substantially all of its assets were acquired, or in the unlikely event that the Todu Guam Foundation goes out of business or enters bankruptcy, user information would be one of the assets that is transferred or acquired by a third party. You acknowledge that such transfers may occur, and that any acquirer of the Todu Guam Foundation may continue to use your personal information as set forth in this policy.
          </p>

          <h2 className={styles.heading}>Disclaimer</h2>
          <p className={styles.text}>
            The materials in this site are provided “as is” and without warranties of any kind either express or implied. To the fullest extent permissible pursuant to applicable law, the Todu Guam Foundation, disclaim all warranties, express or implied, including, but not limited to, implied warranties for a particular purpose.
          </p>
          <p className={styles.text}>
            The Todu Guam Foundation, does not warrant that the functions contained in the materials will be uninterrupted or error-free, that unknown defects will be corrected, or that this site or the server that makes it available are free of viruses or other harmful components. The Todu Guam Foundation, does not warrant or make any representations regarding the use or the results of the use of the materials in this site in terms of their correctness, accuracy, reliability, or otherwise. With that being said, if you see an error or experience a problem on the Todu Guam Foundation Website, contact us so we can fix the problem.
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

          <h2 className={styles.heading}>Privacy Policy Changes</h2>
          <p className={styles.text}>
            Although most changes are likely to be minor, the Todu Guam Foundation may change its Privacy Policy from time to time, and at the sole discretion of the Todu Guam Foundation . The Todu Guam Foundation encourages visitors to frequently check this page for any changes to its Privacy Policy. Your continued use of this site after any change in this Privacy Policy will constitute your acceptance of such change.
          </p>

          <div className={styles.footerNote}>
            Last Updated: August 4, 2026
          </div>
        </div>
      </Container>
    </section>
  );
}