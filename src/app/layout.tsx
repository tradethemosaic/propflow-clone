import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PropFlow - Track Every Prop Firm",
  description: "Track Every Prop Firm. One Unified Dashboard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
