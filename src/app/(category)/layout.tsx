import Categories from "@/components/Categories";
import { getCategoriesQuantity, getPostCategories } from "@/lib/api";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const getCategories = getPostCategories();
  const categories = getCategoriesQuantity(getCategories);
  return (
    <section className="flex flex-col relative">
      <div className="ml-[10px] mt-[20px] mb-[40px] text-[14px] font-light tracking-tight leading-7">
        <p>안녕하세요, 웹 프론트엔드 개발자 이준석입니다</p>
        <p className='whitespace-pre-wrap'>이곳은 개발자로서 저의 경험과 배움을 기록하는 공간입니다  🌱</p>
      </div>
      <Categories categories={categories} />
      {children}
    </section>
  );
}
