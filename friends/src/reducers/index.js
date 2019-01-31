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
          friends: [...state.friend, ...action.payload], // if our promise was successful
          fetchingFriends: false // also, set our boolean to false, because we're no longer fetching
        });
      case FAILURE:
        return Object.assign({}, state, {
          fetchingFriends: false, // we're also no longer fetching here so set the boolean to false
          error: "Error fetching friends" // now we're getting an error back, set the error as we'd see fit
        });
      default:
        return state;
    }
  };
  
export default rootReducer;