export interface ICartItem {
  id: number;
  img: string;
  name: string;
  weight: number;
  costByHundredGrams: number;
  sum: number;
}

export interface IShopCart {
  cartId: string;
  itemsMap: ICartItem[];
  totalCost: number;
}

export interface ShopCartState {
  shopCart: IShopCart;
  isLoading: boolean;
  error: string;
}
