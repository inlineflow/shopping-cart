import { Cart } from "./Cart";

export const NavRibbon = () => {
  return (
    <div className="flex bg-green-300 w-full px-5 sticky top-0 mb-20 rounded-b-md">
      <Cart className="ml-auto" />
    </div>
  );
};
