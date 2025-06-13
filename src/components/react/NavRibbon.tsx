import { CartSheet } from "./CartSheet";

export const NavRibbon = () => {
  return (
    <div className="flex bg-green-300 w-[70vw] px-5 sticky top-0 mb-20 rounded-b-md">
      <CartSheet className="ml-auto hover:bg-green-400" />
    </div>
  );
};
