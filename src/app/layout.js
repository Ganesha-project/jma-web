import { Nunito } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingButton } from "@/components/FloatingButon";

const nunito = Nunito({
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  subsets: ["latin"]
})

export const metadata = {
  title: "JMA Indonesia",
  description: "No 1. Seaweed and Sea Cucumber Export From Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth duration-500 transition ease-in-out">
      <head>
        <link rel="icon" type="image/png" sizes="16x16" href="icon.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </head>
      <body className={nunito.className}>
        <section>
          <Navbar />
          <FloatingButton />
          {children}
          <Footer />
        </section>
      </body>
    </html>
  );
}
