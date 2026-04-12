import "./HealthForm.css";
import { useState } from "react";

function HealthForm() {
  const initialFormState = {
    timeDate: "",
    bloodSugar: "",
    insulinDose: "",
    food: "",
    snack: "",
    mood: "",
    activity: "",
    exercise: "",
    symptoms: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [entries, setEntries] = useState([]);
  const [isEditing, setIsEditing] = useState(null);

  const onDelete = (index) => {
    const updated = entries.filter((_, i) => i !== index);
    setEntries(updated);
    localStorage.setItem("healthEntries", JSON.stringify(updated));
  };

  const onEdit = (index) => {
    const entryToEdit = entries[index];
    setFormData(entryToEdit);
    setIsEditing(index);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setEntries((prev) => {
      const updated = [formData, ...prev];
      return updated.slice(0, 10); // keep max 10
    });

    alert(
      "Your pet's data has been saved successfully! Please scroll down to view your submission!"
    );

    setFormData(initialFormState);
    setIsEditing(null);
  };

  /* -----------------------------
     Render
  ----------------------------- */
  return (
    <div className="form-container">
      <div className="container">
        {/* COLUMN 1 — FORM */}
        <h2>Dog Health Check-In</h2>

        <form onSubmit={handleSubmit}>
          <label>Date & Time</label>
          <input
            type="datetime-local"
            name="timeDate"
            value={formData.timeDate}
            onChange={handleChange}
            required />

          <label>Blood Sugar (mg/dL)</label>
          <input
            type="number"
            name="bloodSugar"
            value={formData.bloodSugar}
            onChange={handleChange}
            required />

          <label>Insulin Dose (units)</label>
          <input
            type="number"
            name="insulinDose"
            value={formData.insulinDose}
            onChange={handleChange}
            required />

          <label>Food</label>
          <input
            type="text"
            name="food"
            value={formData.food}
            onChange={handleChange}
            placeholder="e.g., 1 cup dry food, 1/2 can wet food..." />

          <label>Snack</label>
          <input
            type="text"
            name="snack"
            value={formData.snack}
            onChange={handleChange}
            placeholder="e.g., 1 treat, 1/4 cup cooked chicken..." />

          <label>Mood</label>
          <select name="mood" value={formData.mood} onChange={handleChange}>
            <option value="">Select mood</option>
            <option value="happy">Happy</option>
            <option value="normal">Normal</option>
            <option value="lethargic">Lethargic</option>
            <option value="irritable">Irritable</option>
          </select>

          <label>Activity Level</label>
          <select name="activity" value={formData.activity} onChange={handleChange}>
            <option value="">Select activity</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>

          <label>Exercise</label>
          <select name="exercise" value={formData.exercise} onChange={handleChange}>
            <option value="">Select exercise</option>
            <option value="walk">Walk</option>
            <option value="play">Run</option>
            <option value="none">None</option>
          </select>

          <label>Symptoms</label>
          <textarea
            name="symptoms"
            value={formData.symptoms}
            onChange={handleChange}
            placeholder="e.g., vomiting, diarrhea, excessive thirst, shaking..." />

          <button type="submit">Save Entry</button>
        </form>
      </div>

      <div className="container">
        {/* COLUMN 2 — LIVE PREVIEW */}
        <div className="live-preview">
          <h2>Live Preview</h2>
          <p>Date & Time: {formData.timeDate}</p>
          <p>Blood Sugar Level: {formData.bloodSugar}</p>
          <p>Insulin Dose: {formData.insulinDose}</p>
          <p>Food: {formData.food}</p>
          <p>Snack: {formData.snack}</p>
          <p>Mood: {formData.mood}</p>
          <p>Activity Level: {formData.activity}</p>
          <p>Exercise: {formData.exercise}</p>
          <p>Symptoms: {formData.symptoms}</p>
        </div>
      </div>

      {/* COLUMN 3 — SAVED CARDS */}
      <div className="container">
        <div className="cards-container">
          <h2>Saved Check-Ins</h2>

          {entries.length === 0 && <p>No entries saved yet.</p>}

          {entries.map((entry, index) => (
            <div key={index} className="card">
              {Object.entries(entry).map(([key, value]) => (
                <p key={key}>
                  <strong>{key.replace(/([A-Z])/g, " $1").trim().toLowerCase().replace(/^./, (char) => char.toUpperCase())}:</strong> {value}
                </p>
              ))}
              <div className = "card-actions">
              <button 
              className="delete-btn"
              onClick={()=> onDelete(index)}
              >
                Delete 
              </button>

              <button 
              className = "edit-btn"
              onClick={()=> onEdit(index)}
              >
                Edit 
              </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HealthForm;