import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Toc from "./Toc";
import Link from "next/link";

export default function Post({ children }: { children: string }) {
  const TocArray: string[] = [];
  return (
    <div>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }) => (
            <h1 {...props} className="text-h1 font-bold my-[0.67em]" />
          ),
          h2: ({ node, ...props }) => (
            <h2 {...props} className="text-h2 font-bold my-[0.83em]" />
          ),
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
            <h4 {...props} className="text-h4 font-bold my-[1.33em]" />
          ),
          h5: ({ node, ...props }) => (
            <h5 {...props} className="text-h5 font-bold my-[1.67em]" />
          ),
          blockquote: ({ node, ...props }) => (
            <blockquote
              {...props}
              className="bg-slate-50 my-[1em] border-l-4 border-mainGreen py-[1rem] pl-[2rem] pr-[1rem]"
            />
          ),
          pre: ({ node, ...props }) => (
            <pre {...props} className="whitespace-pre p-[1rem]" />
          ),
          code: ({ inline, node, ...props }) => (
            <code
              {...props}
              className="text-[80%] text-codeTagText bg-codeTagBG rounded p-[3px]"
            />
          ),
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
      <Toc TocArray={TocArray} />
    </div>
  );
}
