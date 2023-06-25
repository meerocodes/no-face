import './App.css';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import PreOrderPage from './components/PreOrderPage';
import LandingPage from './components/LandingPage';
import Error from './components/Error';
import About from './components/About';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/*' element={<Error/>}/>
        <Route path='/About' element={<About/>}/>

        
      

        <Route path='/preOrder' element={<PreOrderPage/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
