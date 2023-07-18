import Skills from "@/components/Skills";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "JunSeok-blog",
  description: "이준석의 개발 블로그입니다",
  openGraph: {
    title: "JunSeok-blog",
    description: "이준석의 개발 블로그입니다",
    locale: "ko-KR",
    siteName: "JunSeok-blog.com",
    url: "https://JunSeok-blog.com/about",
    type: "profile",
  },
};

function Highlight({ children }: { children: string }) {
  return (
    <span className="bg-cyan-200 px-[3px] mx-[2px] dark:bg-cyan-500">
      {children}
    </span>
  );
}

export default function About() {
  return (
    <>
      <div className="flex justify-around items-center">
        <Link
          href="https://www.notion.so/778ddfc9fd7b4ec4a770643d59f61044?pvs=4"
          target="_blank"
        >
          <Image
            src="/images/about/profile2.jpg"
            width={200}
            height={200}
            alt="profile"
            priority={true}
            className="rounded-full duration-300 hover:scale-110"
          />
        </Link>
        <div className="text-5xl text-center leading-relaxed">
          <div className="font-light">안녕하세요</div>
          <strong>이준석</strong>
          <div className="font-light">입니다</div>
        </div>
      </div>
      <div className="mt-[80px] mb-[30px] text-[17px] font-light tracking-tight leading-7">
        <p>
          <Highlight>기본</Highlight>을 중요시하며
          <Highlight>효율적인 코드</Highlight>를 사랑합니다.
        </p>
        <p>효율적인 코드를 짜기 위해 항상 고민 하고,</p>
        <p>중복된 코드를 지우고 깔끔하게 만들 때 즐거움을 느낍니다.</p>
        <p>
          기본 개념과 동작 원리를 이해하면서 상황에 맞는 태그, 로직을 작성하기
          위해 노력합니다.
        </p>
      </div>
      <div className="font-light">
        저에 대해 더 알고싶어지셨다면, 제 사진을 클릭해주세요!
      </div>
      <Skills />
    </>
  );
}
