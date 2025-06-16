import { cn } from "@/lib/utils";
import { Button } from "@/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from "@/ui/sheet";
import { ShoppingCart } from "lucide-react";
import { CartList } from "./CartList";
import { CartItemsBadge } from "./CartItemsBadge";

type Props = React.ComponentProps<"div">;

export const CartSheet = ({ className }: Props) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className={cn("size-fit", className)}>
          <div>
            {/* <ShoppingCart size={10} className="size-10" /> */}
            <ShoppingCart size={10} className="size-10 " />
            <CartItemsBadge />
            {/* <div className="inline-flex h-6 p-1 bg-purple-200 absolute top-0 right-6 rounded-full items-center justify-center">
              555
            </div> */}
            {/* <Circle
              size={4}
              className="size-5 absolute top-0 right-6"
              fill="pink"
            /> */}
          </div>
        </Button>
      </SheetTrigger>
      <SheetContent className="min-w-screen md:min-w-200">
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
        </SheetHeader>
        <CartList></CartList>
        {/* <div>
          <p>Your items: </p>
          {cartState.map((i) => (
            <p>{i.item.title}</p>
          ))}
        </div> */}
      </SheetContent>
    </Sheet>
  );
};
