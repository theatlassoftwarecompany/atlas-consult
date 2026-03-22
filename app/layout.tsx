import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Atlas Company | AI Scaling & Governance",
  description: "80% of AI pilots never reach production. We diagnose why AI initiatives fail to scale and design systems that work in regulated enterprises.",
  keywords: ["AI scaling", "AI governance", "AI failure", "enterprise AI", "AI consulting", "AI production", "regulated AI"],
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
