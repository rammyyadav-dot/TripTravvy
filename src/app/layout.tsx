import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Next.js standard tailwind injection
import { TravelDataProvider } from "@/context/TravelDataContext";
import { Navbar } from "@/components/UI/Navbar";
import { Footer } from "@/components/UI/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trip Travvy Elite | Bespoke Luxury Portals",
  description: "Architected luxury vacation packages and premium cruise enclaves.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-slate-50">
      <body className={`${inter.className} flex flex-col min-h-full antialiased text-slate-600`}>
        <TravelDataProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </TravelDataProvider>
      </body>
    </html>
  );
}
