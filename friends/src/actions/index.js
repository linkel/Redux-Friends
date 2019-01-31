import axios from 'axios';

export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

export const fetchFolk = () => {
    const promise = axios.get(`http://localhost:5000/api/friends/`);
    return dispatch => {
        dispatch({ type: FETCHING }); // first state of 'fetching' is dispatched
        promise
        .then(response => {
            console.log(response.data)
            dispatch({ type: SUCCESS, payload: response.data }); // 2nd state of success is dispatched IF the promise resolves
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FAILURE }); // our other 2nd state of 'rejected' will be dispatched here.
        });
    };
};
  