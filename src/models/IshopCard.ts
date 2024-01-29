export interface ICardItem {
  id: number;
  img: string;
  title: string;
  quantity: number;
  costByHundredGrams: number;
}
export interface IShopCard {
  itemsMap: ICardItem[];
  totalCost: number;
}

export interface ShopCardState {
  shopCard: IShopCard;
  isLoading: boolean;
  error: string;
}
