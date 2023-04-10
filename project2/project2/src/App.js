import React from 'react';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Activities from './Pages/Activities';
import Plays from './Pages/Plays';
import Stream from './Pages/Stream';
import Sports from './Pages/Sports';
import Movies from './Pages/Movies';
import Events from './Pages/Events';
import Buzz from './Pages/Buzz';

function App() {
  return (
    <div className="App">
    
     <BrowserRouter>
     <Navbar/>
     <Routes>
     <Route path ="Activities"element={<Activities/>}/>
        <Route path ="Plays"element={<Plays/>}/>
        <Route path ="Stream"element={<Stream/>}/>
        <Route path ="Sports"element={<Sports/>}/>
        <Route path ="Movies"element={<Movies/>}/>
        <Route path ="Events"element={<Events/>}/>
        <Route path ="Buzz"element={<Buzz/>}/>
       
        
        
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
