import CalendarIcon from "./icons/CalendarIcon";
import ClockIcon from "./icons/ClockIcon";
export default function PostInfo({
  date,
  readTime,
}: {
  date: string;
  readTime: string;
}) {
  return (
    <div className="flex items-center font-light text-sm text-[lightGray]">
      <CalendarIcon />
      <span className="mx-[5px]">{date}</span>
      <ClockIcon />
      <span className="mx-[5px]">{readTime}</span>
    </div>
  );
}
