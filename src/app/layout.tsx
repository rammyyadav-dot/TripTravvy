import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; 
import { TravelDataProvider } from "@/context/TravelDataContext";
import { Navbar } from "@/components/UI/Navbar";
import { Footer } from "@/components/UI/Footer";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Trip Travvy Elite",
    default: "Trip Travvy Elite | Bespoke Luxury Portals",
  },
  description: "Architected luxury vacation packages and premium cruise enclaves.",
  metadataBase: new URL("https://triptravvyelite.com"),
  openGraph: {
    title: "Trip Travvy Elite",
    description: "Architected luxury vacation packages and premium cruise enclaves.",
    url: "https://triptravvyelite.com",
    siteName: "Trip Travvy Elite",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Trip Travvy Elite" }],
    locale: "en_US",
    type: "website",
  },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-slate-50 scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col min-h-full antialiased text-slate-600`}>
        {/* Visual feedback for page transitions */}
        <NextTopLoader color="#D4AF37" showSpinner={false} height={3} /> 
        
        <TravelDataProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </TravelDataProvider>

        {/* Global sleek notification provider */}
        <Toaster richColors position="top-right" closeButton />
      </body>
    </html>
  );
}
