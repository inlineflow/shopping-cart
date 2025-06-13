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

type Props = React.ComponentProps<"div">;

export const CartSheet = ({ className }: Props) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className={cn("size-fit", className)}>
          <ShoppingCart size={10} className="size-10" />
        </Button>
      </SheetTrigger>
      <SheetContent className="min-w-200">
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
