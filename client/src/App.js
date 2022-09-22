import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandigPage from './Components/LandingPage//ladingPage.jsx'
import Home from './Components/Home/home';
import BreedsCreate from './Components/BreedsCreate/breedsCreate';
import PageNoFound from './Components/PagNoFound/PagnoFound';
import Detail from './Components/Detail/detail';
import About from './Components/About/about';
import DeleteBreeds from './Components/deleteBreeds/deleteBreeds';

function App() {
  return (
    <div className="App">
    <Routes>
    <Route exact path='/' element={ <LandigPage /> }/>
    <Route path='/home' element={ <Home />}/>
    <Route path='/create_breed_dog' element={<BreedsCreate />}/>
    <Route path='/home/:id' element={<Detail/>} />
    <Route path='/home/about' element={<About/>}/>
    <Route path='/home/breedsDelete' element={ <DeleteBreeds />}/>
    <Route path='*' element={<PageNoFound />}/>
    </Routes>
    </div>
  );
}

export default App;
