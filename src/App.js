import Navbar from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Skills' element={<Skills/>}/> 
        <Route path='/Experience' element={<Experience/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>

    </>
  );
}

export default App;
