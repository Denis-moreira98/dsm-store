import { prismaClient } from "@/lib/prisma";
import CategoryItem from "./categoory-item";

const Categories = async () => {
  const categories = await prismaClient.category.findMany({});
  return (
    <div className="grid grid-cols-2 gap-x-2 gap-y-4 lg:grid-cols-3">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categories;
