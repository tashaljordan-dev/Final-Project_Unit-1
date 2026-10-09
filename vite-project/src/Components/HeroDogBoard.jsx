import { useEffect, useState } from "react";
import { getHeroDogs, deleteHeroDog } from "../api/heroDogApi.js";
import EditDogForm from "./EditDogForm";
import "./HeroDogBoard.css";

function HeroDogBoard() {
  const [dogs, setDogs] = useState([]);
  const [editingDog, setEditingDog] = useState(null);

  useEffect(() => {
    getHeroDogs()
      .then((res) => setDogs(res.data))
      .catch((error) => console.error("ERROR:", error));
  }, []);

  return (
    <div className="hero-dog-board">
      <h1 style={{ textAlign: "center", color: "#2f4f4f" }}>
        🐾 Hero Dog Board 🐾
      </h1>

      <h2 style={{ textAlign: "center" }}>
        Number of Hero Dogs: {dogs.length}
      </h2>

      {editingDog && (
        <EditDogForm
          dog={editingDog}
          onUpdate={(updatedDog) => {
            setDogs(dogs.map((d) => (d.id === updatedDog.id ? updatedDog : d)));
            setEditingDog(null);
          }}
          onCancel={() => setEditingDog(null)}
        />
      )}

      {dogs.map((dog) => (
        <div key={dog.id} className="hero-dog-card">
          <h2 className="hero-dog-name">{dog.name}</h2>

          {dog.photoUrl && (
            <img
              src={dog.photoUrl}
              alt={dog.name}
              className="hero-dog-img"
            />
          )}

          <div className="hero-dog-info">
            <p><strong>Breed:</strong> {dog.breed}</p>
            <p><strong>Age:</strong> {dog.age}</p>
            <p><strong>Years Diabetic:</strong> {dog.yearsDiabetic}</p>
            <p><strong>Hero Message:</strong> {dog.heroMessage}</p>
          </div>

          <button
            className="hero-dog-btn"
            onClick={() => setEditingDog(dog)}
          >
            Edit
          </button>

          <button
            className="hero-dog-btn"
            onClick={() => {
              deleteHeroDog(dog.id).then(() => {
                setDogs(dogs.filter((d) => d.id !== dog.id));
              });
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default HeroDogBoard;
