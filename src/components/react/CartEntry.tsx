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

type Props = {
  item: CartItem;
};

const CartEntryContent = ({ item }: { item: CartItem }) => {
  return (
    <div className="flex gap-5">
      <img
        src={item.item.image}
        alt={item.item.description}
        width={128}
        // className="size-12"
      />
      <div className="flex flex-col justify-between">
        <p>{item.item.title}</p>
        <div className="flex gap-5">
          <p>Price: ${item.item.price}</p>
          <p>Amount: {item.amount}</p>
        </div>
      </div>
    </div>
  );
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
