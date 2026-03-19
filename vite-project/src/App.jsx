import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home.jsx";   // or "./home.jsx" — match EXACTLY
import About from "./About.jsx"; // same rule here

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;