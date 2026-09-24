import { useEffect, useState } from "react";
import { getHeroDogs, deleteHeroDog } from "../api/heroDogApi.js";

// --- Inline Styles ---
const cardStyle = {
  backgroundColor: "tan",
  border: "4px solid #2f6f6f",
  borderRadius: "14px",
  padding: "20px",
  margin: "20px auto",
  maxWidth: "500px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
  fontFamily: "Cambria, Georgia, serif"
};

const nameStyle = {
  textAlign: "center",
  color: "#2f6f6f",
  marginBottom: "10px"
};

const imgStyle = {
  width: "200px",
  height: "auto",
  borderRadius: "12px",
  display: "block",
  margin: "0 auto 15px auto"
};

const infoStyle = {
  fontSize: "16px",
  lineHeight: "1.5",
  marginBottom: "15px"
};

const buttonStyle = {
  marginTop: "10px",
  padding: "8px 14px",
  backgroundColor: "#2f6f6f",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer"
};


function HeroDogBoard() {
  const [dogs, setDogs] = useState([]);

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

      {dogs.map((dog) => (
        <div key={dog.id} style={cardStyle}>
          <h2 style={nameStyle}>{dog.name}</h2>

          {dog.photoUrl && (
            <img
              src={dog.photoUrl}
              alt={dog.name}
              style={imgStyle}
            />
          )}

          <div style={infoStyle}>
            <p><strong>Breed:</strong> {dog.breed}</p>
            <p><strong>Age:</strong> {dog.age}</p>
            <p><strong>Years Diabetic:</strong> {dog.yearsDiabetic}</p>
            <p><strong>Hero Message:</strong> {dog.heroMessage}</p>
          </div>

          <button
            style={buttonStyle}
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
