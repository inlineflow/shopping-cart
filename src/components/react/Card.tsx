import {
  Card as BaseCard,
  CardAction,
  CardHeader,
  CardDescription,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/ui/card";

type Props = {
  title: string;
  description?: string;
  cardContent: React.ReactNode;
};

type CardProps = Props & React.ComponentProps<"div">;

export const Card = ({ title, description, cardContent }: CardProps) => {
  return (
    <BaseCard className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>{cardContent}</CardContent>
      <CardFooter>
        {description && <CardDescription>{description}</CardDescription>}
        <div className="flex m-auto">
          <CardAction>
            <button className="text-center m-auto self-center">Click me</button>
          </CardAction>
        </div>
      </CardFooter>
    </BaseCard>
  );
};
