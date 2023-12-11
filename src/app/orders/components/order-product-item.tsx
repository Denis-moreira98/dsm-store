import { computeProductTotalPrice } from "@/helpers/product";
import { Prisma } from "@prisma/client";
import Image from "next/image";

interface OrderProductItemProps {
  orderProduct: Prisma.OrderProductGetPayload<{
    include: {
      product: true;
    };
  }>;
}

const OrderProductItem = ({ orderProduct }: OrderProductItemProps) => {
  const productWithTotalPrice = computeProductTotalPrice(orderProduct.product);
  return (
    <div className="relative flex items-center gap-4">
      <div className="flex h-[77px] w-[100px] items-center justify-center rounded-lg bg-accent lg:h-[130px] lg:w-[150px]">
        <Image
          src={orderProduct.product.imageUrls[0]}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[80%] w-auto max-w-[80%] object-contain"
          alt={orderProduct.product.name}
        />
      </div>

      <div className="flex w-full flex-col gap-2">
        <div className="flex w-fit rounded-md bg-accent px-3 py-1 lg:py-2">
          <p className="text-[10px] lg:text-sm">
            Vendido e entregue por <span className="font-bold">DSMStore</span>
          </p>
        </div>

        <p className="text-xs">{orderProduct.product.name}</p>

        <div className="flex w-full items-center justify-between gap-1">
          <div className="flex items-center gap-1">
            <p className="text-sm font-bold">
              R$ {productWithTotalPrice.totalPrice.toFixed(2)}
            </p>

            {productWithTotalPrice.discountPercentage > 0 && (
              <p className="text-xs line-through opacity-60">
                R$ {Number(productWithTotalPrice.basePrice).toFixed(2)}
              </p>
            )}
          </div>

          <p className="text-xs opacity-60 lg:text-base">
            Qtd: {orderProduct.quantity}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderProductItem;
