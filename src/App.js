import {Routes, Route} from 'react-router-dom'
import Post from "./components/Post/Post";
import EditPost from "./components/EditPost/EditPost";

function App() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Post/>}/>
          {/*<Route path='/add-post'/>*/}
          <Route path='/edit-post/:id' element={<EditPost/>}/>
      </Routes>
    </div>
  );
}

export default App;
