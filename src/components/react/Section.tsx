import { StoreItemCard } from "./StoreItemCard";

import { useSectionData } from "./SectionContext";
import { CartDataProvider, useCartData } from "./CartContext";

const capitalize = (str: string) => str[0]?.toUpperCase() + str.slice(1);
type Props = {
  categoryName: string;
};

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

export const Section = ({ categoryName }: Props) => {
  const items = useSectionData();
  const { cartState, setCartState } = useCartData();
  console.log(items);

  return (
    // <div className="mb-10 flex flex-col items-center justify-center">
    <div className="mb-10">
      <h2 className="text-2xl font-bold text-center mb-2">
        {capitalize(categoryName)}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 w-fit">
        {items.map((i) => (
          <StoreItemCard
            cardAction={() => {
              console.log(`adding ${i}`);
              setCartState([...cartState, i]);
            }}
            // cardContent={<img src={i.image} className="w-50 m-auto"></img>}
            cardContent={
              <CardContent
                description={i.description}
                img={i.image}
              ></CardContent>
            }
            title={i.title}
            // description={i.description}
          ></StoreItemCard>
        ))}
      </div>
    </div>
  );
};
