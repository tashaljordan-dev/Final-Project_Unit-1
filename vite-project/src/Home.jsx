import logo from "./assets/logo.png";
import "./Home.css";
import Headshot from "./assets/headshot.png";


function Home() {
  return (
    <>
    
<div className="title-box">
  <h1> Welcome to Help A Doggy Out! #HADO</h1>
</div>
<div className="about-row">
  <img src={logo} 
  alt="Taz the chihuahua smiling with his tongue out" className="logo" />
  <h3>
    Welcome to our <strong>Help A Doggy Out</strong> app! We are dedicated to helping owners of diabetic dogs track blood sugar levels and insulin injections. 
    All of your data is securely stored and accessible for you to send to your veterinarian. Help a Doggy Out is designed to help you keep all of your doggy's health information in one central location.
  </h3>
</div>

<div className="title-box">
  <h2> Our Mission: </h2>
  <h3>To help pet parents care for diabetic dogs with confidence, compassion, and clear daily tools — inspired by the love and resilience of Taz Mania Angel Jordan.  </h3>
</div>
    </>
  );  
}

export default Home;

