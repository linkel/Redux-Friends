import React from 'react';
import red_x from "../Red_x.svg";
import {deleteFriend} from "../actions";
import {connect} from "react-redux";

const Friends = (props) => {
    return (
        <ul className="friends">
            {props.friends.map((friend) => <li key={friend.id} className="friend">
                {friend.name} is {friend.age} and can be reached at {friend.email}
                <img alt="red_x" onClick={() => props.deleteFriend(friend.id)} className="red-x" src={red_x}/></li>)}
        </ul>
    )
}

const mapStateToProps = state => {
    return {
      friends: state.friends,
      error: state.error, 
      deletingFriend: state.deletingFriend, 
      friendDeleted: state.friendDeleted
    };
  };
  
export default connect(mapStateToProps, { deleteFriend })(Friends);
  