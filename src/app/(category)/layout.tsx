import Category from "@/components/Category";
import { getCategoriesQuantity, getPostCategories } from "@/lib/api";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const getCategories = getPostCategories();
  const categories = getCategoriesQuantity(getCategories);
  return (
    <section className="flex flex-col">
      <div className="flex flex-col fixed top-[200px] left-[350px]">
        <div>Category</div>
        <ul className="flex flex-col">
          <Category category="/">
            {`All (${categories.reduce(
              (prev, curr) => prev + curr.quantity,
              0
            )})`}
          </Category>
          {categories.map((item, index) => (
            <Category
              key={index}
              category={item.category}
            >{`${item.category} (${item.quantity})`}</Category>
          ))}
        </ul>
      </div>
      <div>
        <h1>Junseok Lee</h1>
        <p>안녕하세요, 웹 프론트엔드 개발자 이준석입니다.</p>
      </div>
      {children}
    </section>
  );
}
