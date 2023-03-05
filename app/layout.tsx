import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Weather App",
  description: "A simple weather app",
  icons: [
    {
      sizes: "32x32",
      rel: "icon",
      url: "/favicon-32x32.png",
    },
    {
      sizes: "16x16",
      rel: "icon",
      url: "/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
  ],
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Weather App",
    description: "A simple weather app",
    images: [
      {
        url: "https://danidan-weather.vercel.app/og-image.png",
        width: 1200,
        height: 627,
        alt: "Weather App",
      },
    ],
    url: "https://danidan-weather.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-bl from-blue-200 to-blue-400 min-h-screen py-8">
        {children}
      </body>
    </html>
  );
}
