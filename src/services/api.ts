import axios from "axios";

axios.defaults.baseURL = 'https://steam2.p.rapidapi.com/search/Counter/'

const options = {
  method: 'GET',
  url: 'https://steam2.p.rapidapi.com/search/Counter/',
  headers: {
    'X-RapidAPI-Key': '3c8777c356mshc593cd3afda5fc9p142607jsnf6011a527231',
    'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
  }
};

const getData = async () => await axios.get('page/1', options);

export {
  getData
}





// export const fetchTasks = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(fetchingInProgress());
//     const response = await axios.get("/page/1", options);
//     console.log(response);
//     dispatch(fetchingSuccess(response.data));
//   } catch (e) {}
// };

