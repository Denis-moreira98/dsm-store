import { Badge } from "@/components/ui/badge";
import ContainerLayout from "@/components/ui/containerLayout";
import ProductItem from "@/components/ui/product-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { prismaClient } from "@/lib/prisma";
import { PercentIcon } from "lucide-react";

const DealsPage = async () => {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  return (
    <ContainerLayout className="mt-[5.7rem]">
      <Badge
        variant="outline"
        className="w-fit gap-2 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
      >
        <PercentIcon size={16} />
        Ofertas
      </Badge>
      <div className="grid grid-cols-2 items-center gap-8 pt-5 md:grid-cols-4 lg:grid-cols-5">
        {deals.map((product) => (
          <ProductItem
            key={product.id}
            product={computeProductTotalPrice(product)}
          />
        ))}
      </div>
    </ContainerLayout>
  );
};

export default DealsPage;
