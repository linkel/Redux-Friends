import axios from 'axios';

export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
export const ADDING = "ADDING";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const UPDATING = "UPDATING";
export const UPDATE_SUCCESS = "UPDATE_SUCCESS";
export const DELETING = "DELETING";
export const DELETE_SUCCESS = "DELETE_SUCCESS";

export const fetchFolk = () => {
    const promise = axios.get(`http://localhost:5000/api/friends/`);
    return dispatch => {
        dispatch({ type: FETCHING });
        promise
        .then(response => {
            dispatch({ type: SUCCESS, payload: response.data });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FAILURE });
        });
    };
};

export const addFriend = (name, age, email) => {
    const friendObj = {
        name, age, email
    }
    const promise = axios.post('http://localhost:5000/api/friends/', friendObj);
    return dispatch => {
        dispatch({ type: ADDING });
        promise
        .then(response => {
            console.log(response.data)
            dispatch({ type: ADD_SUCCESS, payload: response.data });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FAILURE });
        });
    }
}

export const updateFriend = (id, name, age, email) => {
    const friendObj = {
        name, age, email
    }
    const promise = axios.put(`http://localhost:5000/api/friends/${id}`, friendObj);
    return dispatch => {
        dispatch({ type: UPDATING });
        promise
        .then(response => {
            console.log(response.data)
            dispatch({ type: UPDATE_SUCCESS, payload: response.data });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FAILURE });
        });
    }
}

export const deleteFriend = (id) => {
    const promise = axios.delete(`http://localhost:5000/api/friends/${id}`);
    return dispatch => {
        dispatch({ type: DELETING });
        promise
        .then(response => {
            console.log(response.data)
            dispatch({ type: DELETE_SUCCESS, payload: response.data });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FAILURE });
        });
    }
}