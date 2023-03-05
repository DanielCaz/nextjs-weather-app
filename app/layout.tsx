import "./globals.css";

export const metadata = {
  title: "Weather App",
  description: "A simple weather app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* apply a gradient to the body */}
      <body className="bg-gradient-to-bl from-blue-200 to-blue-400 min-h-screen py-16">
        {children}
      </body>
    </html>
  );
}
