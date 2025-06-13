import { createContext, useContext, useState } from "react";
import type { CartItem } from "src/types/shop";

type x = {
  cartItem: CartItem;
  setCartItem: (item: CartItem) => void;
};

const Context = createContext<x>({
  cartItem: {} as CartItem,
  setCartItem: () => {},
});

type Props = {
  item: CartItem;
  children: React.ReactNode;
};

export const StoreItemDataProvider = ({ item, children }: Props) => {
  const [cartItem, setCartItem] = useState<CartItem>(item);

  const state = {
    cartItem,
    setCartItem,
  };

  return <Context.Provider value={state}>{children}</Context.Provider>;
};

export const useStoreItemData = () => useContext(Context);
