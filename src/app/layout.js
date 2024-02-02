import "./globals.css";

export const metadata = {
  title: "Frenemies",
  description: "Friendly anti-social social media website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
