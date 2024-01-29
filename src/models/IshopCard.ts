export interface ICartItem {
  id: number;
  img: string;
  title: string;
  quantity: number;
  costByHundredGrams: number;
}
export interface IShopCart {
  itemsMap: ICartItem[];
  totalCost: number;
}

export interface ShopCartState {
  shopCart: IShopCart;
  isLoading: boolean;
  error: string;
}
