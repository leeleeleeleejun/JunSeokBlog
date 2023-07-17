import GitHubIcon from "@/components/icons/GitHubIcon";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import MailIcon from "@/components/icons/MailIcon";
import VelogIcon from "@/components/icons/VelogIcon";
import LightIcon from "@/components/icons/lightIcon";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} dark:bg-[#1a1a1b] dark:text-[white]`}
      >
        <Header />
        <main className="max-w-[900px] min-h-[500px] m-auto p-[10px]">
          {children}
        </main>
        <footer className="flex flex-col text-xs text-gray-400 mt-[250px] py-[30px]">
          <nav className="flex justify-center">
            <Link href="https://github.com/leeleeleeleejun" target="_blank">
              <GitHubIcon />
            </Link>
            <Link href="mailto:wnstjr6293@gmail.com" target="_blank">
              <MailIcon />
            </Link>
            <Link href="https://velog.io/@leeleeleeleejun" target="_blank">
              <VelogIcon />
            </Link>
          </nav>
          <p className="mt-[10px] text-center">
            JunSeok Lee • © 2023 • https://JunSeokBlog.com
          </p>
        </footer>
      </body>
    </html>
  );
}
