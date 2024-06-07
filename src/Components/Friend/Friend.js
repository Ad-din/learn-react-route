import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const navigate=useNavigate();
    const showuserId=()=>{
        const path=`/friends/${id}`;
        navigate(path);

    }
    const{name,username,id}=props.friend;
    return (
        <div>
            <h6>Name:{name}</h6>
            <Link to={'/friend/'+id}>Show Details</Link>
            <button onClick={showuserId}>{username} ID:{id}</button>
        </div>
    );
};

export default Friend;