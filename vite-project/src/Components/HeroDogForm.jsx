import { useState } from "react";
import { createHeroDog } from "../api/heroDogApi";

function HeroDogForm() {
  const [form, setForm] = useState({
    name: "",
    breed: "",
    age: "",
    yearsDiabetic: "",
    heroMessage: "",
    photoUrl: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createHeroDog(form).then(() => {
      alert("Hero Dog added!");
      setForm({
        name: "",
        breed: "",
        age: "",
        yearsDiabetic: "",
        heroMessage: "",
        photoUrl: ""
      });
    });
  };

  return (
    <form onSubmit={handleSubmit} className="hero-form">
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
      <input name="breed" placeholder="Breed" value={form.breed} onChange={handleChange} />
      <input name="age" placeholder="Enter Age (numbers only!)" value={form.age} onChange={handleChange} min="0" type="number" required/>
        <input name="yearsDiabetic" placeholder="Years Diabetic (numbers only!)" value={form.yearsDiabetic} onChange={handleChange} min="0" type="number" required/>
      <textarea name="heroMessage" placeholder="Hero Message" value={form.heroMessage} onChange={handleChange}  />
      <input name="photoUrl" placeholder="Photo URL" value={form.photoUrl} onChange={handleChange} />
      <button type="submit">Add Hero Dog</button>
    </form>
  );
}

export default HeroDogForm;
