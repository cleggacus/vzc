import type { Metadata } from "next";
import "./globals.css"

export const metadata: Metadata = {
  title: "Vision Connect Zero",
  description: "Transform your ESG data into strategic intelligence for sustainable business growth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
