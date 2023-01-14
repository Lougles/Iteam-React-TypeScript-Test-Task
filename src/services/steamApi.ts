export const fetchFunc = () => {

}

import axios from "axios";
import { fetchingInProgress, fetchingSuccess } from "../redux/slice/gameSlice";
import { AppDispatch } from "../redux/store";

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';


export const fetchTasks = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchingInProgress());
    const response = await axios.get("/posts");
    dispatch(fetchingSuccess(response.data));
  } catch (e) {}
};