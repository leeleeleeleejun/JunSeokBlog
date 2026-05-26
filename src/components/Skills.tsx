import Tag from "./Tag";

export default function Skills() {
  const language = ["HTML", "CSS", "JavaScript", "TypeScript"];
  const Framework = ["Next.js"];
  const library = [
    "React",
    "Zustand",
    "React-Query",
    "styled-components",
    "tailwindcss",
  ];
  return (
    <div className="mt-[50px]">
      <h3 className="text-h3 font-semibold border-b border-gray-200 mb-2">
        Skills
      </h3>
      <ul className="flex my-[20px] flex-wrap">
        {language.map((item, index) => (
          <li key={item + index}>
            <Tag>{item}</Tag>
          </li>
        ))}
      </ul>
      <ul className="flex my-[20px]  flex-wrap">
        {library.map((item, index) => (
          <li key={item + index}>
            <Tag>{item}</Tag>
          </li>
        ))}
      </ul>
      <ul className="flex my-[20px]  flex-wrap">
        <Tag>{Framework[0]}</Tag>
      </ul>
    </div>
  );
}
