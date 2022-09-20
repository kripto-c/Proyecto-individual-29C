import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandigPage from './Components/LandingPage//ladingPage.jsx'
import Home from './Components/Home/home';
import BreedsCreate from './Components/BreedsCreate/breedsCreate';
import PageNoFound from './Components/PagNoFound/PagnoFound';
import Detail from './Components/Detail/detail';

function App() {
  return (
    <div className="App">
    <Routes>
    <Route exact path='/' element={ <LandigPage /> }/>
    <Route path='/home' element={ <Home />}/>
    <Route path='/create_breed_dog' element={<BreedsCreate />}/>
    <Route path='/home/:id' element={<Detail/>} />
    <Route path='*' element={<PageNoFound />}/>
    </Routes>
    </div>
  );
}

export default App;
