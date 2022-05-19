import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  useEffect(()=> {
    fetch("http://localhost:3001/toys")
    .then(resp => resp.json())
    .then(toys => setToys(toys))
  }, [])

  function handleAddNewToy(newToy){
    const newToyArray = [...toys, newToy]
    setToys(newToyArray)
  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleLikePress(newObj){
    const updatedArray = toys.map(toy =>(
      toy.id=== newObj.id ? newObj : toy
    ))
    setToys(updatedArray)
    }

    function deleteToy(eachToy){
      console.log(eachToy.id)
      let updatedToyArray = toys.filter(toy => toy.id !== eachToy.id)
      setToys(updatedToyArray)
      console.log(updatedToyArray)
    }

  return (
    <>
      <Header />
      {showForm ? <ToyForm handleAddNewToy={handleAddNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer setToys={setToys} toys={toys} handleLikePress={handleLikePress} deleteToy={deleteToy} />
    </>
  );
}

export default App;
