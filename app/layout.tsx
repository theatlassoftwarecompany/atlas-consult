import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Atlas Company | AI Infrastructure Platform",
  description: "Atlas is a cloud-agnostic AI platform for regulated enterprises. One interface to deploy, configure, and optimise AI systems — powered by principled optimisation.",
  keywords: ["AI platform", "AI infrastructure", "AI optimisation", "regulated AI", "enterprise AI", "cloud agnostic AI", "Arbitor"],
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
