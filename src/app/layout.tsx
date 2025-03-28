import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['400', '500', '700'],
  subsets: ["latin"],
  display: 'swap',
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Justin | UI/UX Designer & Web Developer",
  description: "Personal portfolio of Justin - UI/UX Designer & Web Developer based in San Jose Del Monte, Bulacan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${poppins.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
