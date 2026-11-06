import type { Metadata } from "next";
import Nav from "@/components/Nav";
import { profile } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: profile.name, template: `%s · ${profile.name}` },
  description: `${profile.name}: ${profile.role.toLowerCase()}. Career, side projects, and study notes.`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-12">{children}</main>
        <footer className="mx-auto w-full max-w-3xl px-6 py-8 text-sm text-zinc-500">
          © {new Date().getFullYear()} {profile.name}
        </footer>
      </body>
    </html>
  );
}
