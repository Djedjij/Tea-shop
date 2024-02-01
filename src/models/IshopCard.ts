export interface ICartItem {
  [x: string]: any;
  id: number;
  img: string;
  title: string;
  quantity: number;
  costByHundredGrams: number;
  teaPrice: number;
}

export interface ICartUuid {
  uuid: string;
}

export interface IShopCart {
  cartId: ICartUuid;
  itemsMap: ICartItem[];
  totalCost: number;
}

export interface ShopCartState {
  shopCart: IShopCart;
  isLoading: boolean;
  error: string;
}
