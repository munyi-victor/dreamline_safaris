import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Kenya Safaris — Book Your Dream Safari",
  description: "Book safaris in Kenya and beyond. Responsive Next.js + Tailwind template.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen bg-white text-gray-800`}
      >
        {children}
      </body>
    </html>
  );
}
