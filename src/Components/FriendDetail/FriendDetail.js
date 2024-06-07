import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const param=useParams();
    const {friendId}=param;
    const [friend,setFriend]=useState([]);
    useEffect(()=>{
        const url= `https://jsonplaceholder.typicode.com/users/${friendId}`;
        console.log(url);
        fetch(url)
        .then(res=>res.json())
        .then(data=>setFriend(data))

    },[])
    const{id,name,username,email}=friend;

    
    return (
        <div>
            
            <h3>This is friend detail no:{friendId}</h3>
            <p>His Name:{name}</p>
            <p>His id:{id}</p>
        </div>
    );
};

export default FriendDetail;