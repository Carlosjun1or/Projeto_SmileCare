import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Nav } from './components/Nav/Nav';
import { Footer } from './components/Footer/Footer';

import { Home } from './components/pages/Home/Home';
import { Login } from './components/pages/Login/Login';
import { Notfound } from './components/pages/Notfound/Notfound';

function App() {
  return (
    <Router>
      <div className="grid-container">
        <Header />
       <Nav /> 
        <main className="main">
          <Routes>
             <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} /> 
            <Route path="*" element={<Notfound/>} /> 

          </Routes>
        </main>
         <Footer />  
      </div>
    </Router>
  );
}

export default App;
