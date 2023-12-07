import { prismaClient } from "@/lib/prisma";
import ProductImages from "./components/product-images";

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
  });

  if (!product) return null;

  return (
    <div className="mt-[6rem]">
      <ProductImages imagesUrls={product.imageUrls} name={product.name} />
    </div>
  );
};

export default ProductDatailsPage;
