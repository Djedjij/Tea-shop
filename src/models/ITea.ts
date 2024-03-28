export interface IReview {
  id: number;
  userEmail: string;
  rating: number;
  comment: string;
  timestamp: string;
}

export interface ITea {
  productId: number;
  name: string;
  stockQuantity: number;
  price: number;
  description: string;
  effect: string;
  category: string;
  reviews: IReview[];
  imagesLinks: string[];
}

export interface TeasState {
  teas: ITea[];
  filteredTeas: ITea[];
  viewedTeas: ITea[];
  favoriteTeas: ITea[];
  isLoading: boolean;
  error: string;
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  isFiltered: boolean;
  filteredBy: string | null;
}
