import axios from "axios";
import { fetchingInProgress, fetchingSuccess } from "../redux/slice/gameSlice";
import { AppDispatch } from "../redux/store";

// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.baseURL = 'https://steam2.p.rapidapi.com/search/Counter'


// export const fetchTasks = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(fetchingInProgress());
//     const response = await axios.get("/page/1");
//     dispatch(fetchingSuccess(response.data));
//   } catch (e) {}
// };


const options = {
  method: 'GET',
  url: 'https://steam2.p.rapidapi.com/search/Ticket',
  headers: {
    'X-RapidAPI-Key': '3c8777c356mshc593cd3afda5fc9p142607jsnf6011a527231',
    'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
  }
};

export const fetchTasks = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchingInProgress());
    const response = await axios.get("/page/1", options);
    console.log(response);
    dispatch(fetchingSuccess(response.data));
  } catch (e) {}
};

