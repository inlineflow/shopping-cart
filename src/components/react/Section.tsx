import { StoreItemCard } from "./StoreItemCard";

import { useSectionData } from "./SectionContext";

const capitalize = (str: string) => str[0]?.toUpperCase() + str.slice(1);
type Props = {
  categoryName: string;
};

export const Section = ({ categoryName }: Props) => {
  const items = useSectionData();
  console.log(items);

  return (
    // <div className="mb-10 flex flex-col items-center justify-center">
    <div className="mb-10">
      <h2 className="text-2xl font-bold text-center mb-2">
        {capitalize(categoryName)}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 w-fit">
        {items.map((item) => (
          <StoreItemCard
            key={item.id}
            item={item}
            // description={i.description}
          ></StoreItemCard>
        ))}
      </div>
    </div>
  );
};
