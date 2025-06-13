import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { useState } from "react";

type Props = {
  onAddToCart: (amount: number) => void;
};

export const AddToCart = ({ onAddToCart }: Props) => {
  const [amount, setAmount] = useState(0);
  return (
    <div>
      <div className="flex gap-5">
        <Input
          type="number"
          value={amount}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setAmount(Number(e.target.value))
          }
        />
        <div className="flex gap-1.5">
          <Button
            variant="destructive"
            size="icon"
            onClick={() => setAmount((val) => val - 1)}
            className="bg-red-200 text-black text-xl hover:bg-red-300"
          >
            -
          </Button>
          <Button
            variant="default"
            size="icon"
            className="bg-green-200 text-black text-xl hover:bg-green-300"
            onClick={() => setAmount((val) => val + 1)}
          >
            +
          </Button>
        </div>
      </div>
      <Button
        onClick={() => {
          console.log(`adding ${amount}`);
          onAddToCart(amount);
        }}
        className="w-full mt-5"
      >
        Add to Cart
      </Button>
    </div>
  );
};
