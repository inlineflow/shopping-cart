import React, { createContext, useContext, useState } from "react";
import type { StoreItem } from "src/types/shop";

const Context = createContext({
  cartState: [] as StoreItem[],
  setCartState: (oldState: StoreItem[]) => {},
});
type Props = {
  children: React.ReactNode;
};

export const CartDataProvider = ({ children }: Props) => {
  console.log("CartDataProvider rendering");
  const [cartState, setCartState] = useState([] as StoreItem[]);
  const value = {
    cartState,
    setCartState,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useCartData = () => useContext(Context);
