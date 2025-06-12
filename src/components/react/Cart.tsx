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

export const Cart = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon">
            <ShoppingCart />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Cart</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};
