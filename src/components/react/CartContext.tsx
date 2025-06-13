import React, { createContext, useContext, useState } from "react";
import type { CartItem } from "src/types/shop";

// type CartContextProps = {
//   cartState: StoreItem[];
//   setCartState: (oldState: StoreItem[]) => void;
// };

const Context = createContext({
  cartState: [] as CartItem[],
  setCartState: (oldState: CartItem[]) => {},
});
type Props = {
  children: React.ReactNode;
};

export const CartDataProvider = ({ children }: Props) => {
  console.log("CartDataProvider rendering");
  const [cartState, setCartState] = useState([] as CartItem[]);
  const value = {
    cartState,
    setCartState,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useCartData = () => useContext(Context);
