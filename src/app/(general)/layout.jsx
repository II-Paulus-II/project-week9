/* ----- Global Imports ----- */ 

/* ----- Project Imports ----- */
import GeneralHeader from "@/components/generalheader/GeneralHeader";
import "@/styles/general.css";

export default function RootLayout({ children }) {

  return (
      <>
        <GeneralHeader />
        <main className="generalMainElement">
        {children}
        </main>
      </>
  );
};
