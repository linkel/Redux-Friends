import React from 'react';
import {connect} from 'react-redux';
import {updateFriend} from '../actions';

const UpdateFriend = props => {
    return (
        <form onSubmit={(e)=>{e.preventDefault(); props.updateFriend(e.target[0].value, e.target[1].value, e.target[2].value, e.target[3].value)}} className="update-friend">
            <h1>change your friend</h1>
            <input type="text" placeholder="id"></input>
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
      updatingFriend: state.updatingFriend, 
      friendUpdated: state.friendUpdated
    };
  };
  
  export default connect(mapStateToProps, { updateFriend })(UpdateFriend);
  