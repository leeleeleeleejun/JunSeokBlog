import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import GitHubIcon from "@/assets/GitHubIcon.svg";
import MailIcon from "@/assets/MailIcon.svg";
import VelogIcon from "@/assets/VelogIcon.svg";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JunSeok-blog",
  description: "이준석의 개발 블로그입니다",
  openGraph: {
    title: "JunSeok-blog",
    description: "이준석의 개발 블로그입니다",
    locale: "ko-KR",
    siteName: "JunSeok-blog.com",
    url: "https://junseok-blog.vercel.app/",
    type: "website",
  },
  verification: {
    google: "V7HHh8j_iC1XOgyct3SZSD2jd6mlETNzKFD4qV6WPlA",
    other: {
      "naver-site-verification": "94cdbe65a5d90d7930c6d71866c1cb03f6f3d81d",
    },
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body
        className={`${inter.className} dark:bg-darkModeBG dark:text-[white]`}
      >
        <Header />
        <main className="max-w-[900px] min-h-[500px] m-auto p-[10px]">
          {children}
        </main>
        <footer className="flex flex-col mt-[150px] py-[30px] text-xs text-gray-400">
          <nav className="flex justify-center">
            <Link
              href="https://github.com/leeleeleeleejun"
              target="_blank"
              className="mx-[7px]"
            >
              <GitHubIcon />
            </Link>
            <Link
              href="mailto:wnstjr6293@gmail.com"
              target="_blank"
              className="mx-[7px]"
            >
              <MailIcon />
            </Link>
            <Link
              href="https://velog.io/@leeleeleeleejun"
              target="_blank"
              className="mx-[7px]"
            >
              <VelogIcon />
            </Link>
          </nav>
          <p className="mt-[10px] text-center">
            JunSeok Lee • © 2023 • https://junseok-blog.vercel.app
          </p>
        </footer>
      </body>
    </html>
  );
}
