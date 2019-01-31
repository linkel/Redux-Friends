import React from 'react';

const Friends = (props) => {
    return (
        <ul className="friends">
            {props.friends.map((friend) => <li key={friend.id} className="friend">{friend.name}</li>)}
        </ul>
    )
}

//  {
//     id: 4,
//     name: 'Sean',
//     age: 35,
//     email: 'sean@lambdaschool.com',
//   },
export default Friends;