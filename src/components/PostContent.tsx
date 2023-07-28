"use client";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Toc from "./Toc";
import Link from "next/link";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Post({ children }: { children: string }) {
  return (
    <>
      <Toc />
      <div className="w-[100%] mt-[70px] max-md:text-sm">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ node, ...props }) => (
              <Link href={`#${props.children[0]}`}>
                <h1
                  {...props}
                  className="text-h1 my-[0.67em] pt-[50px] font-bold leading-[initial]"
                  id={`${props.children[0]}`}
                />
              </Link>
            ),
            h2: ({ node, ...props }) => (
              <Link href={`#${props.children[0]}`}>
                <h2
                  {...props}
                  className="text-h2 my-[0.83em] pt-[50px] font-bold leading-[initial]"
                  id={`${props.children[0]}`}
                />
              </Link>
            ),
            h3: ({ node, ...props }) => (
              <Link href={`#${props.children[0]}`}>
                <h3
                  {...props}
                  className="text-h3 my-[1em] pt-[50px] font-bold leading-[initial]"
                  id={`${props.children[0]}`}
                />
              </Link>
            ),
            h4: ({ node, ...props }) => (
              <Link href={`#${props.children[0]}`}>
                <h4
                  {...props}
                  className="text-h4 my-[1em] pt-[50px] font-bold leading-[initial]"
                  id={`${props.children[0]}`}
                />
              </Link>
            ),
            h5: ({ node, ...props }) => (
              <h5 {...props} className="text-h5 font-bold my-[1.67em]" />
            ),
            img: ({ src, alt, node, ...props }) => (
              <Image
                {...props}
                width={500}
                height={500}
                src={src || ""}
                alt={alt || ""}
                placeholder={undefined}
                className="m-auto my-[30px] max-md:max-w-[250px]"
                priority={false}
              />
            ),
            blockquote: ({ node, ...props }) => (
              <blockquote
                {...props}
                className="my-[1em] py-[1rem] pl-[2rem] pr-[1rem] border-l-4 border-mainGreen bg-[#f8fafc] dark:bg-[#1E1E1E]"
              />
            ),
            code: ({ style, inline, node, children, className, ...props }) => {
              if (inline) {
                return (
                  <code
                    {...props}
                    className="p-[3px] rounded bg-[#87837826] text-[80%] text-[#EB5757] dark:text-rose-400 break-all"
                  >
                    {children}
                  </code>
                );
              }
              const match = /language-(\w+)/.exec(className || "") || "";
              return (
                <SyntaxHighlighter
                  language={match[1]}
                  style={vscDarkPlus}
                  showLineNumbers={true}
                  PreTag="div"
                  {...props}
                >
                  {`${children}`}
                </SyntaxHighlighter>
              );
            },
            ol: ({ ordered, node, ...props }) => (
              <ol {...props} className="list-decimal my-[1em] pl-[30px]" />
            ),
            ul: ({ ordered, node, ...props }) => (
              <ul {...props} className="list-disc my-[1em] pl-[30px]" />
            ),
            table: ({ node, ...props }) => (
              <table {...props} className="mx-auto my-[20px]" />
            ),
            th: ({ node, isHeader, ...props }) => (
              <th
                {...props}
                className="p-[5px] border-[1px] border-black text-center"
              />
            ),
            td: ({ node, isHeader, ...props }) => (
              <td
                {...props}
                className="p-[5px] border-[1px] border-black text-center"
              />
            ),
            a: ({ node, ...props }) => (
              <a {...props} className="text-[#0969da] hover:underline" />
            ),
            u: ({ node, ...props }) => <u {...props} className="underline" />,
            p: ({ node, ...props }) => (
              <p {...props} className="whitespace-pre-wrap" />
            ),
            hr: () => <hr className="mt-[20px]" />,
          }}
        >
          {children}
        </ReactMarkdown>
      </div>
    </>
  );
}
