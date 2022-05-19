import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, setToys, handleLikePress, deleteToy}) {
console.log(toys)
const toyCards = toys.map(eachToy => (
  <ToyCard setToys={setToys} eachToy={eachToy} key={eachToy.id} deleteToy={deleteToy} handleLikePress={handleLikePress} />
))

  return (
    <div id="toy-collection">{toyCards}</div>
  );
}

export default ToyContainer;
