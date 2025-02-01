import './App.css';
import {useEffect} from 'react'
import {BrowserRouter, HashRouter, Route, Routes} from 'react-router-dom';
import {  Link } from 'react-scroll';
import About from "./Pages/About";
import Home from './Pages/Home'
import Dev from './Pages/Dev'
import Scrol from './Components/Scrol'
import Event from './Pages/event'
function App() {
  useEffect(() => {
    document.title = 'Acumen';
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route path='/about' element={<About />}></Route>
        <Route path='/dev' element={<Dev />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Scrol' element={<Scrol />}></Route>
        <Route path='/events' element={<Event />}></Route>
      </Routes>
      <Link to='#events'></Link>
    </HashRouter>
  );
}

export default App;
