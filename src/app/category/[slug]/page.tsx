import { prismaClient } from "@/lib/prisma";
import { Badge } from "@/components/ui/badge";
import ProductItem from "@/components/ui/product-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { CATEGORY_ICON } from "@/constants/category-icon";

const CategoryProducts = async ({ params }: any) => {
  const category = await prismaClient.category.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
      products: true,
    },
  });

  if (!category) {
    return null;
  }

  return (
    <div className="mx-auto mt-[6rem] flex flex-col gap-8 p-5 lg:container lg:gap-10 lg:py-10">
      <Badge
        className="w-fit gap-2 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant="outline"
      >
        {CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]}
        {category?.name}
      </Badge>
      <div className="grid w-full grid-cols-2 gap-8 max-sm:grid-cols-[2] max-sm:gap-8 md:grid-cols-5 lg:grid-cols-6">
        {category.products.map((product) => (
          <ProductItem
            key={product.id}
            product={computeProductTotalPrice(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;