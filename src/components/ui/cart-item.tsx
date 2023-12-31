import { CartContext, CartProduct } from "@/providers/cart";
import Image from "next/image";
import { Button } from "./button";
import { ChevronLeftIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useContext } from "react";
import { useToast } from "./use-toast";

interface CartItemProps {
  product: CartProduct;
}

const CartItem = ({ product }: CartItemProps) => {
  const { toast } = useToast();
  const {
    decreaseProductQuantity,
    IncreaseProductQuantity,
    removeProductFromCart,
  } = useContext(CartContext);

  const handleDecreaseProductQuantityClick = () => {
    decreaseProductQuantity(product.id);
  };
  const handleIncreaseProductQuantityClick = () => {
    IncreaseProductQuantity(product.id);
  };
  const handleRemoveProductFromCartClick = () => {
    removeProductFromCart(product.id);
    toast({
      description: "Item removido do carrinho!",
    });
  };
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex h-[77px] w-[77px] items-center justify-center rounded-lg bg-accent">
          <Image
            src={product.imageUrls[0]}
            alt={product.name}
            height={0}
            width={0}
            quality={100}
            className="h-auto max-h-[70%] w-auto max-w-[80%]"
            sizes="100vh"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-xs">{product.name}</p>

          <div className="flex items-center gap-2">
            <p className="text-sm font-bold">
              R$ {product.totalPrice.toFixed(2)}
            </p>
            {product.discountPercentage > 0 && (
              <p className="text-xs line-through opacity-75">
                R$ {Number(product.basePrice).toFixed(2)}
              </p>
            )}
          </div>

          <div className="mt-2 flex items-center gap-1">
            <Button
              size="icon"
              variant="outline"
              className="h-8 w-6"
              onClick={handleDecreaseProductQuantityClick}
            >
              <ChevronLeftIcon size={16} />
            </Button>

            <span className="text-sx">{product.quantity}</span>

            <Button
              size="icon"
              variant="outline"
              className="h-8 w-6"
              onClick={handleIncreaseProductQuantityClick}
            >
              <ChevronRightIcon size={16} />
            </Button>
          </div>
        </div>
      </div>

      <Button
        size="icon"
        variant="outline"
        onClick={handleRemoveProductFromCartClick}
      >
        <TrashIcon size={16} />
      </Button>
    </div>
  );
};

export default CartItem;
