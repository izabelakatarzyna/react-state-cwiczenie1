import React, { useState } from "react";
import Animal from "./Animal";

const data = ["cow", "horse", "dog"];

const App = () => {
  const [animals, setAnimals] = useState(["cow"]);

  const handleClick = () => {
    const random = data[Math.floor(Math.random() * data.length)];
    setAnimals([...animals, random]);
  };

  console.log(animals);
  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      {animals.map((animal, index) => (
        <Animal key={index} name={animal} />
      ))}
    </div>
  );
};

export default App;
