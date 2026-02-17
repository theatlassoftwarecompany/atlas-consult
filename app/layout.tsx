import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Atlas Company | AI Strategy & Implementation",
  description: "Enterprise AI consulting that delivers measurable results. Strategic planning, technical assessment, and implementation support for organizations navigating AI adoption.",
  keywords: ["AI consulting", "AI strategy", "enterprise AI", "AI implementation", "machine learning consulting"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
