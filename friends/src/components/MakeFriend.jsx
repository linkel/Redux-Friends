import React from 'react';
import {connect} from 'react-redux';
import {addFriend} from '../actions';

const MakeFriend = props => {
    return (
        <form onSubmit={(e) => props.addFriend(e.target[0].value, e.target[1].value, e.target[2].value)} className="make-friend">
            <h1>make a new friend</h1>
            <input type="text" placeholder="name"></input>
            <input type="number" placeholder="age"></input>
            <input type="text" placeholder="email"></input>
            <input type="submit"></input>
        </form>
    )
}

const mapStateToProps = state => {
    return {
      friends: state.friends,
      error: state.error, 
      savingFriends: state.savingFriends, 
      friendsSaved: state.friendsSaved
    };
  };
  
  export default connect(mapStateToProps, { addFriend })(MakeFriend);
  