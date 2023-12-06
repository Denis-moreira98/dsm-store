"use client";
import ProductItem from "@/components/ui/product-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { Product } from "@prisma/client";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { MouseEvent } from "react";
import { useRef } from "react";
import { Button } from "../../../components/ui/button";

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  const carousel = useRef<HTMLDivElement | null>(null);

  const handleLeftClick = (event: MouseEvent) => {
    if (carousel.current) {
      console.log(carousel.current);
      carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
  };

  const handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    if (carousel.current) {
      console.log(carousel.current);
      carousel.current.scrollLeft += carousel.current.offsetWidth;
    }
  };

  return (
    <div className="group relative">
      <div
        className="carousel flex w-full gap-4 overflow-x-auto scroll-smooth px-5  [&::-webkit-scrollbar]:hidden"
        ref={carousel}
      >
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={computeProductTotalPrice(product)}
            className="w-[156px] lg:w-[200px] lg:min-w-[200px]"
          />
        ))}
      </div>

      {products.length > 6 && (
        <div className="hidden lg:block">
          <Button
            className="absolute left-[calc(-2.5rem/2)] top-[40%] flex h-[50px] w-[50px]  -translate-x-0 translate-y-[-50%] cursor-pointer place-items-center items-center justify-center rounded-full bg-primary p-2 text-2xl"
            onClick={handleLeftClick}
          >
            <ChevronLeftIcon size={30} />
          </Button>
          <Button
            className="absolute right-[calc(-2.5rem/2)] top-[40%] flex h-[50px] w-[50px] -translate-x-0 translate-y-[-50%] cursor-pointer place-items-center items-center justify-center rounded-full bg-primary p-2 text-2xl"
            onClick={handleRightClick}
          >
            <ChevronRightIcon size={30} />
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
