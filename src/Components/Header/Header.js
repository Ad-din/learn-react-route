import React from 'react';
import { Link, resolvePath, useMatch, useResolvedPath } from 'react-router-dom';

const Header = ({children,to,...props}) => {
    let resolved=useResolvedPath(to);
    let match=useMatch({path: resolved.pathname,end:true})
    return (
        <div>
            <h1>Welcome to my fancy Routing!!!</h1>
            <nav>
                <Link style={{color:match?'red':'black'}} to="/">Home</Link>
                <Link style={{color:match?'red':'black'}} to="/about">About</Link>
                <Link style={{color:match?'red':'black'}} to="/friends">Friends</Link>
                <Link style={{color:match?'red':'black'}} to="/posts">Posts</Link>
                
            </nav>
        </div>
    );
};

export default Header;