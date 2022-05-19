import React, { useState } from "react";

function ToyForm({handleAddNewToy}) {

  const [newToyData, setNewToyData] = useState({
    name:"",
    image:"",
    likes: 0
  })

  function handleChange(e){
    setNewToyData({
      ...newToyData,
      [e.target.name] : e.target.value
    })
  }

  function handleFormSubmit(e){
    e.preventDefault();

    fetch("http://localhost:3001/toys",{
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newToyData),
    })
    .then(resp => resp.json())
    .then(newToy => handleAddNewToy(newToy))
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleFormSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
          onClick = {handleChange}
        />
      </form>
    </div>
  );
}

export default ToyForm;
