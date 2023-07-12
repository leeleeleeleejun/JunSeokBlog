import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
export default function MarkdownRenderer({ children }: { children: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ node, ...props }) => (
          <h1 {...props} className="text-h1 font-bold my-[0.67em]" />
        ),
        h2: ({ node, ...props }) => (
          <h2 {...props} className="text-h2 font-bold my-[0.83em]" />
        ),
        h3: ({ node, ...props }) => (
          <h3 {...props} className="text-h3 font-bold my-[1em]" />
        ),
        h4: ({ node, ...props }) => (
          <h4 {...props} className="text-h4 font-bold my-[1.33em]" />
        ),
        h5: ({ node, ...props }) => (
          <h5 {...props} className="text-h5 font-bold my-[1.67em]" />
        ),
        blockquote: ({ node, ...props }) => (
          <blockquote
            {...props}
            className="bg-slate-50 my-[1em] mx-[20px] border-l-4 border-mainGreen py-[1rem] pl-[2rem] pr-[1rem]"
          />
        ),
        code: ({ inline, node, ...props }) => (
          <code
            {...props}
            className="text-[85%] text-codeTagText bg-codeTagBG rounded px-[3px]"
          />
        ),
        ul: ({ ordered, node, ...props }) => (
          <ul {...props} className="list-disc my-[1em] pl-[30px]" />
        ),
        p: ({ node, ...props }) => (
          <p {...props} className="whitespace-pre-wrap" />
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
