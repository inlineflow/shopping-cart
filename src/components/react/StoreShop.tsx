import { StrictMode } from "react";
import { CartDataProvider } from "./CartContext";
import { Gallery } from "./Gallery";
import { NavRibbon } from "./NavRibbon";

export const StoreShop = () => {
  return (
    <StrictMode>
      <div className="px-20 flex flex-col items-center">
        <CartDataProvider>
          <NavRibbon />
          <Gallery />
        </CartDataProvider>
      </div>
    </StrictMode>
  );
};
