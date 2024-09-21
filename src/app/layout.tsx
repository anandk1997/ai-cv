import type { Metadata } from "next";
import "./globals.scss";
import { Providers } from "@/lib/providers";

export const metadata: Metadata = {
  title: "AI-CV",
  description: "AI-CV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
