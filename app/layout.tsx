import type { Metadata } from "next";
import { Montserrat, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { NavbarProvider } from "@/context/navbarcontext";
import Footer from "@/components/footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elite Scholars",
  description:
    "From choosing the right university to acing your applications — we simplify every step of your study abroad journey. Get personalized support, visa guidance, and real-time updates, all in one place.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon.ico",
        href: "/favicon.ico",
      },
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon.ico",
        href: "/favicon.ico",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${bricolage.variable} montserrat`}
      >
        <NavbarProvider>
          <Navbar />
          <div>{children}</div>
          <Footer />
        </NavbarProvider>
      </body>
    </html>
  );
}
