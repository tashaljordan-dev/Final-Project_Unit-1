import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home.jsx";   
import About from "./About.jsx"; 
import HealthForm from "./Components/HealthForm.jsx";
import Recipes from "./Components/Recipes.jsx";
import Resources from "./Components/Resources.jsx";
import Footer from "./Footer.jsx";
import Reminders from "./Components/Reminders.jsx";
import BGCurve from "./Components/BGCurve.jsx";
import HeroDogForm from "./components/HeroDogForm";
import HeroDogBoard from "./components/HeroDogBoard";


function App() {
  return (
    <>
      <nav 
      className="nav-bar"
      style={{backgroundColor: "tan", 
      padding: "10px", 
      display: "flex", 
      justifyContent: "right", 
      gap: "10px", 
      fontSize: "18px", 
      fontWeight: "bold", 
      color: "black"
  }}
  >
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link>| {" "}
        <Link to="/check-in">Health Check-In</Link>| {" "}  
        <Link to="/recipes">Recipes</Link>| {" "}
        <Link to="/resources">Resources</Link>|{" "}
        <Link to="/reminders">Reminders</Link>| {" "}
        <Link to="/bg-curve">BG Curve</Link>
        <Link to="/hero-dog-form">Add Hero Dog</Link> |{" "}
        <Link to="/hero-dog-board">Hero Board</Link>


      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/check-in" element={<HealthForm />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/resources" element={<Resources />}/>
        <Route path="/reminders" element={<Reminders />} />
        <Route path="/bg-curve" element={<BGCurve />} />
        <Route path="/hero-dog-form" element={<HeroDogForm />} />
        <Route path="/hero-dog-board" element={<HeroDogBoard />} />
      </Routes>
    
          <Footer />
          </>

  );
};

export default App;