import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jorge Bastos",
  description: "Jorge Bastos: full stack developer. Career and side projects.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
