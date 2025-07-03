// app/layout.tsx or RootLayout.tsx
import Footer from "@/components/layout/Footer";
import "./globals.css";
import { Manrope } from "next/font/google";
import Header from "@/components/layout/Header";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "Supreme Group",
  description: "Providing Soft Trims and NVH solutions for seamless rides",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="min-h-screen bg-white text-gray-900 antialiased font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
