export default function Tag({ children }: { children: string }) {
  return <span className="p-[5px]">#{children}</span>;
}
