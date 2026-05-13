import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Etsy Listing SEO Scanner – Rank Higher on Etsy",
  description: "Analyze your Etsy listings and get actionable keyword, tag, and title optimizations to improve your search ranking and drive more sales."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a0aee582-55c0-4a26-b363-ed186405f515"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
