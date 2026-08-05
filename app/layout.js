import { PT_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Self-hosts PT Sans at build time (no external request in the browser,
// no font-swap layout shift). Exposed as a CSS variable and wired up in
// globals.css.
const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt-sans",
  display: "swap",
});

export const metadata = {
  title: "The Todu Guam Foundation's Official Site",
  description: "Getting Guam Healthy One Man, One Woman, & One Child at A Time!",
  openGraph: {
    title: "The Todu Guam Foundation's Official Site",
    description: "Getting Guam Healthy One Man, One Woman, & One Child at A Time!",
    url: "https://toduguam.com/",
    siteName: "Todu Guam Foundation",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={ptSans.variable} data-scroll-behavior="smooth">
      <body>
        <Header />
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
