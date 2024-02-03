/* ----- Global Imports ----- */ 
import { ClerkProvider } from "@clerk/nextjs";

/* ----- Project Imports ----- */
import LoginManager from "@/components/Loginmanager";
import "./globals.css";

export const metadata = {
  title: "Frenemies",
  description: "Friendly anti-social social media website",
};

export default function RootLayout({ children }) {

  return (
    <ClerkProvider>
    <html lang="en">
      <body>
        <LoginManager />
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
};
