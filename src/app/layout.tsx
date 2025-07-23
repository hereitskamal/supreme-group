
import "./globals.css";
import { Source_Serif_4 } from "next/font/google";

const sourceSans = Source_Serif_4({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700"],
  variable: "--font-source-sans",
});

export const metadata = {
  title: "Kamal sharma",
  description: "Experienced MERN Stack Developer skilled in building scalable web applications",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sourceSans.variable}>
      <body className="min-h-screen bg-white text-gray-900 antialiased font-source-sans">
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
