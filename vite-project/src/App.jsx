import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home.jsx";   
import About from "./About.jsx"; 
import HealthForm from "./Components/HealthForm.jsx";
import Recipes from "./Components/Recipes.jsx";

import "./App.css";
import Footer from "./Footer.jsx";


function App() {
  return (
    <div>
      <nav 
      className="nav-bar"
      style={{backgroundColor: "tan", padding: "10px", display: "flex", justifyContent: "right", gap: "10px", fontSize: "18px", fontWeight: "bold", color: "black"}}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link>| {" "}
        <Link to="/check-in">Health Check-In</Link>{" "}  
        <Link to="/resources">Recipes</Link>{" "}

      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/check-in" element={<HealthForm />} />
        <Route path="/resources" element={<Recipes />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;