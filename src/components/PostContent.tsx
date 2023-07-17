"use client";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Toc from "./Toc";
import Link from "next/link";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Post({ children }: { children: string }) {
  const TocArray: string[] = [];
  return (
    <div className="flex">
      <div>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ node, ...props }) => {
              TocArray.push(`${props.children[0]}`);
              return (
                <Link href={`#${props.children[0]}`}>
                  <h1
                    {...props}
                    className="text-h1 font-bold my-[0.67em]"
                    id={`${props.children[0]}`}
                  />
                </Link>
              );
            },
            h2: ({ node, ...props }) => {
              TocArray.push(`${props.children[0]}`);
              return (
                <Link href={`#${props.children[0]}`}>
                  <h2
                    {...props}
                    className="text-h2 font-bold my-[0.83em]"
                    id={`${props.children[0]}`}
                  />
                </Link>
              );
            },
            h3: ({ node, ...props }) => {
              TocArray.push(`${props.children[0]}`);
              return (
                <Link href={`#${props.children[0]}`}>
                  <h3
                    {...props}
                    className="text-h3 font-bold pt-[50px]"
                    id={`${props.children[0]}`}
                  />
                </Link>
              );
            },
            h4: ({ node, ...props }) => (
              <h4 {...props} className="text-h4 font-bold my-[1em]" />
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
                className="m-auto"
              />
            ),
            blockquote: ({ node, ...props }) => (
              <blockquote
                {...props}
                className="my-[1em] py-[1rem] pl-[2rem] pr-[1rem] border-l-4 border-mainGreen bg-slate-50 dark:bg-[#1E1E1E]"
              />
            ),
            code: ({ style, inline, node, children, ...props }) => {
              if (inline) {
                return (
                  <code
                    {...props}
                    className="p-[3px] rounded bg-codeTagBG text-[80%] text-codeTagText"
                  >
                    {children}
                  </code>
                );
              }

              return (
                <SyntaxHighlighter
                  language="javascript"
                  style={vscDarkPlus}
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
      <Toc TocArray={TocArray} />
    </div>
  );
}
