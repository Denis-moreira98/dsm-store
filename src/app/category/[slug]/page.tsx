import { prismaClient } from "@/lib/prisma";
import { Badge } from "@/components/ui/badge";
import ProductItem from "@/components/ui/product-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { CATEGORY_ICON } from "@/constants/category-icon";
import ContainerLayout from "@/components/ui/containerLayout";

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
    <ContainerLayout>
      <div className="mx-auto mt-[5.7rem] flex flex-col items-center justify-center gap-7 lg:container lg:gap-8 lg:py-10">
        <Badge
          className="w-fit gap-2 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
          variant="outline"
        >
          {CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]}
          {category?.name}
        </Badge>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-5 lg:gap-5">
          {category.products.map((product) => (
            <ProductItem
              key={product.id}
              product={computeProductTotalPrice(product)}
            />
          ))}
        </div>
      </div>
    </ContainerLayout>
  );
};

export default CategoryProducts;
