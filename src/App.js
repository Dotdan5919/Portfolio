import React from 'react'
import './App.css';
import SingleProject from './pages/SingleProject';

import HomePage from './pages/HomePage';
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';




function App() {



  return(

    <BrowserRouter >
<Routes>

<Route path='/' exact element={<HomePage/>}/>
<Route path='home' exact element={<HomePage/>}/>



<Route path='/:id' exact  element={<SingleProject/>}/>






</Routes>
</BrowserRouter>
  );


}

export default App;