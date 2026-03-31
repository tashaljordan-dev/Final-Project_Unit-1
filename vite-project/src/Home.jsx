import logo from "./assets/logo.png";
import "./Home.css";
import Headshot from "./assets/headshot.png";


function Home() {
  return (
    <>
    
<div className="title-box">
  <h1> Welcome to Help A Doggy Out!</h1>
</div>

<img src={logo} className="logo" alt="Logo" />

        <h3>
          Welcome to our <strong>Help A Doggy Out</strong> app! We are dedicated to helping owners of diabetic dogs track blood sugar levels and insulin injections. 
          All of your data is securely stored and accessible for you to send to your veterinarian. Help a Doggy Out is designed to help you keep all of your doggy's health information in one central location. 
        </h3>
    

        <h2> About this Project </h2>
        <div className="about-row">

    <img src={Headshot} className="headshot" alt="Headshot" />
        <h3>This project was built using React, Vite, and React Router. It demonstrates basic routing and component structure. The app developer (that's me!) 
          utilized HTML, CSS, and JavaScript to create this app.
          </h3> 
        </div>


    </>
  );  
}

export default Home;

