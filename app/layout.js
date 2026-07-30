export const metadata = {
  title: 'Todu Guam Foundation',
  description: 'Welcome to the TGF Website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Your navigation header can go here */}
        <main>{children}</main>
        {/* Your footer can go here */}
      </body>
    </html>
  );
}
