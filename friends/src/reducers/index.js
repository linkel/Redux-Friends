import {FETCHING,SUCCESS,FAILURE} from "../actions";

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
      default:
        return state;
    }
  };
  
export default rootReducer;