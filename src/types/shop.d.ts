export type StoreItem = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export type CartItem = {
  item: StoreItem;
  amount: number;
}