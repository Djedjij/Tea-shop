import axios from "axios";
import { AppDispatch } from "..";
import { ITea } from "../../models/ITea";
import { teaFetching, teaFetchingError, teaFetchingSuccess } from "./teasSlice";

export const fetchTeas =
  (p: number, count: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(teaFetching());
      const response = await axios.get<ITea[]>(
        process.env.REACT_APP_API_URL + `/products?p=${p}&count=${count}`
      );
      dispatch(teaFetchingSuccess(response.data));
    } catch (e: any) {
      dispatch(teaFetchingError(e.message));
    }
  };
