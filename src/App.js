import React from 'react'
import './App.css';
import SingleProject from './pages/SingleProject';

import HomePage from './pages/HomePage';
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';






function App() {



  return(

    
    <BrowserRouter >

<Routes>


 

<Route path='/'  element={<HomePage/>}/>
<Route path='home'  element={<HomePage/>}/>



<Route path="/:id"   element={<SingleProject/>}/>






</Routes>
</BrowserRouter>
  );


}

export default App;