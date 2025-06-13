import {
  Card as BaseCard,
  CardAction,
  CardHeader,
  // CardDescription,
  CardContent as BaseContent,
  CardFooter,
  CardTitle,
} from "@/ui/card";
import { AddToCart } from "./AddToCart";
import {
  StoreItemDataProvider,
  useStoreItemData,
} from "./StoreItemCardContext";
import type { StoreItem } from "src/types/shop";

type CardContentProps = {
  img: string;
  description: string;
} & React.ComponentProps<"div">;

const CardContent = ({ img, description }: CardContentProps) => {
  return (
    <div>
      <img src={img} className="max-w-64 h-auto w-full m-auto" />
      <p className="mt-10">{description}</p>
    </div>
  );
};

type Props = {
  item: StoreItem;
  cardAction: () => void;
};

type CardProps = Props & React.ComponentProps<"div">;

export const StoreItemCard = ({
  item,
  // title,
  // cardContent,
  cardAction,
}: CardProps) => {
  const cartItem = { item, amount: 0 };

  return (
    <StoreItemDataProvider item={cartItem}>
      <BaseCard className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>{item.title}</CardTitle>
        </CardHeader>
        <BaseContent>
          <CardContent
            img={item.image}
            description={item.description}
          ></CardContent>
        </BaseContent>
        <CardFooter className="mt-auto">
          <CardAction className="w-full">
            <AddToCart onAddToCart={cardAction} />
          </CardAction>
        </CardFooter>
      </BaseCard>
    </StoreItemDataProvider>
  );
};
