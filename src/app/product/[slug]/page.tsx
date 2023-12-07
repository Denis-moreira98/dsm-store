import { prismaClient } from "@/lib/prisma";

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

  return <h1 className="mt-[8rem]">{product?.name}</h1>;
};

export default ProductDatailsPage;
