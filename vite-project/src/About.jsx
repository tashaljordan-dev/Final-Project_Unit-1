import dogPic from "./assets/taz.jpg";
import logo from "./assets/logo.png";
import Headshot from "./assets/headshot.png";
import "./About.css";

function About() {
  return (
    <>
      <div>
        <h1>&#128062;&#128062;About Help a Doggy Out&#128062;&#128062;</h1>
      </div> 

      <h2> Meet Taz Mania Angel </h2>
      <div className = "about-row">
        <img src={dogPic} className="picture" alt="Taz" />
        <h3>
          <strong>Help a Doggy Out</strong> is dedicated to my currently 15 year old diabetic chihuahua <strong>Taz Mania Angel Jordan</strong>. I adopted Taz from the APA in St. Louis--he was a stray that had been surrendered by his previous owners. They told me that he was 25 pounds when he came in. <strong>Imagine that!</strong>...a <strong> 25 pound chihuahua!</strong>
               <p> When he turned 12, he began peeing in the house. I <strong> assumed </strong> it was because he was an old man. But when he peed on the couch, I knew something was wrong.
              Ten minutes into the vet appointment, the vet confirmed what Google had already put into my brain...<strong>"Your dog is diabetic." </strong>
              I'll never forget the look on the vet's face. I later found out that many owners surrender their dogs when they hear the news.<strong> But... I already loved him so there's that! </strong> </p>

              Now, Taz takes insulin twice a day or every 12 hours. He is on special food and has coerced me to make
              him sweet potato treats from scratch. I mean...look at those eyes. Anyway...this app is in honor of him.
                          Taz...thank you for all of your snuggles, cuddles, wet kisses, and
              patience.
              <strong> Out of all the doggies, in all the shelters, in all the
              world...I would still pick YOU!</strong>
        </h3>
      </div>

      <h2> 
        Why Help a Doggy Out? #HADO!
      </h2>
      <div className="about-row">
        <img src={logo} className="logo" alt="Logo" />
        <h3>
            "HADO" stands for "Help a Doggy Out." The name itself was created
              by five beautiful students that I have the honor to teach. This
              app is a companion to their business pitch they gave their first
              week of entrepreneurship class their 8th grade year. I have a distinct memory of
              being in awe of their creativity, enthusiasm, and innovation. When I decided to create this app, I knew I had to
              name it "HADO" to honor the students who make teaching (and
              learning) so much fun!
        
         
            <p>
              This helps pet parents to easily monitor their dog's health
              trends, make informed decisions about their care, and share
              important information with their veterinarian. Help a Doggy Out is
              designed to be user-friendly and accessible, making it easier for
              pet parents to manage their diabetic dog's health and provide the
              best care possible. Unlike most apps, HADO allows owners keep track of their fur babies' health data in one place.
            </p>

            <p>
              <strong>&#128062; HADO allows users to input their pets': </strong>
            </p>
            <ul>
              <li>Blood sugar levels</li>
              <li>Insulin doses</li>
              <li>Mood</li>
              <li>Activity levels</li>
            </ul>
            <p>
              <strong>&#128062;Future iterations of the app will include options to enter a blood glucose curve and resources such as: </strong>
            </p>
            <ol>
              <li>Diabetic Friendly Recipes</li>
              <li>Veterinarian Recommendations (St. Louis only!)</li>
              <li>Alerts and suggestions based on blood sugar levels</li>
              <li>Support Groups</li>
            </ol>
        </h3>
        </div>
           

        <h2>About this Project</h2>
        <div className="about-row">
          <img src={Headshot} className="picture" alt="Headshot" />
        <h3>
          Dr. Tasha Jordan is an award winning STEM educator. She has taught in multiple school districts throughout the St. Louis region. She enjoys applying what she learns in LaunchCode to her middle school computer science classroom. She earned a Doctor of Education in STEM Teaching and Learning from the University of Pittsburgh in June 2024. 
          <p>
            This project was built using React, Vite, and React Router. It demonstrates basic routing and component structure. The app developer (that's me!) 
            utilized HTML, CSS, and JavaScript to create this app.
          </p>
        </h3>

      </div>
    </>
  );
}

export default About;