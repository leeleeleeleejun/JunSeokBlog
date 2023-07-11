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
    <section>
      <div>Category</div>
      <ul className="flex ">
        <Category category="/">{`All (${categories.reduce(
          (prev, curr) => prev + curr.quantity,
          0
        )})`}</Category>
        {categories.map((item, index) => (
          <Category
            key={index}
            category={item.category}
          >{`${item.category} (${item.quantity})`}</Category>
        ))}
      </ul>
      {children}
    </section>
  );
}
