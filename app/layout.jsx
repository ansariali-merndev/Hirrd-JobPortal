import { Urbanist } from "next/font/google";
import "./globals.css";
import Header from "@/components/components_/Header";
import Footer from "@/components/components_/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";

const urbanist = Urbanist({
  subsets: ["latin"],
});

export const metadata = {
  title: "Hired | Job Portal",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{ baseTheme: shadesOfPurple }}>
      <html lang="en">
        <body
          className={`${urbanist.className} dark text-white px-4 container mx-auto`}
        >
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
