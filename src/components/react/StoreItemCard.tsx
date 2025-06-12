import {
  Card as BaseCard,
  CardAction,
  CardHeader,
  CardDescription,
  CardContent as BaseContent,
  CardFooter,
  CardTitle,
} from "@/ui/card";
import { AddToCart } from "./AddToCart";

type Props = {
  title: string;
  description?: string;
  cardContent: React.ReactNode;
};

type CardProps = Props & React.ComponentProps<"div">;

export const StoreItemCard = ({ title, cardContent }: CardProps) => {
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
          <AddToCart />
        </CardAction>
        {/* </div> */}
      </CardFooter>
    </BaseCard>
  );
};
