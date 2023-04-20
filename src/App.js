import './App.css';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import PreOrderPage from './components/PreOrderPage';
import LandingPage from './components/LandingPage';


function App() {
  return (
    <div className="App">

      <Routes>
      <Route path='/' element={<LandingPage/>}/>

        <Route path='/preOrder' element={<PreOrderPage/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
