import { Button } from "@/ui/button";
import {
  Card as BaseCard,
  CardAction,
  CardHeader,
  // CardDescription,
  CardContent as BaseContent,
  CardFooter,
  CardTitle,
  CardContent,
} from "@/ui/card";
import type { CartItem } from "src/types/shop";
import { useCartData } from "./CartContext";
import { roundToTwo } from "src/utils/rounding";

type Props = {
  item: CartItem;
};

const ItemInfo = ({ item }: { item: CartItem }) => {
  return (
    <div className="flex gap-5 item-info">
      <img
        src={item.item.image}
        alt={item.item.description}
        // width={128}
        // width={128}
        className="w-12 md:w-48 h-auto object-contain"
        // className="size-12"
      />
      <div className="flex flex-col gap-5">
        <p className="text-sm ">{item.item.title}</p>
        <div className="flex flex-col">
          <p>Price: ${item.item.price}</p>
          <p className="text-sm">Amount: {item.amount}</p>
        </div>
        <div>
          <p className="font-bold">
            {/* Total: ${Number((item.item.price * item.amount).toPrecision(2))} */}
            Total: ${roundToTwo(item.item.price * item.amount)}
          </p>
        </div>
      </div>
    </div>
  );
};

const ItemControls = ({ item }: { item: CartItem }) => {
  const { cartState, setCartState } = useCartData();

  return (
    <div className="flex flex-col gap-5 justify-between">
      <Button
        onClick={() =>
          setCartState(cartState.filter((cartItem) => cartItem.id != item.id))
        }
        className="w-fit self-end text-white bg-red-500 hover:bg-red-600"
      >
        x
      </Button>
      <div className="item-controls flex gap-2.5">
        <Button
          onClick={() =>
            setCartState(
              cartState.map((cartItem) =>
                cartItem.id === item.id
                  ? { ...cartItem, amount: cartItem.amount - 1 }
                  : cartItem
              )
            )
          }
          className="flex-1 w-10 bg-red-200 text-black hover:bg-red-400"
        >
          -
        </Button>
        <Button
          onClick={() =>
            setCartState(
              cartState.map((cartItem) =>
                cartItem.id === item.id
                  ? { ...cartItem, amount: cartItem.amount + 1 }
                  : cartItem
              )
            )
          }
          className="flex-1 w-10 bg-green-200 text-black hover:bg-green-400"
        >
          +
        </Button>
      </div>
    </div>
  );
};

const CartEntryContent = ({ item }: { item: CartItem }) => {
  return (
    <div className="flex gap-5 justify-between">
      <ItemInfo item={item} />
      <ItemControls item={item} />
    </div>
  );

  // return (
  //   <div className="flex gap-5">
  //     <img
  //       src={item.item.image}
  //       alt={item.item.description}
  //       width={128}
  //       // className="size-12"
  //     />
  //     <div className="w-full">
  //       <div className="flex justify-between w-full">
  //         <p>{item.item.title}</p>
  //       </div>
  //       <div className="flex gap-5">
  //         <div className="flex flex-col">
  //           <p>Price: ${item.item.price}</p>
  //           <p className="text-sm">Amount: {item.amount}</p>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export const CartEntry = ({ item }: Props) => {
  return (
    <BaseCard className="my-2.5">
      <BaseContent>
        <CartEntryContent item={item} />
      </BaseContent>
    </BaseCard>
  );
  //   return (
  //     <div className="flex">
  //       <img
  //         src={item.item.image}
  //         alt={item.item.description}
  //         width={128}
  //         // className="size-12"
  //       />
  //       <p>{item.item.title}</p>
  //     </div>
  //   );
};
