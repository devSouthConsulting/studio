import "./globals.css";

export { metadata } from "./metadata";

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
