import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JAuroraX Website",
  description: "This is JAuroraX Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add any head content here like meta tags, title, etc. */}
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
