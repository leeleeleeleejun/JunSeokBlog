export default function Tag({ children }: { children: string }) {
  return (
    <div className="relative h-[30px] mr-[10px] mb-[5px] pr-[20px] border-b-[2px] border-mainGreen rounded-full dark:bg-slate-100 font-light text-[#7d7d7d]">
      <div className="inline-block absolute w-[30px] h-[30px] rounded-full bg-mainGreen font-semibold text-center text-white leading-[30px]">
        #
      </div>
      <div className="h-[30px] pl-[40px] text-center leading-[29px]">
        {children}
      </div>
    </div>
  );
}
