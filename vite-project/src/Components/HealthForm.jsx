import "./HealthForm.css";
import { useState } from "react";

function HealthForm() {
  const [formData, setFormData] = useState({
    timeDate: "",
    bloodSugar: "",
    insulinDose: "",
    food: "",
    snack: "",
    mood: "",
    activity: "",
    exercise: "",
    symptoms: "",
  });

  const [entries, setEntries] = useState([]); // ✅ New state for cards

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setEntries((prev) => {
      const updated = [formData, ...prev];
      return updated.slice(0, 10);
    });

    alert("Your pet's data has been saved successfully! Please scroll down to view your submission!");

    setFormData({
      timeDate: "",
      bloodSugar: "",
      insulinDose: "",
      food: "",
      snack: "",
      mood: "",
      activity: "",
      exercise: "",
      symptoms: "",
    });
  };

  return (
    <div className="container">
      <div>
        <div className ="column">
        <h2>Dog Health Check-In</h2>

        <form onSubmit={handleSubmit}>
          <label>Date & Time</label>
          <input
            type="datetime-local"
            name="timeDate"
            value={formData.timeDate}
            onChange={handleChange}
            required
          />

          <label>Blood Sugar (mg/dL)</label>
          <input
            type="number"
            name="bloodSugar"
            value={formData.bloodSugar}
            onChange={handleChange}
            required
          />

          <label>Insulin Dose (units)</label>
          <input
            type="number"
            name="insulinDose"
            value={formData.insulinDose}
            onChange={handleChange}
            required
          />

          <label>Food</label>
          <input
            type="text"
            name="food"
            value={formData.food}
            onChange={handleChange}
            placeholder="e.g., 1 cup of dry food, 1/2 can of wet food..."
          />

          <label>Snack</label>
          <input
            type="text"
            name="snack"
            value={formData.snack}
            onChange={handleChange}
            placeholder="e.g., 1 treat, 1/4 cup of cooked chicken..."
          />  

          <label>Mood</label>
          <select
            name="mood"
            value={formData.mood}
            onChange={handleChange}
          >
            <option value="">Select mood</option>
            <option value="happy">Happy</option>
            <option value="normal">Normal</option>
            <option value="lethargic">Lethargic</option>
            <option value="irritable">Irritable</option>
          </select>

          <label>Activity Level</label>
          <select
            name="activity"
            value={formData.activity}
            onChange={handleChange}
          >
            <option value="">Select activity</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>

          <label> Exercise </label>
          <select
            name="exercise"
            value={formData.exercise}
            onChange={handleChange}
          > 
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
            placeholder="e.g., vomiting, diarrhea, excessive thirst, shaking..."
          />

          <button type="submit">Save Entry</button>
        </form>
        </div>
<div className="column">
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
      </div>
      <div className="column">

      <div className="cards-container">
        <h2>Saved Check-Ins</h2>
        {entries.length === 0 && <p>No entries saved yet.</p>}

        {entries.map((entry, index) => (
          <div key={index} className="card">
            <p><strong>Date & Time:</strong> {entry.timeDate}</p>
            <p><strong>Blood Sugar:</strong> {entry.bloodSugar}</p>
            <p><strong>Insulin Dose:</strong> {entry.insulinDose}</p>
            <p><strong>Food:</strong> {entry.food}</p>
            <p><strong>Snack:</strong> {entry.snack}</p>
            <p><strong>Mood:</strong> {entry.mood}</p>
            <p><strong>Activity:</strong> {entry.activity}</p>
            <p><strong>Exercise:</strong> {entry.exercise}</p>
            <p><strong>Symptoms:</strong> {entry.symptoms}</p>
          </div>
        
        ))}
        </div>
      </div>
    </div>
  );
}

export default HealthForm;