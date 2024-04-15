import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import AdibDeteil from './pages/AdibDeteil/AdibDeteil';
import Books from './pages/Books/Books';
import BookDetail from './pages/BookDetail/BookDetail';
import Profile from './pages/Profile/Profile';

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
      </Routes>
    </div>
  );
}

export default App;
