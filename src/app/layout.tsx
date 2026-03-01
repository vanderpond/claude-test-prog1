import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daily Motivation",
  description: "A motivational quote with a click counter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
