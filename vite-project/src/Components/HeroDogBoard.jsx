import { useEffect, useState } from "react";
import { getHeroDogs, deleteHeroDog} from "../api/heroDogApi.js";

function HeroDogBoard() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {

  getHeroDogs()
    .then((res) => {
      console.log("STATUS:", res.status);
      console.log("DATA:", res.data);
      console.log("IS ARRAY:", Array.isArray(res.data));

      setDogs(res.data);
    })
    .catch((error) => {
      console.error("ERROR:", error);
      console.error("RESPONSE:", error.response);
    });
}, []);

  return (
    <div class name = "hero-dog-board">
      <h1> &#128062; Hero Dog Board &#128062;</h1>
      <h2> Number of Hero Dogs: {dogs.length} </h2>

      {dogs.map((dog) => (
        <div key={dog.id}>
          <h2>{dog.name}</h2>
          {dog.photoUrl && (
            <img 
            src={dog.photoUrl} 
            alt={dog.name} 
            width="200"
          /> 
        )}
          <p>Breed: {dog.breed}</p>
          <p>Age: {dog.age}</p>
          <p>Years Diabetic: {dog.yearsDiabetic}</p>
          <p>{dog.heroMessage}</p>
          <button onClick={() => {
            deleteHeroDog(dog.id)
              .then(() => {
                setDogs(dogs.filter((d) => d.id !== dog.id));
              });
          }}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default HeroDogBoard;