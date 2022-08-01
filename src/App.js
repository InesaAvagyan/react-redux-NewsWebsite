import { Route, Routes } from 'react-router-dom';
import './App.css';
import InitialPosts from './components/InitialPosts/InitialPosts';
import Posts from './components/Posts/Posts';
import HomeWrapper from './page/HomeWrapper'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeWrapper/>}>
          <Route index element={<Posts/>}/>
          <Route path=':blogId' element={<InitialPosts/>}/>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
