import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SANFORDEV Studio",
  description: "Static Content with Sanity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="min-h-screen w-full">
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
