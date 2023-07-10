import SearchIcon from "./icons/SearchIcon";
export default function SearchInput() {
  return (
    <div className="relative">
      <SearchIcon />
      <input
        className="w-[100%] h-[50px] pl-[50px] border-[3px] border-black rounded-full"
        placeholder="제목을 검색해주세요"
      />
    </div>
  );
}
