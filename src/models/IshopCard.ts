import { ITea } from "./ITea";

export interface ShopCardState {
  teas: ITea[];
  isLoading: boolean;
  error: string;
}
