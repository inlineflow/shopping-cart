import { ScrollArea, ScrollBar } from "@/ui/scroll-area";
import { useCartData } from "./CartContext";
import { CartEntry } from "./CartEntry";

export const CartList = () => {
  const { cartState } = useCartData();
  return (
    <div className="flex flex-col justify-between gap-5">
      <ScrollArea className="px-5 max-h-[60vh] grow">
        <ScrollBar orientation="vertical" />
        {cartState.map((item) => (
          <CartEntry item={item} />
        ))}
      </ScrollArea>
      <div className="flex gap-10 m-auto justify-between w-full px-30">
        <div className="w-40 h-20 bg-red-100"></div>
        <div className="w-40 h-20 bg-amber-100"></div>
      </div>
    </div>
  );
};
