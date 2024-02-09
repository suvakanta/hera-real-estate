import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react'
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Properties from "./pages/Properties";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/properties' element={<Properties/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;

