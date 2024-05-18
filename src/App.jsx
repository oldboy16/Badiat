import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import AdibDeteil from './pages/AdibDeteil/AdibDeteil';
import Books from './pages/Books/Books';
import BookDetail from './pages/BookDetail/BookDetail';
import Profile from './pages/Profile/Profile';
import Login from './pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/adib-detail/:id' element={<AdibDeteil/>}/>
        <Route path='/books' element={<Books/>}/>
        <Route path='/book-detail/:id' element={<BookDetail/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
