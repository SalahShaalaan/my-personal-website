import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Salah Shaalaan",
  description:
    "Frontend Developer, React, Next.js, Tailwind CSS, JavaScript, TypeScript, Sofware Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
