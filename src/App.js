
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Friends from './Components/Friends/Friends';
import { Route, Routes } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Header/Header';
import FriendDetail  from "./Components/FriendDetail/FriendDetail";
import Posts from "./Components/Posts/Posts";
import PostDetail from "./Components/Posts/PostDetail"
function App() {
  return (
    
    <div className="App">
   <Header></Header>
      <Routes>
        
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/posts' element={<Posts></Posts>}>
          <Route path=':postId' element={<PostDetail></PostDetail>}></Route>
      </Route>
      <Route path='/friends' element={<Friends/>}></Route>
      <Route path='/friends/:friendId' element={<FriendDetail></FriendDetail>}></Route>
      
      <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      </div>
  );
}

export default App;
