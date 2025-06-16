import { useCartData } from "./CartContext";

export const CartItemsBadge = () => {
  const { cartState } = useCartData();
  const isSingleDigit = cartState.length < 0;

  //   const className = `inline-flex h-6 p-1 bg-purple-200 absolute top-0 right-6 rounded-full items-center justify-center ${
  //     isSingleDigit ? "w-6" : "px-3"
  //   } `;

  return cartState.length > 0 ? (
    <div
      className={`absolute top-0 right-0 transform 
        inline-flex h-6 p-1 bg-purple-200 rounded-full items-center justify-center 
        ${isSingleDigit ? "w-6" : "px-3"} `}
    >
      {cartState.length}
    </div>
  ) : null;
};
