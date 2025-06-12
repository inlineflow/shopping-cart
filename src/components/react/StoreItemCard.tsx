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
import type { StoreItem } from "src/types/shop";

type Props = {
  title: string;
  // description?: string;
  cardContent: React.ReactNode;
  cardAction: () => void;
};

type CardProps = Props & React.ComponentProps<"div">;

export const StoreItemCard = ({
  title,
  cardContent,
  cardAction,
}: CardProps) => {
  return (
    <BaseCard className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <BaseContent>{cardContent}</BaseContent>
      <CardFooter className="mt-auto">
        {/* {description && <CardDescription>{description}</CardDescription>} */}
        {/* <div className="flex m-auto"> */}
        <CardAction className="w-full">
          <AddToCart onAddToCart={cardAction} />
        </CardAction>
        {/* </div> */}
      </CardFooter>
    </BaseCard>
  );
};
