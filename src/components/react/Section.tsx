import { Card } from "./Card";
import { useSectionData } from "./SectionContext";

const capitalize = (str: string) => str[0]?.toUpperCase() + str.slice(1);
type Props = {
  categoryName: string;
};

type CardContentProps = {
  img: string;
  description: string;
};

const CardContent = ({ img, description }: CardContentProps) => {
  return (
    <div>
      <img src={img} />
      <p>{description}</p>
    </div>
  );
};

export const Section = ({ categoryName }: Props) => {
  const items = useSectionData();
  console.log(items);

  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold text-center mb-2">
        {capitalize(categoryName)}
      </h2>
      <div className="grid grid-cols-3 gap-5">
        {items.map((i) => (
          <Card
            // cardContent={<img src={i.image} className="w-50 m-auto"></img>}
            cardContent={
              <CardContent
                description={i.description}
                img={i.image}
              ></CardContent>
            }
            title={i.title}
            // description={i.description}
          ></Card>
        ))}
      </div>
    </div>
  );
};
