import { useState } from "react";
import "./Resources.css";
import syringeinfo from "../assets/syringeinfo.jpg";
import insulintips from "../assets/insulintips.jpg";
import ExpandMenu from "./ExpandMenu";



function Resources() {
  return (
    <>
      <section>
        <h2> Diabetic Care Info </h2>
      <ExpandMenu title="Blood Sugar Levels">
        <ul>
          <li>Healthy ranges vary, but most diabetic dogs aim for 100–250 mg/dL depending on timing around meals and insulin.</li>
          <li>Always check your dog's specific target range with your veterinarian.</li>
          <li>Monitor your dog's blood sugar levels regularly to ensure they are within the recommended range and adjust care as needed with your vet's guidance.</li>
        </ul>
      </ExpandMenu>

      <ExpandMenu title="Insulin">
        <ul>
          <li>Common types include Vetsulin, NPH, and glargine. Always use the type prescribed by your vet.</li>
          <li>Dosage is highly individualized based on your dog's weight, blood sugar levels, and response to insulin. Follow your veterinarian's instructions closely.</li>
          <li>Administer insulin injections as directed by your veterinarian, typically every 12 hours, and monitor your dog's response to adjust dosage if necessary.</li>
        </ul>
      </ExpandMenu>

      <ExpandMenu title="When to Use Insulin">
        <ul>
          <li>Typically given after meals, every 12 hours, but timing must match your vet’s instructions.</li>
          <li>Administer insulin at the same times each day to maintain consistent blood sugar control.</li>
          <li>Always follow your veterinarian's guidance on insulin administration timing to ensure optimal management of your dog's diabetes.</li>
          <li>Never give insulin or change the insulin dosage without veterinary guidance, as incorrect timing or dosage can lead to dangerous blood sugar levels. </li>
        </ul>
      </ExpandMenu>

      <ExpandMenu title="Foods to Feed Your Dog">
        <ul>
          <li>High‑fiber, low‑fat diets with consistent portions.</li>
          <li>Avoid sugary treats and table scraps.</li>
          <li>Consult your veterinarian for specific dietary recommendations tailored to your dog's needs.</li>
          <li>Consider diabetic‑friendly treats like sweet potato or peanut butter (in moderation) for blood sugar support during hypoglycemic episodes.</li>
        </ul>
      </ExpandMenu>
    </section>
    <section>
        <div className="about-row2">
          <div>
            <h3>Veterinarians & Vet Techs (St. Louis Region Only) </h3>
            <table className="vet-table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Role</th>
      <th>Location / Service</th>
      <th>Contact</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Dr. Britt</td>
      <td>Veterinarian</td>
      <td>Webster Groves Veterinary Hospital</td>
      <td>(314) 968-4310</td>
    </tr>

    <tr>
      <td>Brooke</td>
      <td>Vet Tech</td>
      <td>In‑home insulin shots</td>
      <td>—</td>
    </tr>
  </tbody>
</table>
          </div>
        </div>
      </section>
    </>
  );
}

export default Resources;