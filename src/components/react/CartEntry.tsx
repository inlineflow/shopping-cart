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

type Props = {
  item: CartItem;
};

const ItemInfo = ({ item }) => {
  return (
    <div className="flex gap-5 item-info">
      <img
        src={item.item.image}
        alt={item.item.description}
        width={128}
        // className="size-12"
      />
      <div className="flex flex-col gap-5">
        <p>{item.item.title}</p>
        <div className="flex flex-col">
          <p>Price: ${item.item.price}</p>
          <p className="text-sm">Amount: {item.amount}</p>
        </div>
      </div>
    </div>
  );
};

const ItemControls = () => {
  return (
    <div className="flex flex-col gap-5">
      <Button>-</Button>
      <div className="item-controls flex gap-2.5">
        <Button>-</Button>
        <Button>-</Button>
      </div>
    </div>
  );
};

const CartEntryContent = ({ item }: { item: CartItem }) => {
  return (
    <div className="flex gap-5 justify-between">
      <ItemInfo item={item} />
      <ItemControls />
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
