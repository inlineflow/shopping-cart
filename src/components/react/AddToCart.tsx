import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { useState } from "react";

export const AddToCart = () => {
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
        {/* <input
          type="number"
          value={amount}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setAmount(Number(e.target.value))
          }
          className="max-w-fit w-12 text-center"
        /> */}
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
      <Button className="w-full mt-5">Add to Cart</Button>
      {/* <button
          onClick={() => setAmount((val) => val - 1)}
          className="pl-5 pr-5 pt-2.5 pb-2.5 bg-red-200"
        >
          -
        </button>
        <button
          onClick={() => setAmount((val) => val + 1)}
          className="p-5 bg-green-200"
        >
          +
        </button> */}
      {/* <button className="p-5 bg-green-400">Add to Cart</button> */}
    </div>
  );
};
