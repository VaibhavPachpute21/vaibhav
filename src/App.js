import Navbar from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import React from 'react';
import { ToastContainer } from 'react-toastify'; 
import EduMitraDashboard from './components/BI/EduMitraDashboard';

function App() {
  return (
    <>
      <Navbar/>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/skills' element={<Skills/>}/> 
        <Route path='/experience' element={<Experience/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/EduMitra-analytics-dashboard' element={<EduMitraDashboard/>}/>

        <Route path='*' element={<Home/>}/>

      </Routes>

    </>
  );
}

export default App;
