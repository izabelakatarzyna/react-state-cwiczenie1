import React from "react";
import cow from "./images/animal1.png";
import horse from "./images/animal2.jpg";
import dog from "./images/animal3.jpg";

const Animal = ({ name }) => {
  const images = {
    cow,
    horse,
    dog,
  };
  return (
    <div>
      <img src={images[name]} alt={name} />
      <p>{name}</p>

      <p>Licznik 0</p>
    </div>
  );
};

export default Animal;
