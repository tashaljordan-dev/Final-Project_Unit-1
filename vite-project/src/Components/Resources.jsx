import { useState } from "react";
import "./Resources.css";
import syringeinfo from "../assets/syringeinfo.jpg";
import insulintips from "../assets/insulintips.jpg";



function Resources() {
  return (
    <>
      <div>
        <h2 className="fancy-heading">Resources</h2>

        <div className="about-row2">
          <img src={insulintips} className="resourcesPicture" alt="Insulin Tips" />
    
          <div>
            <h3>Insulin Tips</h3>

            <ul>
              <li>Always test your pup <strong>BEFORE</strong> a feeding to ensure proper blood sugar levels.</li>
              <li>Use a consistent routine for insulin administration to help maintain stable blood sugar levels.</li>
              <li>Store insulin properly according to the manufacturer's instructions to maintain its effectiveness.</li>
              <li>Monitor your dog's blood sugar levels regularly to adjust insulin doses as needed.</li>
              <li>Be aware of signs of hypoglycemia (low blood sugar) and have a plan in place to treat it quickly.</li>
              <li>Rotate injection sites to prevent tissue damage.</li>
            </ul>
          </div>
        </div>

        <div className="about-row2">
          <img src={syringeinfo} className="resourcesPicture" alt="Syringe Information" />

          <div>
            <h3>Syringe Information</h3>
            <ul>
              <li>Always use a new syringe after every dosage</li>
              <li>Use the correct syringe size for your dog's insulin dose to ensure accurate dosing.</li>
              <li>Dispose of used syringes safely in a sharps container to prevent injury and contamination.</li>
              <li>Keep syringes out of reach of children and pets to prevent accidental injury.</li>
              <li>Consult with your veterinarian for proper syringe usage and disposal methods.</li>
            </ul>
          </div>
        </div>

        <div className="about-row2">
          <div>
            <h3>Veterinarians & Vet Techs (St. Louis Region Only) </h3>
            <ul>
              <li> Dr. Britt | Veterinarian | Webster Groves Veterinary Hospital | (314) 968-4310</li>
              <li> Brooke | Vet Tech | In home insulin shots </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resources;