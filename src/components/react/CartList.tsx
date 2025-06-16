import { ScrollArea, ScrollBar } from "@/ui/scroll-area";
import { useCartData } from "./CartContext";
import { CartEntry } from "./CartEntry";
import { Separator } from "@/ui/separator";
import { Button } from "@/ui/button";
import { SheetClose } from "@/ui/sheet";

export const CartList = () => {
  const { cartState } = useCartData();

  if (cartState.length === 0) {
    return (
      <div className="size-full flex justify-center items-center">
        <p>You have no items in your Cart yet!</p>
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-between gap-5 p-5">
      <ScrollArea className="max-h-[60vh] grow">
        <ScrollBar orientation="vertical" />
        {cartState.map((item) => (
          <CartEntry item={item} key={item.id} />
        ))}
      </ScrollArea>
      <Separator className="" />
      <p className="text-right text-xl font-bold">
        Total: $
        {cartState.reduce(
          (accumulator, item) => accumulator + item.item.price * item.amount,
          0
        )}
      </p>
      <div className="flex gap-10 justify-end w-full">
        <SheetClose asChild>
          <Button
            variant="destructive"
            className="bg-red-200 text-black hover:bg-red-300"
          >
            Close
          </Button>
        </SheetClose>
        <Button className="bg-green-300 text-black hover:bg-green-400 ">
          Checkout
        </Button>
        {/* <div className="w-40 h-20 bg-red-100"></div>
        <div className="w-40 h-20 bg-amber-100"></div> */}
      </div>
    </div>
  );
};
