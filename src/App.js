
import './App.css';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Supportss from './components/Supportss';
import About from './components/About';
import Labs from './components/Labs';
import NotFound from './components/NotFound';
import MainHeader from './components/MainHeader';
function App() {
  return (
    <div className="App">

      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>  <NavLink to="/about">About</NavLink></li>
          <li>  <NavLink to="/supportss">Support</NavLink></li>
          <li>  <NavLink to="/labs">Labs</NavLink></li>
          
        </ul>
      </nav>
     <Routes>

      <Route path="/" element={<MainHeader/>}/>
      {/* this becomes your default route */}
       <Route index element={<Home/>}/>
      <Route path="/supportss" element={<Supportss/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/labs" element={<Labs/>}/>
      <Route path="*" element={<NotFound/>}/>
      <Route/>
    
     </Routes>





    </div>
  );
} 
export default App;
