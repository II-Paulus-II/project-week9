/* ----- Third Party Imports ----- */
import { ClerkProvider } from "@clerk/nextjs";

/* ----- Project Imports ----- */
import "@/styles/globals.css";

export const metadata = {
  title: "Frenemies",
  description: "Friendly anti-social social media website",
};

export default async function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}