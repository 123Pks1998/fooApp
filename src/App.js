import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import SignUP from './components/SignUP';
import Thanku from './components/Thanku';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/menu' element={<Menu />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/' element={<SignUP />}></Route>
          <Route path='/thanku' element={<Thanku />}></Route>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
