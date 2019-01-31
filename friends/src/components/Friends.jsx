import React from 'react';

const Friends = (props) => {
    return (
        <ul className="friends">
            {props.friends.map((friend) => <li key={friend.id} className="friend">{friend.name} is {friend.age} and can be reached at {friend.email}</li>)}
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