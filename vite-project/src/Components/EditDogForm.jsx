import { useState, useEffect } from "react";
import axios from "axios";

export default function EditDogForm({ dog, onUpdate, onCancel }) {
  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    age: "",
    yearsDiabetic: "",
    heroMessage: "",
    photoUrl: ""
  });

  useEffect(() => {
    if (dog) {
      setFormData(dog);
    }
  }, [dog]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:8080/api/herodogs/${dog.id}`,
        formData
      );

      onUpdate(response.data);
    } catch (error) {
      console.error("Error updating dog:", error);
    }
  };

  return (
    <div className="edit-form">
      <h2>Edit Hero Dog</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
        <input name="breed" value={formData.breed} onChange={handleChange} placeholder="Breed" />
        <input name="age" value={formData.age} onChange={handleChange} placeholder="Age" />
        <input name="yearsDiabetic" value={formData.yearsDiabetic} onChange={handleChange} placeholder="Years Diabetic" />
        <input name="photoUrl" value={formData.photoUrl} onChange={handleChange} placeholder="Photo URL" />
        <textarea name="heroMessage" value={formData.heroMessage} onChange={handleChange} placeholder="Hero Message" />

        <button type="submit">Save Changes</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
}
