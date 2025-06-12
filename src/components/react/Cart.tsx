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
import { useCartData } from "./CartContext";

type Props = React.ComponentProps<"div">;

export const Cart = ({ className }: Props) => {
  const { cartState } = useCartData();
  console.log("Cart state in Cart: ", cartState);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className={cn("size-fit", className)}>
          <ShoppingCart size={10} className="size-10" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
        </SheetHeader>
        <div>
          <p>Your items: </p>
          {cartState.map((i) => (
            <p>{i.title}</p>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};
