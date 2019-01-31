import {FETCHING,SUCCESS,FAILURE} from "../actions";
import { ADDING, ADD_SUCCESS, UPDATING, UPDATE_SUCCESS } from "../actions";
import { DELETING, DELETE_SUCCESS } from "../actions";

const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    friendsSaved: false,
    savingFriends: false,
    updatingFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    friends: [],
    error: null
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING:
        return Object.assign({}, state, { fetchingFriends: true });
      case SUCCESS:
        return Object.assign({}, state, {
          friends: [...state.friends, ...action.payload],
          fetchingFriends: false,
          friendsFetched: true,
        });
      case FAILURE:
        return Object.assign({}, state, {
          fetchingFriends: false, 
          error: "Error fetching friends" 
        });
      case ADDING:
        return Object.assign({}, state, { savingFriends: true });
      case ADD_SUCCESS:
        return Object.assign({}, state, {
            friends: [...action.payload],
            savingFriends: false,
            friendsSaved: true,
        });
      case UPDATING:
        return Object.assign({}, state, { updatingFriends: true });
      case UPDATE_SUCCESS:
        return Object.assign({}, state, {
            friends: [...action.payload],
            updatingFriend: false,
            friendUpdated: true,
        });
      case DELETING:
        return Object.assign({}, state, { deletingFriends: true });
      case DELETE_SUCCESS:
        return Object.assign({}, state, {
            friends: [...action.payload],
            deletingFriend: false,
            friendDeleted: true,
        });
      default:
        return state;
    }
  };
  
export default rootReducer;