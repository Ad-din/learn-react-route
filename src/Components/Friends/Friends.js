import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const[friends,setFriends]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setFriends(data))


    },[])
    return (
        <div>
            <h2>Hello From Friends</h2>
            <p>Length of Friends:{friends.length}</p>
            {
                friends.map(friend=><Friend key={friend.id} friend={friend}></Friend>)
            }
               
        </div>
    );
};

export default Friends;