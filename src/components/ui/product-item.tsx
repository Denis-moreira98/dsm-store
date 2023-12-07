import { Badge } from "./badge";
import { ProductWithTotalPrice } from "../../helpers/product";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

interface ProductItemProps {
  product: ProductWithTotalPrice;
  className?: string;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="flex max-w-[193px] flex-col gap-4">
      <div className="relative flex aspect-square h-[180px] w-[193px]  items-center justify-center rounded-lg bg-accent hover:bg-[#121212]">
        <Image
          src={product.imageUrls[0]}
          height={0}
          width={0}
          sizes="100vh"
          className="h-auto max-h-[70%] w-auto max-w-[80%] cursor-pointer transition-all duration-300 ease-linear hover:scale-[1.2]"
          alt={product.name}
          style={{
            objectFit: "contain",
          }}
        />
        {product.discountPercentage > 0 && (
          <Badge className="absolute left-2 top-3 px-2 py-[2px]">
            <ArrowDown size={18} /> {product.discountPercentage}%
          </Badge>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
          {product.name}
        </p>
        <div className="flex items-center gap-2">
          {product.discountPercentage > 0 ? (
            <>
              <p className="font-semibold">R${product.totalPrice.toFixed(2)}</p>
              <p className="text-xs line-through opacity-75">
                R$
                {Number(product.basePrice).toFixed(2)}
              </p>
            </>
          ) : (
            <p className="text-sm font-semibold">
              RS${Number(product.basePrice).toFixed(2)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
