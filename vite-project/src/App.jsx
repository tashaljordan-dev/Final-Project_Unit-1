import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./home.jsx";   
import About from "./About.jsx"; 
import HealthForm from "./Components/HealthForm.jsx";
import Recipes from "./Components/Recipes.jsx";
import Resources from "./Components/Resources.jsx";
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
        <Link to="/recipes">Recipes</Link>{" "}
        <Link to="/resources">Resources</Link>{" "}

      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/check-in" element={<HealthForm />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/resources" element={<Resources />}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;