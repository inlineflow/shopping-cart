import type { UUID } from "src/utils/UUID";

export type StoreItem = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export type CartItem = {
  id: UUID;
  item: StoreItem;
  amount: number;
}