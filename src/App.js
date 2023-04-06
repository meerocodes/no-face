import './App.css';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Nav from './components/Nav';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/shop' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
