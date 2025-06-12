import { StrictMode, useEffect, useState } from "react";
// import { Card } from "src/components/react/Card";
import { Section } from "src/components/react/Section";
import { SectionDataProvider } from "./SectionContext";

type CategoriesData = string[];
const categoriesUrl = "https://fakestoreapi.com/products/categories";

export const Gallery = () => {
  const [categories, setCategories] = useState<CategoriesData>();
  console.log("rendering Gallery");

  useEffect(() => {
    const fetchCategories = async () => {
      const data = (await (
        await fetch(categoriesUrl)
      ).json()) as CategoriesData;

      setCategories(data);
      console.log("fetched data");
    };

    fetchCategories();
  }, []);

  return (
    <StrictMode>
      <div className="p-20">
        {categories?.map((cat) => (
          <SectionDataProvider categoryName={cat}>
            <Section categoryName={cat}></Section>
          </SectionDataProvider>
        ))}
      </div>
    </StrictMode>
  );
};
