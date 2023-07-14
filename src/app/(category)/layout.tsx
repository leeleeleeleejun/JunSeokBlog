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
      <div>
        <h1>Junseok Lee</h1>
        <p>안녕하세요, 웹 프론트엔드 개발자 이준석입니다.</p>
      </div>
      <Categories categories={categories} />
      {children}
    </section>
  );
}
