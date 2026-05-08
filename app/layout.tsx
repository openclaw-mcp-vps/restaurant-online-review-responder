import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReviewReply — Auto-generate responses to restaurant reviews",
  description: "Monitors Google & Yelp reviews, generates brand-consistent responses with AI, and helps restaurant owners manage their online reputation effortlessly."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2f64c8fd-13d3-4414-91b0-e3a91e4a7dd2"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
