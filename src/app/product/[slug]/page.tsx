import { prismaClient } from "@/lib/prisma";
import ProductImages from "./components/product-images";
import ProductInfo from "./components/product-info";
import { computeProductTotalPrice } from "@/helpers/product";
import ProductList from "@/components/ui/product-list";
import SectionTitle from "@/components/ui/section-title";
import ContainerLayout from "@/components/ui/containerLayout";

interface ProductDatailPageProps {
  params: {
    slug: string;
  };
}

const ProductDatailsPage = async ({
  params: { slug },
}: ProductDatailPageProps) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug: slug,
    },
    include: {
      category: {
        include: {
          products: {
            where: {
              slug: {
                not: slug,
              },
            },
          },
        },
      },
    },
  });

  if (!product) return null;

  return (
    <ContainerLayout className="mt-[5.5rem]">
      <div className="flex flex-col gap-8 pb-8 lg:gap-10 lg:py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-9 lg:px-5">
          <ProductImages imagesUrls={product.imageUrls} name={product.name} />
          <ProductInfo product={computeProductTotalPrice(product)} />
        </div>

        <div className="flex flex-col gap-5">
          <SectionTitle>Produtos recomendados</SectionTitle>
          <ProductList products={product.category.products} />
        </div>
      </div>
    </ContainerLayout>
  );
};

export default ProductDatailsPage;
