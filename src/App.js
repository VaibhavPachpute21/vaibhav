import Navbar from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import React from 'react';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/skills' element={<Skills/>}/> 
        <Route path='/experience' element={<Experience/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<Home/>}/>

      </Routes>

    </>
  );
}

export default App;
