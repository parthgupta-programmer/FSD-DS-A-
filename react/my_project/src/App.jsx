import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./components/home";
import About from "./components/aboutUS";
import Courses from "./components/course";
import Contact from "./components/contact";

import './App.css';

function App() {
  return (
    <div>
<BrowserRouter>
     
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About Us</Link> |{" "}
        <Link to="/courses">Courses</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>

    </BrowserRouter>
    </div>
    
  );
}

export default App;