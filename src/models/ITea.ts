export interface ITea {
  productId: number;
  name: string;
  stockQuantity: number;
  price: number;
  description: string;
  effect: string;
  category: string;
  reviewInfoDto: null;
  imagesLinks: string[];
}

export interface TeasState {
  filteredTeas: any;
  teas: ITea[];
  isLoading: boolean;
  error: string;
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  isFiltered: boolean;
}
