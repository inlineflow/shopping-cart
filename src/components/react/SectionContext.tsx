import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
const categoriesUrl = "https://fakestoreapi.com/products/category";

type StoreItem = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

const Context = createContext([] as StoreItem[]);
type Props = {
  categoryName: string;
  children: ReactNode;
};
export const SectionDataProvider = ({ categoryName, children }: Props) => {
  console.log("SectionDataProvider rendering");

  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      fetch(`${categoriesUrl}/${categoryName}`)
        .then((data) => data.json())
        .then((data) => setItems(data));
    };

    fetchData();
  }, []);

  return <Context.Provider value={items}>{children}</Context.Provider>;
};

export const useSectionData = () => useContext(Context);
