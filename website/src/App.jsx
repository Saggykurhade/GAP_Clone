import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path = '/' element = { <Homepage /> } />
        <Route exact path = '/Navbar' element = { <Navbar /> } />
        <Route exact path = '/Footer' element = { <Footer /> } />
      </Routes>
    </div>
  );
}

export default App;
