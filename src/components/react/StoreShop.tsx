import { Gallery } from "./Gallery";
import { NavRibbon } from "./NavRibbon";

export const StoreShop = () => {
  return (
    <div className="px-20 flex flex-col items-center">
      <NavRibbon />
      <Gallery />
    </div>
  );
};
