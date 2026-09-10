import type { Metadata } from "next";
import "./globals.css";
import "katex/dist/katex.min.css";
import { ThemeProvider } from "../context/ThemeContext";

export const metadata: Metadata = {
  title: "Sai Likhith Kanuparthi | Senior Machine Learning Engineer (Paylocity Ignite AI Platform)",
  description:
    "Senior Machine Learning Engineer architecture portfolio and live system simulator for Paylocity Ignite AI & ML Platform. Prepared for Artem Žukov and Muhtasim Billah.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased selection:bg-orange-500 selection:text-white">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
