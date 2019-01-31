import React from 'react';

const MakeFriend = props => {
    return (
        <form className="make-friend">
            <h1>make a new friend</h1>
            <input type="text" placeholder="name"></input>
            <input type="number" placeholder="age"></input>
            <input type="text" placeholder="email"></input>
        </form>
    )
}

export default MakeFriend;