export default function Tag({ children }: { children: string }) {
  return (
    <div className="relative h-[30px] font-light text-[#7d7d7d] mr-[10px] pr-[20px] border-b-[2px] border-mainGreen rounded-full dark:bg-slate-100">
      <div className="inline-block absolute w-[30px] h-[30px] leading-[30px] font-semibold text-center text-white rounded-full bg-mainGreen ">
        #
      </div>
      <div className="h-[30px] pl-[40px] text-center">{children}</div>
    </div>
  );
}
