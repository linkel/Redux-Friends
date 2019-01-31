import React from 'react';
import {connect} from 'react-redux';

const UpdateFriend = props => {
    return (
        <form className="update-friend">
            <h1>change your friend</h1>
            <input type="text" placeholder="id"></input>
            <input type="text" placeholder="name"></input>
            <input type="number" placeholder="age"></input>
            <input type="text" placeholder="email"></input>
        </form>
    )
}

export default UpdateFriend;