import React from 'react';

const Friends = (props) => {
    return (
        <ul className="friends">
            This is my list
            {props.friends.map((friend) => <li className="friend">{friend.name}</li>)}
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